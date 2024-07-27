import React from "react";
import "./Author.css";
import authors from "../../images/authors.webp";

const Author = () => {
  return (
    <div className="author" id="author">
      <div className="author__container">
        <div className="author__text">
          <h1 className="author__title">ОБ АВТОРАХ</h1>
          <p className="author__description">
            <span className="author__name">Наталья Борисова</span> – магистр
            ландшафтной архитектуры, руково-дитель ландшафтной мастерской
            NB-GARDEN. Успешный практикующий ландшафтный архитектор, автор
            многих ландшафтных проектов, которые получили высокие награды на
            престижных конкурсах и выставках. Член жюри российских и
            международных фестивалей садового искусства, автор статей в
            профильных журналах и на интернет-порталах. <br />
            <br />
            <span className="author__name">Евгений Корнеев</span> – коммерческий
            директор, управляющий партнер ландшафтно-архитектурного объединения
            «NB-GARDEN & Партнеры», садовый фотограф. После окончания факультета
            прикладной математики работал в IT-индустрии. В 2008 году вместе с
            Натальей Борисовой организовал ландшафтную мастерскую NB-GARDEN.
            Считает, что накопленный опыт в производственной деятельности, в
            продвижении продуктов и услуг, в обеспечении взаимодействия с
            клиентами может и должен быть реализован во благо заказчика,
            NB-GARDEN и ландшафтного искусства.
          </p>
        </div>
        <img
          loading="lazy"
          className="author__image"
          src={authors}
          alt="image of authors"
        />
      </div>
    </div>
  );
};

export default Author;
