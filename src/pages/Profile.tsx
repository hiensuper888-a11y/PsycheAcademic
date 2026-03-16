import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import { User, Mail, Shield, Globe } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-100"
        >
          {/* Header */}
          <div className="bg-slate-900 px-8 py-12 text-center relative">
            <div className="w-24 h-24 bg-indigo-500 rounded-full mx-auto flex items-center justify-center border-4 border-white shadow-lg mb-4 overflow-hidden">
              {user.picture ? (
                <img src={user.picture} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <User size={48} className="text-white" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-white">{user.name}</h2>
            {user.email && <p className="text-indigo-400 mt-1">{user.email}</p>}
            {user.username && <p className="text-indigo-400 mt-1">@{user.username}</p>}
          </div>

          {/* Body */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Thông tin tài khoản</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center text-slate-500 mb-2">
                  <User size={20} className="mr-2 text-blue-500" />
                  <span className="font-medium">Họ và tên</span>
                </div>
                <p className="text-xl font-bold text-slate-900">{user.name}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center text-slate-500 mb-2">
                  <Globe size={20} className="mr-2 text-purple-500" />
                  <span className="font-medium">Nền tảng đăng nhập</span>
                </div>
                <p className="text-xl font-bold text-slate-900 capitalize">{user.provider}</p>
              </div>

              {(user.email || user.username) && (
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 md:col-span-2">
                  <div className="flex items-center text-slate-500 mb-2">
                    <Mail size={20} className="mr-2 text-red-500" />
                    <span className="font-medium">Thông tin liên hệ</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900">
                    {user.email || `@${user.username}`}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium flex items-center">
                    <Shield size={16} className="mr-1 text-emerald-500" />
                    Trạng thái bảo mật
                  </p>
                  <p className="text-lg font-bold text-emerald-600">Đã xác thực</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};
