import React, { createContext, useContext, useState } from "react";
import Registration from "../registration/regis";
// Создаем контекст аутентификации
const AuthContext = createContext();

// Провайдер аутентификации
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}

    </AuthContext.Provider>
  );
};

// Хук для использования контекста аутентификации
export const useAuth = () => {
  return useContext(AuthContext);
};