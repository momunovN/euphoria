import React from "react";
import FormSign from "./form";
import Header from "./header";
import "./main-regis.scss";

import MainImg from "../images/main-img.svg";
const Main = () => {
  return (
    <>
    <Header/>
      <main className="main-regis">
        <img src={MainImg} alt="" className="main-img" />
        <div className="sign-in-page">
          <p className="sign-title">Sign In Page</p>

          {/* Вход */}

          <FormSign />
        </div>
      </main>
    </>
  );
};

export default Main;
