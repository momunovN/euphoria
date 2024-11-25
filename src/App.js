import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Index/homePage/home";
import Profile from "./Index/profile"; // Путь к вашему компоненту профиля
import { AuthProvider } from "./Index/Auth/AuthContext";
import PrivateRoute from "./Index/Auth/PrivateRoute";
import Registration from './Index/registration/regis';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Registration />} />
        {/* Защищенный маршрут для профиля */}
        {/* <PrivateRoute path="/profile" element={<Profile />} /> */}
        {/* Добавьте другие защищенные маршруты по мере необходимости */}
      </Routes>
    </AuthProvider>
  );
};

export default App;