import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      "nav.features": "Tính năng",
      "nav.library": "Thư viện",
      "nav.login": "Đăng nhập",
      "nav.logout": "Đăng xuất",
      "hero.title1": "Nghiên cứu Tâm lý học",
      "hero.title2": "Dựa trên Khoa học",
      "hero.subtitle": "Khám phá những hiểu biết sâu sắc về hành vi và tư duy con người thông qua các nghiên cứu khoa học uy tín.",
      "hero.btn.explore": "Khám phá ngay",
      "hero.btn.learnMore": "Tìm hiểu thêm",
      "feat.research.title": "Nghiên cứu uy tín",
      "feat.research.desc": "Dữ liệu từ các tạp chí tâm lý học hàng đầu thế giới.",
      "feat.analysis.title": "Phân tích chuyên sâu",
      "feat.analysis.desc": "Hiểu rõ cơ chế hoạt động của não bộ và hành vi con người.",
      "feat.safety.title": "Ứng dụng thực tiễn",
      "feat.safety.desc": "Áp dụng các lý thuyết tâm lý học để cải thiện chất lượng cuộc sống.",
      "home.libraryTitle": "Thư viện Nghiên cứu",
      "home.readMore": "Đọc chi tiết",
      "article.back": "Quay lại trang chủ",
      "article.comparison": "So sánh",
      "article.premium": "Cao cấp nhất",
      "article.brands": "Tổ chức & Nghiên cứu Uy tín",
      "article.brandsDesc": "Các tổ chức nghiên cứu hàng đầu thế giới.",
      "article.products": "Nghiên cứu tiêu biểu",
      "article.brandWebsite": "Trang chủ tổ chức",
      "article.productDetail": "Xem chi tiết nghiên cứu",
      "article.sources": "Nguồn Nghiên Cứu Khoa Học",
      "article.chartTitle": "Biểu đồ Tác động Toàn diện",
      "article.keyTakeaways": "Điểm cốt lõi",
      "home.searchPlaceholder": "Tìm kiếm bài viết...",
      "home.noResults": "Không tìm thấy bài viết nào phù hợp.",
      "home.clearSearch": "Xóa tìm kiếm",
      "article.tocTitle": "Danh mục",
      "article.tocSearchPlaceholder": "Tìm mục lục...",
      "article.tocNoResults": "Không tìm thấy mục nào"
    }
  },
  en: {
    translation: {
      "nav.features": "Features",
      "nav.library": "Library",
      "nav.login": "Login",
      "nav.logout": "Logout",
      "hero.title1": "Psychology Research",
      "hero.title2": "Science-Based",
      "hero.subtitle": "Explore deep insights into human behavior and cognition through reputable scientific studies.",
      "hero.btn.explore": "Explore Now",
      "hero.btn.learnMore": "Learn More",
      "feat.research.title": "Reputable Research",
      "feat.research.desc": "Data from top psychology journals worldwide.",
      "feat.analysis.title": "In-depth Analysis",
      "feat.analysis.desc": "Understand the mechanisms of brain function and human behavior.",
      "feat.safety.title": "Practical Application",
      "feat.safety.desc": "Apply psychological theories to improve quality of life.",
      "home.libraryTitle": "Research Library",
      "home.readMore": "Read Details",
      "article.back": "Back to Home",
      "article.comparison": "Comparison",
      "article.premium": "Premium",
      "article.brands": "Reputable Organizations & Research",
      "article.brandsDesc": "World's leading research organizations.",
      "article.products": "Featured Studies",
      "article.brandWebsite": "Organization Website",
      "article.productDetail": "View Study Details",
      "article.sources": "Scientific Research Sources",
      "article.chartTitle": "Comprehensive Impact Chart",
      "article.keyTakeaways": "Key Takeaways",
      "home.searchPlaceholder": "Search articles...",
      "home.noResults": "No articles found matching your search.",
      "home.clearSearch": "Clear search",
      "article.tocTitle": "Table of Contents",
      "article.tocSearchPlaceholder": "Search TOC...",
      "article.tocNoResults": "No sections found"
    }
  },
  zh: {
    translation: {
      "nav.features": "功能",
      "nav.library": "图书馆",
      "nav.login": "登录",
      "nav.logout": "登出",
      "hero.title1": "心理学研究",
      "hero.title2": "基于科学",
      "hero.subtitle": "通过权威的科学研究，探索对人类行为和思维的深刻见解。",
      "hero.btn.explore": "立即探索",
      "hero.btn.learnMore": "了解更多",
      "feat.research.title": "权威研究",
      "feat.research.desc": "来自全球顶尖心理学期刊的数据。",
      "feat.analysis.title": "深入分析",
      "feat.analysis.desc": "了解大脑功能和人类行为的机制。",
      "feat.safety.title": "实际应用",
      "feat.safety.desc": "应用心理学理论来改善生活质量。",
      "home.libraryTitle": "研究图书馆",
      "home.readMore": "阅读详情",
      "article.back": "返回首页",
      "article.comparison": "比较",
      "article.premium": "高级",
      "article.brands": "知名组织与研究",
      "article.brandsDesc": "全球领先的研究组织。",
      "article.products": "特色研究",
      "article.brandWebsite": "组织网站",
      "article.productDetail": "查看研究详情",
      "article.sources": "科学研究来源",
      "article.chartTitle": "综合影响图表",
      "article.keyTakeaways": "核心要点",
      "home.searchPlaceholder": "搜索文章...",
      "home.noResults": "未找到匹配的文章。",
      "home.clearSearch": "清除搜索",
      "article.tocTitle": "目录",
      "article.tocSearchPlaceholder": "搜索目录...",
      "article.tocNoResults": "未找到相关章节"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi", // default language
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
