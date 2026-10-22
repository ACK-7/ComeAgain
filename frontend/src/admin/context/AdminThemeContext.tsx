import React, { createContext, useContext, useEffect } from 'react';

type AdminTheme = 'dark';

interface AdminThemeContextType {
  theme: AdminTheme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: AdminTheme) => void;
}

const AdminThemeContext = createContext<AdminThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'comeagain_admin_theme';

export const AdminThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    } catch (_) {}
  }, []);

  const toggleTheme = () => {};
  const setTheme = () => {};

  return (
    <AdminThemeContext.Provider
      value={{
        theme: 'dark',
        isDark: true,
        toggleTheme,
        setTheme,
      }}
    >
      <div className="admin-theme-dark">
        {children}
      </div>
    </AdminThemeContext.Provider>
  );
};

export const useAdminTheme = (): AdminThemeContextType => {
  const context = useContext(AdminThemeContext);
  if (!context) {
    throw new Error('useAdminTheme must be used within an AdminThemeProvider');
  }
  return context;
};
