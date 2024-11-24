import React, { useState } from "react";
import "./main-regis.scss";
import GoogleImg from "../images/Google.svg";
import TwitterImg from "../images/twitter.svg";
import HideView from "../images/HideView.svg"
import ShowView from "../images/ShowView.svg"
const FormSign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <input type="text" name="Email or username" id="" />
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
            <span>Forget your password</span>
          </div>
        </div>
        <div className="sign-item4"></div>
      </div>
    </div>
  );
};

export default FormSign;
