import "./sass/style.scss";
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import axios from "axios";
const year = document.querySelector("#year");

year.innerText = `${new Date().getFullYear()}`;

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const selectInput = document.querySelector("#form select");
const form = document.getElementById("form");

let apiUrl = "https://massar-send-mails-api.onrender.com/api/send-mail";

form.onsubmit = (e) => {
  e.preventDefault();

  axios
    .post(apiUrl, {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      message: messageInput.value,
      country: selectInput.value,
    })
    .then(handleSent);
};

function handleSent() {
  alert("Sent Successfully!");
  setTimeout(() => {
    location.reload();
  }, 500);

  return;
}
