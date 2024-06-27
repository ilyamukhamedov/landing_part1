import React, { useState } from "react";
import axios from "axios";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://merchant.roboxchange.com/Index.aspx",
        {
          // Параметры для Robokassa
          MerchantLogin: "your_merchant_login",
          OutSum: "500",
          InvId: "0",
          Description: 'Книга "Пример"',
          Email: email,
          SignatureValue: "your_signature_value",
          Shp_item: "book",
          Culture: "ru",
        }
      );
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <div className="checkout-form">
      <h2>Оформление заказа</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Телефон:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Оплатить</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
