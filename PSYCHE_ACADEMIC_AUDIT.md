# PsycheAcademic — Kiểm tra Web & Vercel CLI + Supabase MCP

> Ngày kiểm tra: 2026-05-20

---

## 1. Thông tin Project

| Mục | Giá trị |
|-----|---------|
| Tên project | `psyche-academic` |
| Vercel URL | https://psyche-academic.vercel.app |
| Org | `hiensuper888-a11ys-projects` |
| Node version | 24.x |
| Framework | React 19 + Vite 6 + Tailwind CSS 4 |
| Build tool | `vite build` |
| Dev server | `tsx server.ts` (Express) |

---

## 2. Kiểm tra Vercel CLI — Deployments

```
vercel ls psyche-academic
```

| Age | Deployment URL | Status | Env |
|-----|---------------|--------|-----|
| 37d | psyche-academic-3v43fc0l7-... | ● Ready | Production |
| 37d | psyche-academic-6gmdguroi-... | ● Ready | Production |
| 37d | psyche-academic-cz1hu62vd-... | ● Ready | Production |
| 49d | psyche-academic-i9grbaoe3-... | ● Ready | Production |
| 49d | psyche-academic-mfotegasd-... | ● Ready | Production |
| 56d | psyche-academic-79q4bgm5z-... | ● Ready | Production |
| 56d | psyche-academic-a5a92wol8-... | ● Error | Production |
| 56d | psyche-academic-ipa8uiyzm-... | Canceled | Production |

**Trạng thái hiện tại:** Production Ready — deployment mới nhất (37 ngày trước) thành công.

---

## 3. Cấu trúc App

### Stack chính
- **Frontend:** React 19, React Router v7, TailwindCSS 4, Lucide React, Motion
- **Backend:** Express (server.ts), chạy local/dev
- **Database/Auth:** Supabase (`@supabase/supabase-js ^2.99.1`)
- **AI:** Google Gemini AI (`@google/genai ^1.46.0`)
- **i18n:** i18next + react-i18next
- **Charts:** Recharts
- **Export:** docx, xlsx, file-saver

### Routes (App.tsx)
| Path | Component | Protected |
|------|-----------|-----------|
| `/` | Home | Có |
| `/article/:id` | Article | Có |
| `/target-analysis` | TargetAnalysis | Có |
| `/target-audience` | TargetAudience | Có |
| `/profile` | Profile | Có |
| `/auth` | Auth | Không |
| `/terms` | Terms | Không |
| `/privacy` | Privacy | Không |

### Context Providers
- `ThemeProvider` — Dark/light mode
- `AuthProvider` (Supabase auth) — bảo vệ routes

---

## 4. Supabase Configuration

| Mục | Giá trị |
|-----|---------|
| Project URL | `https://rexovfpgmqtvjardwqrf.supabase.co` |
| Project Ref | `rexovfpgmqtvjardwqrf` |
| Anon Key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (public, anon key) |
| Client file | `src/lib/supabase.ts` |

---

## 5. Supabase MCP — Đã thêm thành công

### Lệnh đã chạy
```bash
claude mcp add --scope project --transport http supabase \
  "https://mcp.supabase.com/mcp?project_ref=rexovfpgmqtvjardwqrf"
```

### Kết quả
```
Added HTTP MCP server supabase with URL:
https://mcp.supabase.com/mcp?project_ref=rexovfpgmqtvjardwqrf
to project config
File modified: .mcp.json
```

### Nội dung `.mcp.json` (đã tạo)
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

> **Lưu ý:** MCP này cho phép Claude Code tương tác trực tiếp với Supabase DB của project — query tables, xem schema, debug auth, v.v.

---

## 6. Git Log (10 commits gần nhất)

```
8c253f0  up
59d35ea  up
b150462  Update Logo.tsx
f1d3f8c  Update AuthorInfo.tsx
b1fcb54  fix: use UI Avatars for author avatar (Facebook CDN blocked cross-origin)
f222807  Update AuthorInfo.tsx
1b9a9cd  up
6e7dd00  Update psychologyData.ts
fc07c7d  Delete AuthContext.tsx
d3ed818  fix: Correct corrupted data and layout in psychology data
```

---

## 7. Vercel.json Config

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Single-page app rewrite — tất cả routes về `index.html` (chuẩn cho React Router client-side routing).

---

## 8. Các file cần chú ý

| File | Mô tả |
|------|-------|
| `src/lib/supabase.ts` | Supabase client khởi tạo |
| `src/context/AuthContext.tsx` | Auth state management |
| `src/services/geminiService.ts` | Google Gemini AI service |
| `src/data/psychologyData.ts` | Dữ liệu tâm lý học chính |
| `src/data/syndromes.ts` | Dữ liệu hội chứng tâm lý |
| `src/data/influenceTechniques.ts` | Kỹ thuật ảnh hưởng tâm lý |
| `.mcp.json` | **MCP server config (mới thêm)** |

---

## 9. Lưu ý bảo mật

- Supabase anon key hardcoded trong `src/lib/supabase.ts` — đây là **anon key** (public, không nguy hiểm), nhưng nên cân nhắc dùng env var.
- `.env.example` không có `SUPABASE_URL` và `SUPABASE_ANON_KEY` — nên thêm vào.
- JWT_SECRET trong `.env.example` cần được set đúng trong Vercel env vars.

---

*Báo cáo tự động tạo bởi Claude Code — 2026-05-20*
