import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import { Logo } from '../components/Logo';
import { Mail, User, Lock, ArrowRight } from 'lucide-react';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      login(email, name || 'User');
    } else {
      register(email, name);
    }
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center text-emerald-500">
          <Logo className="w-16 h-16" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
          {isLogin ? 'Đăng nhập vào tài khoản' : 'Tạo tài khoản mới'}
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors"
          >
            {isLogin ? 'Hoặc đăng ký tài khoản mới' : 'Đã có tài khoản? Đăng nhập ngay'}
          </button>
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Họ và tên
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-xl py-3 border bg-slate-50"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Địa chỉ Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-xl py-3 border bg-slate-50"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Mật khẩu
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-xl py-3 border bg-slate-50"
                  placeholder="••••••••"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                *Lưu ý: Do bạn đã từ chối thiết lập Firebase, ứng dụng đang chạy ở chế độ mô phỏng (Local Storage). Mật khẩu không được lưu trữ thực sự.
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
              >
                {isLogin ? 'Đăng nhập' : 'Đăng ký'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
