import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ViewState, User } from './types.ts';

interface AppContextType {
  view: ViewState;
  setView: (view: ViewState) => void;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<ViewState>('splash');
  const [user, setUser] = useState<User | null>(null);

  // Check persisted user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('sathipay_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('sathipay_user', JSON.stringify(newUser));
    setView('home');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sathipay_user');
    setView('login');
  };

  return (
    <AppContext.Provider value={{ view, setView, user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
