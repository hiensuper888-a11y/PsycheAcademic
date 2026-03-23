import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Stepper } from '../components/Stepper';

export const Auth: React.FC = () => {
  const { user, loading, loginWithGoogle, loginWithX, loginWithEmail, registerWithEmail } = useAuth();
  const { t } = useTranslation();
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <Loader2 className="w-12 h-12 animate-spin text-indigo-600 dark:text-indigo-400" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await loginWithGoogle();
    } catch (err: any) {
      setError(err.message || t('auth.errorGoogle'));
    }
  };

  const handleXLogin = async () => {
    setError('');
    try {
      await loginWithX();
    } catch (err: any) {
      setError(err.message || t('auth.errorX'));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (isLogin) {
        await loginWithEmail(email, password);
      } else {
        await registerWithEmail(email, password, name);
        // Supabase auto-logs in after sign up if email confirmation is disabled,
        // otherwise we might need to show a "check your email" message.
        // For now, we assume it logs in or we just show a success message.
      }
    } catch (err: any) {
      setError(err.message || t('auth.errorEmail'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-slate-900 transition-colors duration-200">
      {/* Left Pane - Branding & Imagery */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-between p-12 bg-gradient-to-br from-indigo-900 via-slate-900 to-emerald-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop" 
            alt="Brain and Psychology" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-white">
            <Brain className="w-10 h-10 text-emerald-400" />
            <span className="font-serif font-bold text-2xl tracking-tight">Psyche<span className="text-emerald-400">Academic</span></span>
          </div>
        </div>

        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            {t('auth.heroTitle')}
          </h1>
          <p className="text-lg text-slate-300">
            {t('auth.heroDesc')}
          </p>
        </div>

        {/* Animated Stars/Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, scale: 0.5 }}
              animate={{ 
                opacity: [0.1, 0.5, 0.1], 
                scale: [0.5, 1, 0.5],
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                delay: Math.random() * 5 
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%` 
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 flex flex-col space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 w-fit">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/50 blur-lg rounded-full animate-pulse"></div>
              <img 
                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/601974923_122114680323098866_7400803319906439911_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=s-coGrcfvWsQ7kNvwE2mSLp&_nc_oc=AdpzefLP35JZd0Den8Jwn8OpJw0wQ_i7rjrufRbGFoQFoUsYVb4RvBUJvz5_hy77Z90&_nc_zt=24&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=-B9xnsRsJHEnIIa4h5FnKw&_nc_ss=7a32e&oh=00_AfwVRo4YTm0Juun5qMsCuPCyN71GH5hnXWY4-m0hy2KofQ&oe=69C6AEED" 
                alt="Cao Minh Hiền" 
                className="relative w-12 h-12 rounded-full border-2 border-yellow-400 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Cao Minh Hiền</p>
              <p className="text-slate-300 text-[10px] uppercase tracking-widest font-bold">Developer & Creator</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <span>© 2026 PsycheAcademic</span>
            <span>•</span>
            <Link to="/privacy" className="hover:text-white transition-colors">{t('auth.privacyLink')}</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">{t('auth.termsLink')}</Link>
          </div>
        </div>
      </div>

      {/* Right Pane - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 overflow-y-auto bg-white dark:bg-slate-900">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center justify-center space-x-3 text-slate-900 dark:text-white mb-12">
            <Brain className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            <span className="font-serif font-bold text-2xl tracking-tight">Psyche<span className="text-emerald-600 dark:text-emerald-400">Academic</span></span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Background Glow for Form */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/5 to-indigo-500/5 blur-3xl rounded-[3rem] -z-10"></div>
            
            <Stepper
              steps={[t('auth.loginTitle'), t('auth.registerTitle')]}
              currentStep={isLogin ? 0 : 1}
              onStepClick={(step) => {
                setIsLogin(step === 0);
                setError('');
              }}
            />

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 text-red-600 dark:text-red-400 rounded-xl text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{t('auth.name')}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                      </div>
                      <input
                        type="text"
                        required={!isLogin}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all sm:text-sm"
                        placeholder={t('auth.name')}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{t('auth.email')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{t('auth.password')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-emerald-500/20 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    {isLogin ? t('auth.loginBtn') : t('auth.registerBtn')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400">{t('auth.or')}</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  {t('auth.google')}
                </button>

                <button
                  onClick={handleXLogin}
                  className="w-full flex items-center justify-center px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  {t('auth.x')}
                </button>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
              {isLogin ? t('auth.noAccountText') : t('auth.hasAccountText')}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
                className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors"
              >
                {isLogin ? t('auth.registerNow') : t('auth.loginNow')}
              </button>
            </p>

            <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-500">
              {t('auth.termsAgreement1')}
              <Link to="/terms" className="text-indigo-600 dark:text-indigo-400 hover:underline">{t('auth.termsLink')}</Link>
              {t('auth.termsAgreement2')}
              <Link to="/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">{t('auth.privacyLink')}</Link>
              {t('auth.termsAgreement3')}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
