import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import { User, Mail, Shield, Globe, Edit2, Save, X, Phone, MapPin, Building, Briefcase, Key, Loader2, Camera } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user, updateProfile, updatePassword } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    picture: '',
    phone: '',
    address: '',
    company: '',
    department: '',
    position: '',
  });

  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        picture: user.picture || '',
        phone: user.phone || '',
        address: user.address || '',
        company: user.company || '',
        department: user.department || '',
        position: user.position || '',
      });
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/auth" />;
  }

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    try {
      await updateProfile(formData);
      setSuccess('Cập nhật hồ sơ thành công!');
      setIsEditing(false);
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra khi cập nhật hồ sơ.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp.');
      return;
    }
    if (passwordData.newPassword.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự.');
      return;
    }
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    try {
      await updatePassword(passwordData.newPassword);
      setSuccess('Cập nhật mật khẩu thành công!');
      setIsChangingPassword(false);
      setPasswordData({ newPassword: '', confirmPassword: '' });
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra khi cập nhật mật khẩu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-slate-800 shadow-xl rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700"
        >
          {/* Header */}
          <div className="bg-slate-900 dark:bg-slate-950 px-8 py-12 text-center relative">
            <div className="w-32 h-32 bg-indigo-500 rounded-full mx-auto flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg mb-4 overflow-hidden relative group">
              {isEditing ? (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white cursor-pointer z-10">
                  <Camera size={24} className="mb-1" />
                  <span className="text-xs font-medium">Đổi ảnh</span>
                  <input 
                    type="url" 
                    placeholder="Nhập URL ảnh..."
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const url = window.prompt("Nhập URL ảnh đại diện mới:", formData.picture);
                      if (url !== null) setFormData({...formData, picture: url});
                    }}
                  />
                </div>
              ) : null}
              {(isEditing ? formData.picture : user.picture) ? (
                <img src={isEditing ? formData.picture : user.picture} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <User size={64} className="text-white" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-white">{user.name}</h2>
            {user.email && <p className="text-indigo-400 mt-1">{user.email}</p>}
            {user.username && <p className="text-indigo-400 mt-1">@{user.username}</p>}
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Thông tin tài khoản</h3>
              {!isEditing && !isChangingPassword && (
                <div className="flex space-x-3">
                  {user.provider === 'email' && (
                    <button 
                      onClick={() => setIsChangingPassword(true)}
                      className="flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm font-medium"
                    >
                      <Key size={16} className="mr-2" />
                      Đổi mật khẩu
                    </button>
                  )}
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors text-sm font-medium"
                  >
                    <Edit2 size={16} className="mr-2" />
                    Chỉnh sửa
                  </button>
                </div>
              )}
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium border border-red-100 dark:border-red-800">
                {error}
              </div>
            )}
            
            {success && (
              <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-medium border border-emerald-100 dark:border-emerald-800">
                {success}
              </div>
            )}

            {isChangingPassword ? (
              <form onSubmit={handlePasswordSubmit} className="max-w-md mx-auto bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Đổi mật khẩu</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Mật khẩu mới</label>
                    <input
                      type="password"
                      required
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Xác nhận mật khẩu</label>
                    <input
                      type="password"
                      required
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsChangingPassword(false);
                        setError('');
                      }}
                      className="flex-1 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 font-medium transition-colors"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 flex justify-center items-center px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : 'Lưu mật khẩu'}
                    </button>
                  </div>
                </div>
              </form>
            ) : isEditing ? (
              <form onSubmit={handleProfileSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Họ và tên</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Số điện thoại</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Địa chỉ</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Công ty / Tổ chức</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Bộ phận</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="text"
                        value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Chức vụ</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-slate-400" />
                      </div>
                      <input
                        type="text"
                        value={formData.position}
                        onChange={(e) => setFormData({...formData, position: e.target.value})}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setError('');
                    }}
                    className="flex items-center px-6 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 font-medium transition-colors"
                  >
                    <X size={18} className="mr-2" />
                    Hủy
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? <Loader2 size={18} className="animate-spin mr-2" /> : <Save size={18} className="mr-2" />}
                    Lưu thay đổi
                  </button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                    <User size={20} className="mr-2 text-blue-500" />
                    <span className="font-medium">Họ và tên</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{user.name || 'Chưa cập nhật'}</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                    <Phone size={20} className="mr-2 text-green-500" />
                    <span className="font-medium">Số điện thoại</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{user.phone || 'Chưa cập nhật'}</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 md:col-span-2">
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                    <MapPin size={20} className="mr-2 text-red-500" />
                    <span className="font-medium">Địa chỉ</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{user.address || 'Chưa cập nhật'}</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                    <Building size={20} className="mr-2 text-indigo-500" />
                    <span className="font-medium">Công ty / Tổ chức</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{user.company || 'Chưa cập nhật'}</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                    <Briefcase size={20} className="mr-2 text-amber-500" />
                    <span className="font-medium">Bộ phận & Chức vụ</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {user.department ? `${user.department}` : 'Chưa cập nhật'}
                    {user.position ? ` - ${user.position}` : ''}
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                    <Globe size={20} className="mr-2 text-purple-500" />
                    <span className="font-medium">Nền tảng đăng nhập</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white capitalize">{user.provider}</p>
                </div>

                {(user.email || user.username) && (
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                      <Mail size={20} className="mr-2 text-rose-500" />
                      <span className="font-medium">Email / Username</span>
                    </div>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                      {user.email || `@${user.username}`}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center">
                    <Shield size={16} className="mr-1 text-emerald-500" />
                    Trạng thái bảo mật
                  </p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">Đã xác thực</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};
