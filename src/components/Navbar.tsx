import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { User, LogOut, Globe, Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
  const { user, loading, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
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
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Logo className="w-11 h-11" showText={true} size="md" />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <a href="/#features" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">{t('nav.features')}</a>
            <a href="/#articles" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">{t('nav.library')}</a>
            <Link to="/target-analysis" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">{t('nav.targetAnalysis')}</Link>
            <Link to="/target-audience" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">{t('nav.targetAudience')}</Link>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              title={theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="relative group hidden sm:block">
              <button className="flex items-center space-x-1 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2">
                <Globe size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">{i18n.language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden border border-slate-100 dark:border-slate-700">
                <button onClick={() => changeLanguage('vi')} className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">{t('nav.vi')}</button>
                <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">{t('nav.en')}</button>
                <button onClick={() => changeLanguage('zh')} className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">{t('nav.zh')}</button>
              </div>
            </div>

            {loading ? (
              <div className="w-20 h-10 animate-pulse bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-2 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
                  {user.picture ? (
                    <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="hidden sm:inline">{user.name}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  title={t('nav.logout')}
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link 
                to="/auth" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm hover:shadow-md"
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
