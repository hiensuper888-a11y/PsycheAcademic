import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  username?: string;
  picture?: string;
  provider: string;
  phone?: string;
  address?: string;
  company?: string;
  department?: string;
  position?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithX: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const mapUser = (supabaseUser: User) => {
    const identity = supabaseUser.identities?.[0];
    const provider = identity?.provider || 'email';
    const metadata = supabaseUser.user_metadata;

    setUser({
      id: supabaseUser.id,
      name: metadata?.full_name || metadata?.name || supabaseUser.email?.split('@')[0] || 'User',
      email: supabaseUser.email,
      username: metadata?.user_name || metadata?.preferred_username,
      picture: metadata?.avatar_url || metadata?.picture,
      provider: provider,
      phone: metadata?.phone,
      address: metadata?.address,
      company: metadata?.company,
      department: metadata?.department,
      position: metadata?.position,
    });
  };

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        mapUser(session.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        mapUser(session.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  };

  const loginWithX = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'x',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error('X login error:', error);
      throw error;
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const registerWithEmail = async (email: string, password: string, name: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        }
      }
    });
    if (error) throw error;
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      const { error, data: updateData } = await supabase.auth.updateUser({
        data: {
          full_name: data.name,
          avatar_url: data.picture,
          phone: data.phone,
          address: data.address,
          company: data.company,
          department: data.department,
          position: data.position,
        }
      });
      if (error) throw error;
      if (updateData.user) {
        mapUser(updateData.user);
      }
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  };

  const updatePassword = async (password: string) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });
      if (error) throw error;
    } catch (error) {
      console.error('Update password error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, loginWithX, loginWithEmail, registerWithEmail, logout, updateProfile, updatePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
