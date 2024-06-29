import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children, onSubmit }) => {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`} onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h2 className="modal__title">Оставить заявку</h2>
          <button
            aria-label="Close"
            type="button"
            className="modal__close-button"
            id="add-close-button"
            onClick={onClose}
          />
        </div>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
};

export default Modal;
