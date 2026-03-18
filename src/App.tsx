/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
const Article = React.lazy(() => import('./pages/Article').then(module => ({ default: module.Article })));
import { Auth } from './pages/Auth';
import { Profile } from './pages/Profile';
import { TargetAnalysis } from './pages/TargetAnalysis';
import { TargetAudience } from './pages/TargetAudience';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>;
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
            <Navbar />
            <main>
              <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/article/:id" element={<ProtectedRoute><Suspense fallback={<div>Loading...</div>}><Article /></Suspense></ProtectedRoute>} />
                <Route path="/target-analysis" element={<ProtectedRoute><TargetAnalysis /></ProtectedRoute>} />
                <Route path="/target-audience" element={<ProtectedRoute><TargetAudience /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
