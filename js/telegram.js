"use strict";

const ajaxSend = async (formData) => {
  const fetchResp = await fetch("telegram.php", {
    method: "POST",
    body: formData,
  });

  if (!fetchResp.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
  }

  return await fetchResp.text(); // если все хорошо, возвращаем ответ сервера
};


const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log(formData);

    ajaxSend(formData)
      .then((response) => {
        this.innerHTML = "Заявка получена!";
        form.reset();
      })
      .catch((err) => console.error(err));
  });
});
