import React, { useEffect, useState } from "react";
import "./ModalForm.css";
import Modal from "../Modal/Modal";

const ModalForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameError, setNameError] = useState("Имя не можеть быть пустым");
  const [phoneError, setPhoneError] = useState("Телефон не можеть быть пустым");
  const [emailError, setEmailError] = useState("Email не можеть быть пустым");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || phoneError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, phoneError, emailError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
    console.log(e.target.value.length);
    if (e.target.value.length < 17) {
      setPhoneError("Неверный номер телефона");
    } else {
      setPhoneError("");
    }
  };

  const openConfirmModal = (e) => {
    e.preventDefault();
    setName("");
    setPhone("");
    setEmail("");
    setFormValid(false);

    console.log("submit");
  };

  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, "");
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^a-zA-Zа-яА-Я\s]/g, "");
    setName(filteredValue);
    if (!e.target.value) {
      setNameError("Имя не можеть быть пустым");
    } else {
      setNameError("");
    }
  };

  const onPhoneInput = (e) => {
    let input = e.target;

    let inputNumbersValue = getInputNumbersValue(input);

    let formattedInputValue = "";

    let selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return (input.value = "+");
    }

    if (input.value.length !== selectionStart) {
      console.log("edit in middle");
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].includes(inputNumbersValue[0])) {
      if (inputNumbersValue[0] == "9")
        inputNumbersValue = "7" + inputNumbersValue;
      let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputNumbersValue;
    }
    input.value = formattedInputValue;
  };

  const onPhoneKeyDown = (e) => {
    let input = e.target;
    if (e.keyCode === 8 && getInputNumbersValue(input).length == 1) {
      input.value = "";
    }
  };

  const onPhonePaste = (e) => {
    let input = e.target;
    let pasted = e.clipboardData;
    let inputNumbersValue = getInputNumbersValue(input);

    if (pasted) {
      let pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} onSubmit={openConfirmModal}>
      <input
        name="name"
        type="text"
        className="modal__input"
        placeholder="Имя"
        minLength="1"
        maxLength="30"
        value={name}
        onChange={handleNameChange}
        required
        onBlur={blurHandler}
      />
      <span
        className={`modal__error ${
          nameDirty && nameError ? "modal__error_visible" : ""
        }`}
      >
        {nameError}
      </span>
      <input
        name="phone"
        type="tel"
        className="modal__input"
        placeholder="Телефон"
        maxLength="18"
        onInput={onPhoneInput}
        onKeyDown={onPhoneKeyDown}
        onPaste={onPhonePaste}
        value={phone}
        required
        onBlur={blurHandler}
        onChange={phoneHandler}
      />
      <span
        className={`modal__error ${
          phoneDirty && phoneError ? "modal__error_visible" : ""
        }`}
      >
        {phoneError}
      </span>{" "}
      <input
        name="email"
        type="email"
        className="modal__input"
        placeholder="Email"
        maxLength="40"
        required
        value={email}
        onChange={emailHandler}
        onBlur={blurHandler}
      />
      <span
        className={`modal__error ${
          emailDirty && emailError ? "modal__error_visible" : ""
        }`}
      >
        {emailError}
      </span>
      <button
        aria-label="Save"
        type="submit"
        className={`modal__button ${formValid ? "" : "modal__button_disabled"}`}
        onClick={onClose}
        disabled={!formValid}
      >
        Отправить
      </button>
    </Modal>
  );
};

export default ModalForm;
