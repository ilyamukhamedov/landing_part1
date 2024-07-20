import React from "react";
import "./Policy.css";

const Policy = () => {
  return (
    <div className="policy" id="policy">
      <div className="policy__container">
        <h1 className="policy__title">Политика Продаж</h1>
        <p className="policy__description">
          Дорогие читатели! <br />
          <br />
          Мы сожалеем, что первая партия наших книг распродана.
          <br /> Однако не стоит расстраиваться! Уже в августе 2025 года вас
          ждет долгожданная вторая часть. Переходите на сайт и будьте первыми,
          кто узнает о поступлении новых книг!
        </p>
        <button className="policy__button" onClick={""}>
          новая книга
        </button>

        {/* <p className="policy__text">
          Если вас инетерсеует розничная покупка, вы можете обратиться к нашим
          партнерам по адресу:
        </p>
        <ol className="policy__list">
          <li>Грифбук</li>
          <li>Лавка Архитектора</li>
          <li>...</li>
          <li>...</li>
        </ol> */}
      </div>
    </div>
  );
};

export default Policy;
