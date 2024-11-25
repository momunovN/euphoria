import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext"; // Предполагается, что у вас есть контекст аутентификации
import "./main-regis.scss";
import GoogleImg from "../images/Google.svg";
import TwitterImg from "../images/twitter.svg";
import HideView from "../images/HideView.svg";
import ShowView from "../images/ShowView.svg";
import RightSignIn from "../images/rightSignIn.svg";

const FormSign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth(); // Предполагается, что метод login сохранит токен в контексте
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError("Пожалуйста, заполните все поля");
      return false;
    }
    if (password.length < 6) {
      setError("Пароль должен содержать не менее 6 символов");
      return false;
    }
    return true;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      // Запрос к вашему API для аутентификации
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        login(userData); // Сохранение токена и информации о пользователе в контексте
        navigate("/home"); // Перенаправление после успешного входа
      } else {
        const data = await response.json();
        setError(data.error || "Неверный email или пароль");
      }
    } catch (err) {
      setError("Ошибка входа. Попробуйте позже.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="sign-item">
        {error && <div className="error-message">{error}</div>}
        <div className="google-twiter">
          <button className="sing-google">
            <img src={GoogleImg} alt="" />
            Continue With Google
          </button>
          <button className="sign-twitter">
            <img src={TwitterImg} alt="" />
            Continue With Twitter
          </button>
        </div>
        <div className="sign-or">
          <hr /> OR <hr />
        </div>
        <form onSubmit={handleSignIn} className="sign-input">
          <div className="email-username">
            <span>User name or email address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="Email"
              className="email-inp"
              required
            />
          </div>
          <div className="password">
            <span className="password_span">
              <p>Password</p>
              <div className="hide">
                <button
                  type="button"
                  className="btn_show-hide"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <span className="hide-img">
                      <img src={HideView} alt="Hide" />
                      Hide
                    </span>
                  ) : (
                    <span className="show-img">
                      <img src={ShowView} alt="Show" />
                      Show
                    </span>
                  )}
                </button>
              </div>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="Password"
              className="pass-inp"
              required
              minLength="6"
            />
            <a href="/reset-password" className="pass-res-link">
              Forget your password
            </a>
          </div>
          <div className="sign-bnt">
            <button type="submit" className="sign-in-btn">
              Sign In <img src={RightSignIn} className="sign-in-img" alt="" />
            </button>
            <span className="sign-in-descr">
              Don't have an account?
              <a href="/signup" className="sign-up-link">
                Sign up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSign;
