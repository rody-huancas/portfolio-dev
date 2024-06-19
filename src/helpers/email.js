import { EMAIL_KEY, SERVICE_ID, TEMPLATE_ID } from "@/constants";

document.addEventListener("DOMContentLoaded", function () {
  const emailjs = window.emailjs;
  emailjs.init(EMAIL_KEY);

  const form = document.getElementById("form_email");
  const btn = document.getElementById("button_send");

  if (form && btn) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (validateForm()) {
        btn.textContent = "Envíando...";

        const serviceID = SERVICE_ID;
        const templateID = TEMPLATE_ID;

        emailjs.sendForm(serviceID, templateID, this).then(
          () => {
            btn.textContent = "Envíar mensaje";
            alert("Sent!");
            form.reset();
            clearErrors();
          },
          (err) => {
            btn.textContent = "Envíar mensaje";
            alert(JSON.stringify(err));
          }
        );
      }
    });

    const requiredFields = form.querySelectorAll(".input-field");

    requiredFields.forEach((field) => {
      field.addEventListener("input", function () {
        validateField(this);
      });
    });
  }

  function validateField(field) {
    const errorMessage = field.nextElementSibling;
    if (!field.value.trim()) {
      field.classList.add("error");
      errorMessage.textContent = "Este campo es obligatorio.";
      errorMessage.classList.add("visible");
    } else if (field.type === "email" && !isValidEmail(field.value.trim())) {
      field.classList.add("error");
      errorMessage.textContent = "Por favor ingrese un correo electrónico válido.";
      errorMessage.classList.add("visible");
    } else {
      field.classList.remove("error");
      errorMessage.textContent = "";
      errorMessage.classList.remove("visible");
    }
  }

  function validateForm() {
    const fromName = document.getElementById("from_name");
    const fromEmail = document.getElementById("from_email");
    const message = document.getElementById("message");

    let isValid = true;

    validateField(fromName);
    validateField(fromEmail);
    validateField(message);

    if (fromName.classList.contains("error") || fromEmail.classList.contains("error") || message.classList.contains("error")) {
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearErrors() {
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((message) => {
      message.textContent = "";
      message.classList.remove("visible");
    });
    const inputFields = form.querySelectorAll(".input-field");
    inputFields.forEach((field) => {
      field.classList.remove("error");
    });
  }
});
