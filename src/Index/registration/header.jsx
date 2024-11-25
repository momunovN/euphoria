import React, { useState } from "react";
import "./regis.scss";
import "../index.scss";
import LogoVec from "../images/logo_vec.svg";
import Search from "../images/search.svg";
const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClick = () => {
    document.querySelector(".search-input input").focus();
  };

  const [language, setLanguage] = useState("ENG");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <div className="head-item">
            <div className="logo-search">
              <div className="logo">
                <p>Euphoria</p>
                <img src={LogoVec} alt="" className="logo_vec" />
              </div>
              <div className="search-input" onClick={handleClick}>
                <input
                  type="text"
                  name="search"
                  placeholder=""
                  id="search-input"
                  className="search-h"
                  value={searchText}
                  onChange={handleInputChange}
                />

                <img src={Search} alt="" className="search-icon" />
                <span className="search-text">Search</span>
                {/* <div className="icon-searchs"></div> */}
              </div>
            </div>
            <div className="drop-btn">
              <div className="eng-ru">
                <select
                  id="language-select"
                  value={language}
                  onChange={handleChange}
                >
                  <option value="ENG">English (united States)</option>
                  <option value="RU">Russian (Russia)</option>
                </select>
              </div>

              <div className="header-bnt">
                <button className="btn-login">Login</button>
                <button className="btn-signup">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
