(function () {
  const form = document.querySelector("#contact-form");
  const note = document.querySelector("#form-note");

  if (!form || !note) return;

  const fields = {
    name: form.querySelector("#name"),
    email: form.querySelector("#email"),
    message: form.querySelector("#message")
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setNote = function (text, type) {
    note.textContent = text;
    note.classList.remove("error", "success");
    if (type) note.classList.add(type);
  };

  const setFieldValidity = function (field, isValid) {
    if (!field) return;
    field.setAttribute("aria-invalid", String(!isValid));
  };

  const validate = function () {
    const nameValue = fields.name.value.trim();
    const emailValue = fields.email.value.trim();
    const messageValue = fields.message.value.trim();

    const nameValid = nameValue.length >= 2;
    const emailValid = emailPattern.test(emailValue);
    const messageValid = messageValue.length >= 10;

    setFieldValidity(fields.name, nameValid);
    setFieldValidity(fields.email, emailValid);
    setFieldValidity(fields.message, messageValid);

    if (!nameValid) {
      setNote("Please enter your name.", "error");
      fields.name.focus();
      return false;
    }

    if (!emailValid) {
      setNote("Please provide a valid email address.", "error");
      fields.email.focus();
      return false;
    }

    if (!messageValid) {
      setNote("Please add a short message with at least 10 characters.", "error");
      fields.message.focus();
      return false;
    }

    return true;
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    setNote("", "");

    if (!validate()) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    window.setTimeout(function () {
      form.reset();
      setFieldValidity(fields.name, true);
      setFieldValidity(fields.email, true);
      setFieldValidity(fields.message, true);
      setNote("Thanks, your request has been received. We will contact you shortly.", "success");

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Schedule Free Consultation";
      }
    }, 700);
  });
})();
