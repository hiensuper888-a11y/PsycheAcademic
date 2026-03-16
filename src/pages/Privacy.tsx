import React from 'react';
import { motion } from 'motion/react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Chính sách Bảo mật</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
        
        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Thu thập thông tin</h2>
            <p>Chúng tôi thu thập các thông tin cá nhân cơ bản khi bạn đăng ký tài khoản, bao gồm: Họ tên, địa chỉ email, và ảnh đại diện (nếu đăng nhập qua Google/X). Ngoài ra, chúng tôi cũng lưu trữ dữ liệu phân tích và lịch sử học tập của bạn trên nền tảng.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Sử dụng thông tin</h2>
            <p className="mb-2">Thông tin của bạn được sử dụng để:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cung cấp và cá nhân hóa trải nghiệm học tập, nghiên cứu.</li>
              <li>Cải thiện các công cụ phân tích tâm lý học.</li>
              <li>Gửi thông báo về cập nhật hệ thống hoặc tài liệu mới (nếu bạn đồng ý).</li>
              <li>Đảm bảo an toàn và bảo mật cho tài khoản của bạn.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Chia sẻ dữ liệu</h2>
            <p>Chúng tôi cam kết không bán hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba. Dữ liệu chỉ được chia sẻ trong các trường hợp yêu cầu bởi pháp luật hoặc với các đối tác cung cấp dịch vụ hạ tầng dưới các điều khoản bảo mật nghiêm ngặt.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Bảo mật dữ liệu</h2>
            <p>Chúng tôi áp dụng các biện pháp mã hóa và bảo mật tiêu chuẩn ngành để bảo vệ dữ liệu của bạn khỏi việc truy cập, thay đổi hoặc phá hoại trái phép. Tuy nhiên, không có phương thức truyền tải qua Internet nào là an toàn 100%.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Quyền của bạn</h2>
            <p>Bạn có quyền truy cập, chỉnh sửa hoặc yêu cầu xóa toàn bộ dữ liệu cá nhân của mình khỏi hệ thống PsycheAcademic bất cứ lúc nào thông qua phần Cài đặt tài khoản hoặc liên hệ với bộ phận hỗ trợ.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};
