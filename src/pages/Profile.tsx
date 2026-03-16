import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import { User, Activity, Target, Calendar, Save } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user, updateProfile } = useAuth();
  
  const [weight, setWeight] = useState(user?.weight || 0);
  const [height, setHeight] = useState(user?.height || 0);
  const [goal, setGoal] = useState(user?.goal || '');
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    return <Navigate to="/auth" />;
  }

  const handleSave = () => {
    updateProfile({ weight, height, goal });
    setIsEditing(false);
  };

  const bmi = height > 0 ? (weight / Math.pow(height / 100, 2)).toFixed(1) : '0';

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
            <div className="w-24 h-24 bg-emerald-500 rounded-full mx-auto flex items-center justify-center border-4 border-white shadow-lg mb-4">
              <User size={48} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">{user.name}</h2>
            <p className="text-emerald-400 mt-1">{user.email}</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-slate-900">Hồ sơ Thể chất</h3>
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="text-emerald-600 hover:text-emerald-700 font-medium px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Chỉnh sửa
                </button>
              ) : (
                <button 
                  onClick={handleSave}
                  className="flex items-center text-white bg-emerald-600 hover:bg-emerald-700 font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  <Save size={18} className="mr-2" />
                  Lưu thay đổi
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weight */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center text-slate-500 mb-2">
                  <Activity size={20} className="mr-2 text-blue-500" />
                  <span className="font-medium">Cân nặng (kg)</span>
                </div>
                {isEditing ? (
                  <input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full text-2xl font-bold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                ) : (
                  <p className="text-3xl font-bold text-slate-900">{user.weight} <span className="text-lg text-slate-500 font-normal">kg</span></p>
                )}
              </div>

              {/* Height */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center text-slate-500 mb-2">
                  <Activity size={20} className="mr-2 text-purple-500" />
                  <span className="font-medium">Chiều cao (cm)</span>
                </div>
                {isEditing ? (
                  <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full text-2xl font-bold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                ) : (
                  <p className="text-3xl font-bold text-slate-900">{user.height} <span className="text-lg text-slate-500 font-normal">cm</span></p>
                )}
              </div>

              {/* Goal */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 md:col-span-2">
                <div className="flex items-center text-slate-500 mb-2">
                  <Target size={20} className="mr-2 text-red-500" />
                  <span className="font-medium">Mục tiêu tập luyện</span>
                </div>
                {isEditing ? (
                  <select 
                    value={goal} 
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full text-xl font-bold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    <option value="Tăng cơ giảm mỡ">Tăng cơ giảm mỡ (Recomp)</option>
                    <option value="Giảm cân">Giảm cân (Cutting)</option>
                    <option value="Tăng cân">Tăng cân (Bulking)</option>
                    <option value="Duy trì sức khỏe">Duy trì sức khỏe</option>
                  </select>
                ) : (
                  <p className="text-2xl font-bold text-slate-900">{user.goal}</p>
                )}
              </div>
            </div>

            {/* BMI & Stats */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Chỉ số BMI hiện tại</p>
                  <p className="text-3xl font-extrabold text-emerald-600">{bmi}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500 font-medium flex items-center justify-end">
                    <Calendar size={16} className="mr-1" />
                    Thành viên từ
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    {new Date(user.joinedAt).toLocaleDateString('vi-VN')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};
