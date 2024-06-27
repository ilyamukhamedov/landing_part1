import React from "react";
import "./BookDetails.css";

const BookDetails = () => {
  return (
    <div className="book-details">
      <h1 className="book__header">NB Сад</h1>
      <p>Описание книги. Автор: И. Иванов.</p>
      <p>Цена: 500 руб.</p>
      <Link to="/checkout">
        <button>Купить</button>
      </Link>
    </div>
  );
};

export default BookDetails;
