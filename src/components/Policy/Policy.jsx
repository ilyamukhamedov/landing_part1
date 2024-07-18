import React from "react";
import "./Policy.css";

const Policy = ({ handleOpen }) => {
  return (
    <div className="policy" id="policy">
      <div className="policy__container">
        <h1 className="policy__title">Политика Продаж</h1>
        <p className="policy__description">
          Мы предлагаем возможность оптовой покупки от 6 единиц товара. Для
          оформления заказа, пожалуйста, заполните форму ниже, и мы свяжется с
          вами в кратчайшие сроки для уточнения деталей:
        </p>
        <button className="policy__button" onClick={handleOpen}>
          связаться
        </button>

        <p className="policy__text">
          Если вас инетерсеует розничная покупка, вы можете обратиться к нашим
          партнерам по адресу:
        </p>
        <ol className="policy__list">
          <li>Грифбук</li>
          <li>Лавка Архитектора</li>
          <li>...</li>
          <li>...</li>
        </ol>
      </div>
    </div>
  );
};

export default Policy;
