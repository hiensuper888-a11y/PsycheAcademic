# PsycheAcademic — Source Code Improvements

> Ngày cải thiện: 2026-05-20  
> Trạng thái: Applied ✅

---

## Tóm tắt

| File | Vấn đề | Đã sửa |
|------|--------|--------|
| `src/services/geminiService.ts` | Model sai (`gemini-3-flash-preview`), không giới hạn content | ✅ |
| `src/pages/TargetAnalysis.tsx` | Model sai | ✅ |
| `src/pages/TargetAudience.tsx` | Model sai | ✅ |
| `server.ts` | Không có security headers, bind 0.0.0.0 ở dev, không validate ID | ✅ |
| `src/context/ThemeContext.tsx` | localStorage crash nếu disabled, matchMedia unsafe | ✅ |
| `src/context/AuthContext.tsx` | Không validate email/password trước khi gọi API | ✅ |
| `src/pages/Home.tsx` | Không memoize, filter chạy mỗi keystroke, sort năm sai | ✅ |

---

## Chi tiết từng file

### 1. `src/services/geminiService.ts`

**Vấn đề:**
- Model `"gemini-3-flash-preview"` không tồn tại → mọi AI summary đều fail
- Không giới hạn độ dài content → có thể vượt token limit

**Fix:**
```diff
- model: "gemini-3-flash-preview"
+ model: "gemini-2.0-flash"

+ const MAX_CONTENT_LENGTH = 30000;
+ const truncated = content.length > MAX_CONTENT_LENGTH
+   ? content.slice(0, MAX_CONTENT_LENGTH) + '...'
+   : content;
```

---

### 2. `src/pages/TargetAnalysis.tsx` & `TargetAudience.tsx`

**Vấn đề:** Cùng lỗi model sai `"gemini-3-flash-preview"`

**Fix:** Đổi thành `"gemini-2.0-flash"` ở cả 2 file.

---

### 3. `server.ts`

**Vấn đề:**
- Không có security headers (X-Content-Type-Options, X-Frame-Options, v.v.)
- Dev server bind `0.0.0.0` → expose ra mạng nội bộ
- `req.params.id` không được validate → path traversal potential
- Không có `express.json()` middleware
- PORT không thể override bằng env var

**Fix:**
```ts
// Security headers middleware
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  if (isProduction) res.setHeader("Strict-Transport-Security", "...");
  next();
});

// Validate article ID
if (!/^[\w-]+$/.test(id)) {
  res.status(400).json({ error: "Invalid article id" });
  return;
}

// Dev: bind localhost only
const host = isProduction ? "0.0.0.0" : "127.0.0.1";
```

---

### 4. `src/context/ThemeContext.tsx`

**Vấn đề:**
- `localStorage.getItem()` throws nếu browser block storage (private mode)
- `window.matchMedia` có thể undefined ở SSR/test environments

**Fix:**
```ts
// Bọc trong try/catch
try {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
} catch {}

// Optional chaining cho matchMedia
window.matchMedia?.('(prefers-color-scheme: dark)').matches

// Dùng classList.toggle thay vì add/remove
root.classList.toggle('dark', theme === 'dark');
```

---

### 5. `src/context/AuthContext.tsx`

**Vấn đề:** Không validate email/password trước khi gọi Supabase → lỗi trả về không rõ ràng

**Fix:**
```ts
const loginWithEmail = async (email: string, password: string) => {
  if (!email.includes('@')) throw new Error('Invalid email address');
  if (password.length < 6) throw new Error('Password must be at least 6 characters');
  // email.trim() để loại bỏ whitespace vô tình
  await supabase.auth.signInWithPassword({ email: email.trim(), password });
};
```

---

### 6. `src/pages/Home.tsx`

**Vấn đề:**
- `filteredArticles` tính toán lại mỗi render (không `useMemo`)
- `getLocalized` tạo mới mỗi render (không `useCallback`)
- Search filter chạy ngay mỗi keystroke (không debounce)
- Year sort dùng string comparison (không numeric)
- Ảnh bài viết không có `loading="lazy"`

**Fix:**
```ts
// Debounce 300ms
const [debouncedQuery, setDebouncedQuery] = useState('');
useEffect(() => {
  const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300);
  return () => clearTimeout(timer);
}, [searchQuery]);

// Memoize tất cả
const getLocalized = useCallback((field: any): string => {...}, [currentLang]);
const authors = useMemo(() => [...], [articles]);
const topics = useMemo(() => [...], [articles, getLocalized]);
const years = useMemo(() => [...].sort((a, b) => Number(b) - Number(a)), [articles]);
const filteredArticles = useMemo(() => {...}, [articles, debouncedQuery, ...filters]);
const suggestions = useMemo(() => {...}, [articles, searchQuery, getLocalized]);

// Lazy load ảnh
<img loading="lazy" ... />
```

---

## Những vấn đề còn lại (chưa sửa — cần thảo luận)

| Vấn đề | Lý do chưa sửa |
|--------|---------------|
| Supabase anon key hardcoded trong `src/lib/supabase.ts` | Anon key là public OK, nhưng nên dùng env var. Cần thêm VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY vào Vercel env vars trước khi đổi |
| `geminiService.ts` gọi từ client-side với `process.env` | Vite expose qua `define` trong `vite.config.ts` — cần chuyển sang VITE_ prefix env vars hoặc server-side route |
| `TargetAnalysis.tsx`: API key trong localStorage | Đây là design decision của app — user tự nhập API key |
| `Article.tsx`: rehypeRaw + XSS risk | Nếu content là data tĩnh nội bộ thì OK. Cần sanitize nếu cho phép user-generated content |
| `Auth.tsx`: particles dùng `Math.random()` trên mỗi render | Không nghiêm trọng — chỉ chạy 1 lần vì component không re-render với particles |

---

## Cách kết nối Supabase MCP trong Claude Code

MCP đã được cấu hình tại `.mcp.json`:
```json
{
  "mcpServers": {
    "supabase": {
      "type": "http",
      "url": "https://mcp.supabase.com/mcp?project_ref=rexovfpgmqtvjardwqrf"
    }
  }
}
```

Khi mở project trong Claude Code, MCP sẽ tự động kết nối. Có thể dùng để:
- Query tables trực tiếp
- Xem schema và RLS policies
- Debug auth issues
- Chạy migrations

---

## TODO tiếp theo (tùy chọn)

```
[ ] Thêm VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY vào Vercel env vars
[ ] Thêm /api/ai/summarize server route để Gemini key không client-side
[ ] Thêm rehype-sanitize để bảo vệ khỏi XSS trong Article.tsx
[ ] Thêm React Error Boundary để handle crash gracefully
[ ] npm install để cài dependencies và chạy TypeScript check
```

---

*Tạo bởi Claude Code — 2026-05-20*
