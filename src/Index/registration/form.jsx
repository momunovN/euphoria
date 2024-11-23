import React from "react";
import "./main-regis.scss";
import GoogleImg from '../images/Google.svg'
import TwitterImg from '../images/twitter.svg'


const FormSign = () => {
  return (
    <form action="">
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
            <span>
              <p>Passwort</p>
              <div className="hide">
                <img src="" alt="" />
                Hide
              </div>
            </span>
            <input type="password" name="Password" id="" />
            <span>Forget your password</span>
          </div>
        </div>
        <div className="sign-item4"></div>
      </div>
    </form>
  );
};

export default FormSign