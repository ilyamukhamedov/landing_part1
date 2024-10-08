import React from "react";
import "./Policy.css";
import book from "../../images/policyBook.webp";

const Policy = ({ openBook }) => {
  return (
    <div className="policy" id="policy">
      <div className="policy__container">
        <h1 className="policy__title">Политика Продаж</h1>
        <img className="policy__image" src={book} alt="image of the book" />
        <p className="policy__description">
          Дорогие читатели! <br />
          <br />
          К сожалению, первая книга полностью распродана.
          <br /> Однако не стоит расстраиваться! Уже в августе 2024 года вас
          ждет долгожданная вторая часть.
          <br /> Переходите на сайт и будьте первыми, кто узнает о поступлении
          новых книг!
        </p>
        <button className="policy__button" onClick={openBook}>
          новая книга
        </button>
      </div>
    </div>
  );
};

export default Policy;
