import React from 'react';
import { motion } from 'motion/react';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Điều khoản Dịch vụ</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
        
        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Chấp nhận điều khoản</h2>
            <p>Bằng việc truy cập và sử dụng PsycheAcademic, bạn đồng ý tuân thủ các Điều khoản Dịch vụ này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản, vui lòng không sử dụng dịch vụ của chúng tôi.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Quyền sở hữu trí tuệ</h2>
            <p>Toàn bộ nội dung, tài liệu nghiên cứu, bài viết và công cụ phân tích trên PsycheAcademic đều thuộc bản quyền của chúng tôi hoặc các tác giả được cấp phép. Bạn không được phép sao chép, phân phối hoặc sử dụng cho mục đích thương mại mà không có sự đồng ý bằng văn bản.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Trách nhiệm người dùng</h2>
            <p>Bạn cam kết cung cấp thông tin chính xác khi đăng ký tài khoản và chịu trách nhiệm bảo mật thông tin đăng nhập của mình. Mọi hành vi sử dụng nền tảng để phát tán nội dung độc hại, vi phạm pháp luật hoặc quấy rối người khác đều bị nghiêm cấm.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Giới hạn trách nhiệm</h2>
            <p>Các tài liệu và công cụ phân tích tâm lý trên PsycheAcademic chỉ mang tính chất tham khảo học thuật. Chúng tôi không chịu trách nhiệm cho bất kỳ quyết định y tế, tâm lý học lâm sàng hoặc hành động nào dựa trên thông tin từ nền tảng này.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Thay đổi điều khoản</h2>
            <p>Chúng tôi có quyền cập nhật và thay đổi các Điều khoản này bất cứ lúc nào. Việc bạn tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
