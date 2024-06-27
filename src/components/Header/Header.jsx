import React from "react";
import "./Header.css";
import telegram from "../../images/telegram.svg";
import instagram from "../../images/instagram.svg";
import dzen from "../../images/dzen.svg";
import Navigation from "../Navigation /Navigation";

const Header = () => {
  return (
    <>
      <div className="header">
        {/* <Navigation /> */}
        <div className="header__container">
          <div>
            <h1 className="header__title">
              Наталья Борисова
              <br />
              <br />
              <br /> NB. Сад
            </h1>
            <button type="button" className="header__button">
              Купить книгу
            </button>
          </div>
          <div className="header__book"> </div>
        </div>
      </div>
    </>
  );
};

export default Header;
