import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  weight: number;
  height: number;
  goal: string;
  joinedAt: string;
}

interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, name: string) => void;
  register: (email: string, name: string) => void;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Check local storage on mount
    const storedUser = localStorage.getItem('fitscience_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, name: string) => {
    // Simulate login by checking if user exists in our mock "DB" (localStorage)
    // For this prototype, we'll just log them in or create if not exists
    const existingUsersStr = localStorage.getItem('fitscience_users_db');
    const existingUsers: UserProfile[] = existingUsersStr ? JSON.parse(existingUsersStr) : [];
    
    let foundUser = existingUsers.find(u => u.email === email);
    
    if (!foundUser) {
      // Auto register if not found for prototype ease
      foundUser = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        weight: 70,
        height: 170,
        goal: 'Tăng cơ giảm mỡ',
        joinedAt: new Date().toISOString(),
      };
      existingUsers.push(foundUser);
      localStorage.setItem('fitscience_users_db', JSON.stringify(existingUsers));
    }

    setUser(foundUser);
    localStorage.setItem('fitscience_user', JSON.stringify(foundUser));
  };

  const register = (email: string, name: string) => {
    login(email, name); // Same logic for prototype
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fitscience_user');
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('fitscience_user', JSON.stringify(updatedUser));
      
      // Update in DB
      const existingUsersStr = localStorage.getItem('fitscience_users_db');
      if (existingUsersStr) {
        const existingUsers: UserProfile[] = JSON.parse(existingUsersStr);
        const index = existingUsers.findIndex(u => u.id === user.id);
        if (index !== -1) {
          existingUsers[index] = updatedUser;
          localStorage.setItem('fitscience_users_db', JSON.stringify(existingUsers));
        }
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>
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
