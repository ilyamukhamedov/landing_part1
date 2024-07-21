import React from "react";
import "./Footer.css";
import whatsapp from "../../images/whatsappcolor.svg";
import mail from "../../images/mail.svg";

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
            <div className="footer__block">
              <img className="footer__img" src={whatsapp} alt="whatsApp icon" />
              <a
                className="footer__info"
                href="https://wa.me/+79169926957"
                target="_blank"
              >
                +7 (916) 992-69-57
              </a>
            </div>
            <div className="footer__block">
              <img className="footer__img1" src={mail} alt="mail icon" />
              <a
                className="footer__info"
                href="mailto:book@nb-garden.ru"
                target="_blank"
              >
                book@nb-garden.ru
              </a>
            </div>

            {/* <p className="footer__info">TELEGRAM</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
