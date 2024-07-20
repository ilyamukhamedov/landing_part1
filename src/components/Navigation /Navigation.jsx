import React from "react";
import "./Navigation.css";
import telegram from "../../images/telegram.svg";
import instagram from "../../images/instagram.svg";
import dzen from "../../images/dzen.svg";

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__links">
          <li>
            <a href="#author" className="nav__link">
              ОБ АВТОРАХ
            </a>
          </li>
          <li>
            <a href="#about" className="nav__link">
              О КНИГЕ
            </a>
          </li>
          <li>
            <a href="#fragments" className="nav__link">
              ФРАГМЕНТЫ И ОТЗЫВЫ
            </a>
          </li>
          <li>
            <a href="#policy" className="nav__link">
              ПОЛИТИКА ПРОДАЖ
            </a>
          </li>
        </ul>
        <div className="social">
          {/* <a href="/" target="_blank">
            <img className="social__icon" src={telegram} alt="Telegram icon" />
          </a> */}
          <a href="https://dzen.ru/nbgarden" target="_blank">
            <img className="social__icon" src={dzen} alt="Yandex Dzen icon" />
          </a>
          <a href="https://www.instagram.com/nbgarden/" target="_blank">
            <img
              className="social__icon"
              src={instagram}
              alt="Instagram icon"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
