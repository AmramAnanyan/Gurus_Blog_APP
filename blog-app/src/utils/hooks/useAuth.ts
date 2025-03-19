import { useCallback, useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('privateToken')
  );
  const setToken = useCallback((token: string) => {
    setIsAuthenticated('');
    localStorage.setItem('privateToken', token);
  }, []);
  const logout = useCallback(() => {
    setIsAuthenticated('');
    localStorage.clear();
  }, []);

  return { isAuthenticated, setToken, logout };
};
