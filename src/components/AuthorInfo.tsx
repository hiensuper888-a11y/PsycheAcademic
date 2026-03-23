import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Phone, Mail, X, User } from 'lucide-react';

export const AuthorInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const profilePic = "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/601974923_122114680323098866_7400803319906439911_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=s-coGrcfvWsQ7kNvwE2mSLp&_nc_oc=AdpzefLP35JZd0Den8Jwn8OpJw0wQ_i7rjrufRbGFoQFoUsYVb4RvBUJvz5_hy77Z90&_nc_zt=24&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=-B9xnsRsJHEnIIa4h5FnKw&_nc_ss=7a32e&oh=00_AfwVRo4YTm0Juun5qMsCuPCyN71GH5hnXWY4-m0hy2KofQ&oe=69C6AEED";
  const momoQR = "https://img.vietqr.io/image/MOMO-0973683410-compact.png?accountName=CAO%20MINH%20HIEN";
  const bankQR = "https://img.vietqr.io/image/BIDV-3142848355-compact.png?accountName=CAO%20MINH%20HIEN";

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
            className="mb-4 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">Cao Minh Hiền</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tác giả & Nhà phát triển</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                >
                  <X size={18} className="text-slate-400" />
                </button>
              </div>

              <div className="space-y-3">
                <a 
                  href="tel:0973683410" 
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <Phone size={16} />
                  </div>
                  <span>0973683410</span>
                </a>

                <a 
                  href="mailto:hiensuper888@gmail.com" 
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/30 flex items-center justify-center text-red-600">
                    <Mail size={16} />
                  </div>
                  <span>hiensuper888@gmail.com</span>
                </a>

                <a 
                  href="https://www.facebook.com/profile.php?id=61582965982019" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <Facebook size={16} />
                  </div>
                  <span>Facebook Cá Nhân</span>
                </a>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Ủng hộ tác giả (Donate)</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <div className="group relative overflow-hidden rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                        <img 
                          src={momoQR} 
                          alt="Momo QR" 
                          className="w-full aspect-square object-contain p-1"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[10px] text-white font-bold">Quét Momo</span>
                        </div>
                      </div>
                      <p className="text-[9px] text-center font-bold text-slate-500">MOMO</p>
                    </div>
                    <div className="space-y-1">
                      <div className="group relative overflow-hidden rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                        <img 
                          src={bankQR} 
                          alt="Bank QR" 
                          className="w-full aspect-square object-contain p-1"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[10px] text-white font-bold">Quét BIDV</span>
                        </div>
                      </div>
                      <p className="text-[9px] text-center font-bold text-slate-500">BIDV</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group">
        {/* Sun-like Glow */}
        <div className="absolute inset-0 -z-10">
           <div className="absolute inset-0 bg-yellow-400/50 blur-2xl rounded-full scale-150 animate-pulse"></div>
           <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-full scale-200 animate-pulse delay-700"></div>
           <div className="absolute inset-0 bg-white/40 blur-xl rounded-full scale-110 animate-pulse delay-300"></div>
        </div>
        
        {/* Dense Sun Rays - Exactly 27 rays */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -z-10"
        >
          {[...Array(27)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ 
                opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
                scaleX: [1, 1.4, 1.2, 1.5, 1],
                width: [140, 180, 160, 200, 140]
              }}
              transition={{ 
                duration: 5 + Math.random() * 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.1 
              }}
              className="absolute top-1/2 left-1/2 h-[1.5px] bg-gradient-to-r from-yellow-400/90 via-yellow-200/40 to-transparent -translate-y-1/2 origin-left"
              style={{ 
                transform: `rotate(${i * (360 / 27)}deg) translateX(0px)`,
                width: `${120 + Math.random() * 80}px`
              }}
            />
          ))}
        </motion.div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-3 p-1.5 pr-4 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-yellow-400/50 hover:border-yellow-400 transition-all hover:scale-105 active:scale-95 group"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400">
            <img 
              src={profilePic} 
              alt="Cao Minh Hiền" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold text-slate-900 dark:text-white">Cao Minh Hiền</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <User size={10} />
              About Me
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
