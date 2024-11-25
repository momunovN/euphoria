import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const FormSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Простая валидация
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        login(userData); // Автоматический вход после регистрации
        navigate("/profile"); // Перенаправление на профиль
      } else {
        const data = await response.json();
        setError(data.error || "Ошибка регистрации");
      }
    } catch (err) {
      setError("Ошибка сети. Попробуйте позже.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSignUp} className="form">
        <h2>Регистрация</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Введите ваше имя"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Введите email"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Введите пароль"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Подтвердите пароль</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Повторите пароль"
          />
        </div>
        
        <button type="submit" className="btn-submit">
          Зарегистрироваться
        </button>
        
        <div className="form-footer">
          <p>
            Уже есть аккаунт? 
            <a href="/login" className="link">Войти</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;