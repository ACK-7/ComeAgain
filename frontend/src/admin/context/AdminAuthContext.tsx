import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AdminUser } from '../types/adminTypes';
import { apiRequest, TOKEN_KEY } from '../../services/apiClient';
interface AdminAuthContextType {
  user: AdminUser | null; isAuthenticated: boolean; isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}
const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);
export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const expire = () => setUser(null);
    window.addEventListener('admin-session-expired', expire);
    if (sessionStorage.getItem(TOKEN_KEY)) {
      apiRequest<AdminUser>('/admin/me', {}, true).then(setUser).catch(() => setUser(null)).finally(() => setIsLoading(false));
    } else setIsLoading(false);
    return () => window.removeEventListener('admin-session-expired', expire);
  }, []);
  const login = async (email: string, password: string) => {
    try {
      const data = await apiRequest<{ token: string; user: AdminUser }>('/admin/login', { method: 'POST', body: JSON.stringify({ email, password }) });
      sessionStorage.setItem(TOKEN_KEY, data.token); setUser(data.user);
      return { success: true };
    } catch (error) { return { success: false, error: error instanceof Error ? error.message : 'Sign in failed.' }; }
  };
  const logout = async () => {
    try { await apiRequest('/admin/logout', { method: 'POST' }, true); }
    finally { sessionStorage.removeItem(TOKEN_KEY); setUser(null); }
  };
  return <AdminAuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>{children}</AdminAuthContext.Provider>;
};
// Context and its consumer hook intentionally share the provider module.
// eslint-disable-next-line react-refresh/only-export-components
export const useAdminAuth = () => {
  const value = useContext(AdminAuthContext);
  if (!value) throw new Error('AdminAuthProvider is required.');
  return value;
};
