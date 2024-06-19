import { EMAIL_KEY, SERVICE_ID, TEMPLATE_ID } from "@/constants";

document.addEventListener("DOMContentLoaded", function () {
  const emailjs = window.emailjs;
  emailjs.init(EMAIL_KEY);

  const form = document.getElementById("form_email");
  const btn = document.getElementById("button_send");

  if (form && btn) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const serviceID = SERVICE_ID;
      const templateID = TEMPLATE_ID;

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          btn.value = "Send Email";
          alert("Sent!");
        },
        (err) => {
          btn.value = "Send Email";
          alert(JSON.stringify(err));
        }
      );
    });
  }
});
