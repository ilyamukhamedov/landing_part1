import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <h1 className="footer__title">контакты</h1>
        <div className="footer__wrapper">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <h2 className="footer__name">NB-Garden</h2>
            <p className="footer__text">
              Ландшафтная мастерская <br /> Натальи Борисовой
            </p>
          </div>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h2 className="footer__name">контакты</h2>
            <ol className="footer__list">
              <li className="footer__item">Магазины партнеры </li>
              <li className="footer__item">Магазины партнеры </li>
              <li className="footer__item">Магазины партнеры </li>
            </ol>
          </div> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <p className="footer__info">8-915-096-39-45</p>
            <p className="footer__info">book@nb-garden.ru</p>
            <p className="footer__info">TELEGRAM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
