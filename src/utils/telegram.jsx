const TELEGRAM_BOT_TOKEN = "7218494789:AAGsHl0nOcwcXB57wmbKnV5-jBWYr1W6MHc";
const TELEGRAM_CHAT_ID = "@NB_Garden";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export default async function sendTelegram(e) {
  e.preventDefault();
  const form = e.target;
  const formBtn = document.querySelector(".modal__button");
  const formSendResultTitle = document.querySelector(".confirm__title");
  const formSendResultDescription = document.querySelector(
    ".confirm__description"
  );
  formSendResultTitle.textContent = "";
  formSendResultDescription.textContent = "";

  const { name, phone, email } = Object.fromEntries(
    new FormData(form).entries()
  );

  const text = `Заяка от ${name}\nEmail: ${email}\nТелефон: ${phone} `;

  try {
    formBtn.textContent = "Отправка";
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    });

    if (response.ok) {
      formSendResultTitle.textContent = "Спасибо за заявку!";
      formSendResultDescription.textContent =
        "Наш менеджер свяжеться с вами в течение дня.";
      form.reset();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    formSendResultTitle.textContent = "Что-то пошло не так!";
    formSendResultTitle.style.color - "red";
    formSendResultDescription.textContent =
      "Попробуйте воторить попытку немного позднее";
  } finally {
    formBtn.textContent = "Отправить";
  }
}
