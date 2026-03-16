import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white border-b border-slate-200 text-slate-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 text-indigo-600 hover:text-indigo-700 transition-colors">
            <Logo className="w-10 h-10" />
            <span className="font-serif font-bold text-2xl tracking-tight text-slate-900">Psyche<span className="text-indigo-600">Academic</span></span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <a href="/#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">{t('nav.features')}</a>
            <a href="/#articles" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">{t('nav.library')}</a>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-slate-600 hover:text-indigo-600 transition-colors p-2">
                <Globe size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">{i18n.language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <button onClick={() => changeLanguage('vi')} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Tiếng Việt</button>
                <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">English</button>
                <button onClick={() => changeLanguage('zh')} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">中文</button>
              </div>
            </div>

            {user ? (
              <>
                <Link to="/profile" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                  <User size={20} />
                  <span className="hidden sm:inline font-medium">{user.name}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                  title={t('nav.logout')}
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                {t('nav.login')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
