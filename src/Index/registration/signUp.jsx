import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import "./main-regis.scss";
import GoogleImg from "../images/Google.svg";
import TwitterImg from "../images/twitter.svg";

const FormSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password) {
      setError("Пожалуйста, заполните все поля");
      return false;
    }
    if (password.length < 6) {
      setError("Пароль должен содержать не менее 6 символов");
      return false;
    }
    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        login(userData);
        navigate("/home");
      } else {
        const data = await response.json();
        setError(data.error || "Ошибка регистрации");
      }
    } catch (err) {
      setError("Ошибка регистрации. Попробуйте позже.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
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
      <form onSubmit={handleSignUp} className="sign-input">
        <div className="name">
          <span>Full Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="Name"
            className="name-inp"
            required
          />
        </div>
        <div className="email-username">
          <span>Email address</span>
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
          <span className="password_span">Password</span>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="Password"
            className="password-inp"
            required
          />
          <button 
            type="button" 
            onClick={togglePasswordVisibility} 
            className="toggle-password"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit" className="sign-up-button">Sign Up</button>
      </form>
      <span className="sign-in-descr">
        Already have an account?
        <button onClick={() => navigate("/login")} className="sign-in-link">
          Sign in
        </button>
      </span>
    </div>
  );
};

export default FormSignUp;