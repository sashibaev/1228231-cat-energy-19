var blockForm = document.querySelector(".questionnaire__form");
var form = document.querySelector("form");
var nick = blockForm.querySelector("[name=nick]");
var weight = blockForm.querySelector("[name=weight]");
var email = blockForm.querySelector("[name=email]");
var phone = blockForm.querySelector("[name=phone]");
var inputName = blockForm.querySelector(".form__name-input");
var inputWeight = blockForm.querySelector(".form__weight-input");
var inputEmail = blockForm.querySelector(".contact-details__email-input");
var inputPhone = blockForm.querySelector(".contact-details__phone-input");
var iconEmail = blockForm.querySelector(".contact-details__icon-email");
var iconPhone = blockForm.querySelector(".contact-details__icon-phone");
var inputForm = document.querySelectorAll(".form__input");

var isStorageSupport = true;
var storage = "";

try {
  storageNick = localStorage.getItem("nick");
  storageWeight = localStorage.getItem("weight");
  storageEmail = localStorage.getItem("email");
  storagePhone = localStorage.getItem("phone");
} catch (err) {
  isStorageSupport = false;
}

for (var i = 0; i < inputForm.length; i++) {
  inputForm[i].required = false;
}

form.addEventListener("submit", function(evt) {
  if (!nick.value || !weight.value || !email.value || !phone.value) {
    evt.preventDefault();
    console.log("Форма не должна отправляться с пустыми полями");
    console.log(nick.value, weight.value, email.value, phone.value);

    if (!nick.value) {
      inputName.classList.add("form__input--error");
    } else {
      inputName.classList.remove("form__input--error");
    }
    if (!weight.value) {
      inputWeight.classList.add("form__input--error");
    } else {
      inputWeight.classList.remove("form__input--error");
    }
    if (!email.value) {
      inputEmail.classList.add("form__input--error");
      iconEmail.classList.add("contact-details__icon--error");
    } else  {
      inputEmail.classList.remove("form__input--error");
      iconEmail.classList.remove("contact-details__icon--error");
    }
    if (!phone.value) {
      inputPhone.classList.add("form__input--error");
      iconPhone.classList.add("contact-details__icon--error");
    } else {
      inputPhone.classList.remove("form__input--error");
      iconPhone.classList.remove("contact-details__icon--error");
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nick", nick.value);
      localStorage.setItem("weight", weight.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("phone", phone.value);
    }
  }
});
