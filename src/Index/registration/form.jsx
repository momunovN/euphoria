import React, { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import "./main-regis.scss";
import GoogleImg from "../images/Google.svg";
import TwitterImg from "../images/twitter.svg";
import HideView from "../images/HideView.svg";
import ShowView from "../images/ShowView.svg";
import RightSignIn from "../images/rightSignIn.svg";
const FormSign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };




  const { login } = useAuth(); // Получаем функцию для входа

  const handleSignIn = () => {
    // Здесь вы можете добавить свою логику для проверки учетных данных
    // Если учетные данные верны, вызываем функцию входа
    login();
  };

  return (
    <div>
      <div className="sign-item">
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
        <div className="sign-input">
          <div className="email-username">
            <span>User name or email address</span>
            <input
              type="text"
              name="Email or username"
              id=""
              className="email-inp"
            />
          </div>
          <div className="password">
            <span className="password_span">
              <p>Passwort</p>
              <div className="hide">
                <button
                  className="btn_show-hide"
                  onClick={togglePasswordVisibility}
                  style={{
                    background: "none",
                    // border: "none",
                    cursor: "pointer",
                  }}
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
              id=""
              className="pass-inp"
            />
            <a href="#" className="pass-res-link">
              Forget your password
            </a>
          </div>
        </div>
        <div className="sign-bnt">
          <button type="button" className="sign-in-btn" onClick={handleSignIn}>
            Sign In <img src={RightSignIn} className="sign-in-img" alt="" />
          </button>
          <span className="sign-in-descr">
            Don’t have an account?
            <a href="" className="sign-up-link">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormSign;
