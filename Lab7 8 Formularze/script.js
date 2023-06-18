function validateForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var gender = document.getElementById("gender");
    var phone = document.getElementById("phone");
    var birthdate = document.getElementById("birthdate");
    var country = document.getElementById("country");

    if (!checkRequired(firstName)) return;
    if (!checkRequired(lastName)) return;
    if (!checkRequired(email)) return;
    if (!checkEmail(email)) return;
    if (!checkRequired(password)) return;
    if (!checkPasswordLength(password)) return;
    if (!checkPasswordsMatch(password, confirmPassword)) return;
    if (!checkRequired(confirmPassword)) return;
    if (!checkRequired(gender)) return;
    if (!checkRequired(phone)) return;
    if (!checkRequired(birthdate)) return;
    if (!checkAdult(birthdate)) return;
    if (!checkRequired(country)) return;

    alert("Formularz został poprawnie wypełniony!");
  }

  function checkRequired(input) {
    if (input.value.trim() === "") {
      input.setCustomValidity("To pole jest wymagane");
      return false;
    } else {
      input.setCustomValidity("");
      return true;
    }
  }

  function checkEmail(email) {
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(emailPattern)) {
      email.setCustomValidity("Niepoprawny adres email");
      return false;
    } else {
      email.setCustomValidity("");
      return true;
    }
  }

  function checkPasswordLength(password) {
    if (password.value.length < 8) {
      password.setCustomValidity("Hasło musi mieć co najmniej 8 znaków");
      return false;
    } else {
      password.setCustomValidity("");
      return true;
    }
  }

  function checkPasswordsMatch(password, confirmPassword) {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Hasła nie pasują do siebie");
      return false;
    } else {
      confirmPassword.setCustomValidity("");
      return true;
    }
  }

  function checkAdult(birthdate) {
    var today = new Date();
    var inputDate = new Date(birthdate.value);
    var age = today.getFullYear() - inputDate.getFullYear();
    var monthDiff = today.getMonth() - inputDate.getMonth();
    var dayDiff = today.getDate() - inputDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < inputDate.getDate())) {
      age--;
    }
    if (age < 18) {
      birthdate.setCustomValidity("Musisz być pełnoletni/a");
      return false;
    } else {
      birthdate.setCustomValidity("");
      return true;
    }
  }
  
  function toggleProvinceField() {
    var countrySelect = document.getElementById("country");
    var provinceField = document.getElementById("province");
    provinceField.disabled = (countrySelect.value !== "poland");
  }

  function toggleCorrespondenceAddressField() {
    var sameAddressCheckbox = document.getElementById("sameAddress");
    var correspondenceAddressField = document.getElementById("correspondenceAddressField");
    var correspondenceAddressInput = document.getElementById("correspondenceAddress");

    if (sameAddressCheckbox.checked) {
      correspondenceAddressField.style.display = "none";
      correspondenceAddressInput.disabled = true;
    } else {
      correspondenceAddressField.style.display = "block";
      correspondenceAddressInput.disabled = false;
    }
  }

  // Ograniczanie pola telefonu do cyfr
  var phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function () {
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
  });
