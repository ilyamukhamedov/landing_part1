import React, { useState } from "react";
import "./Header.css";
import Modal from "../Modal/Modal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="header">
        <div className="header__container">
          <div>
            <h1 className="header__title">
              Наталья Борисова
              <br />
              <br />
              <br /> NB. Сад
            </h1>
            <button
              type="button"
              className="header__button"
              onClick={handleOpen}
            >
              Купить книгу
            </button>
            <Modal isOpen={open} onClose={handleClose} />
          </div>
          <div className="header__book"> </div>
        </div>
      </div>
    </>
  );
};

export default Header;
