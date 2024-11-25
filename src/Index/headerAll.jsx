import React, { useState } from "react";
import  {useNavigate}  from "react-router-dom"; // Импортируем хук навигации
import "./homePage/home.jsx";
import "./registration/regis.scss";
import "./index.scss";

import { ReactComponent as Like } from "./images/Like.svg";
import { ReactComponent as Profile } from './images/prifileImg.svg'
import { ReactComponent as Cart } from './images/cartImg.svg'
import Search from "./images/search.svg";
import LogoVec from "./images/logo_vec.svg";

// Предполагаем, что у вас есть какой-то механизм аутентификации
import { useAuth } from "./Auth/AuthContext.jsx"; 

const LikeProfileCart = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout  } = useAuth(); // Хук для проверки авторизации
  const handleLogout = () => {
    logout();
  };

    

  const [color, setColor] = useState("#807D7E");
  const [fill, setFill] = useState("none");

  const changeColor = () => {
    setFill(fill === "none" ? "red" : "none");
    setColor(color === "#807D7E" ? "red" : "#807D7E");
  };

  const handleProfileClick = () => {
    if (!isAuthenticated) {
      // Если не авторизован, перенаправляем на страницу входа
      navigate('/login', { 
        state: { 
          from: '/profile' 
        } 
      });
    } else {
      // Если авторизован, переходим напрямую в профиль
      navigate('/profile');
    }
  };

  return (
    <div className="like">
      <button onClick={changeColor}>
        <Like style={{ color }} fill={fill}  />
      </button>
      <button onClick={handleProfileClick}>
        <Profile/>
      </button>
      <button onClick={handleLogout}>
        <Cart/>
      </button>
    </div>
  );
};

const InputSearch = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClick = () => {
    document.querySelector(".search-all").focus();
  };

  return (
    <div className="search-input-all" onClick={handleClick}>
      <input
        type="text"
        name="search"
        placeholder=""
        id=""
        className="search-all"
        value={searchText}
        onChange={handleInputChange}
      />

      <img src={Search} alt="" className="search-icon-all" />
      <span className="search-text-all">Search</span>
    </div>
  );
};

const HeaderAll = () => {
  return (
    <header className="header-all">
      <div className="logo-header">
        <p>Euphoria</p>
        <img src={LogoVec} alt="" className="logo_vec-header" />
      </div>
      <div className="header-item">
        <div className="header-details">
          <a href="" className="link1">
            Shop
          </a>
          <a href="" className="link2">
            Men
          </a>
          <a href="" className="link3">
            Women
          </a>
          <a href="" className="link4">
            Combos
          </a>
          <a href="" className="link5">
            Joggers
          </a>
        </div>
        <>
          <InputSearch />
        </>
        <>
          <LikeProfileCart />
        </>
      </div>
    </header>
  );
};
export default HeaderAll;
