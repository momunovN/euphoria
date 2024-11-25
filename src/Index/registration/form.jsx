import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import "./main-regis.scss";
import GoogleImg from "../images/Google.svg";
import TwitterImg from "../images/twitter.svg";
import HideView from "../images/HideView.svg";
import ShowView from "../images/ShowView.svg";
// import RightSignIn from "../images/rightSignIn.svg";

const FormSign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login = () => {} } = useAuth() || {}; 
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login",  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        login(userData); // Используйте login
        navigate("/home");
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
              Password
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="Password"
              className="password-inp"
              required
            />
            <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
              <img src={showPassword ? HideView : ShowView} alt="Toggle Password Visibility" />
            </button>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <span className="sign-in-descr">
          Don't have an account?
          <button onClick={() => navigate("/signup")} className="sign-up-link">
            Sign up
          </button>
        </span>
      </div>
    </div>
  );
};

export default FormSign;