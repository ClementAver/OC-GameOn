function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelectorAll(".bground");
const reserveForm = document.getElementById("reserve");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCross = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const invalidMessages = document.querySelectorAll(".invalid-fields");
const validationFeedback = document.getElementById("validation-message");
console.log(modalBtn);
//inputs
const firstNAme = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// launches modals
function launchModal(element, index) {
  element[index].style.display = "block";
}

// closes modals
function closeModal(element, index) {
  element[index].style.display = "none";
}

// launches modal form event
modalBtn[0].addEventListener("click", function () {
  launchModal(modalbg, 0);
});
modalBtn[1].addEventListener("click", function () {
  launchModal(modalbg, 0);
});

// closes modal form event
modalCross[0].addEventListener("click", function () {
  closeModal(modalbg, 0);
});

// closes modal validation event
modalCross[1].addEventListener("click", function () {
  closeModal(modalbg, 1);
});
modalBtn[2].addEventListener("click", function () {
  closeModal(modalbg, 1);
});

// tests the length of a string
function testLength(string) {
  return string.length >= 2;
}

// tests email
function isEmail(email) {
  // regex : "RFC2822 Email Validation" by Tripleaxis on regexr.com
  const regExpMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return regExpMail.test(email.value);
}

// tests date
function isDate(date) {
  if (new Date(date.value) == "Invalid Date") {
    return false;
  } else if (typeof new Date(date.value) === "object") {
    return true;
  }
}

// tests number
function isNumber(number) {
  const regExpNumber = /^[0-9]{1,2}/;
  return regExpNumber.test(number.value);
}

// tests if checked
function testCheck(checkbox) {
  return checkbox.checked;
}

function isNotNull(variable) {
  return variable != null;
}

//validates inputs
function isValid(callback, argument, index) {
  if (callback(argument)) {
    invalidMessages[index].classList.remove("invalid-field");
    return true;
  } else {
    invalidMessages[index].classList.add("invalid-field");
    throw new Error(`The field n°${index} isn't valid`);
  }
}

// checks if all inputs are valid
function allValid() {
  const wishedTournament = document.querySelector("#tournament .checkbox-input:checked");
  try {
    //isValid(testLength, first.value, 0);
    //isValid(testLength, last.value, 1);
    //isValid(isEmail, email, 2);
    //isValid(isDate, birthdate, 3);
    //isValid(isNumber, quantity, 4);
    //isValid(isNotNull, wishedTournament, 5);
    isValid(testCheck, checkbox1, 6);
  } catch (err) {
    var error = err;
    console.error(err);
  }

  if (!error) {
    return true;
  } else {
    return false;
  }
}

// launches submit
function validate(e) {
  e.preventDefault();

  if (allValid()) {
    closeModal(modalbg, 0);
    launchModal(modalbg, 1);
    wishedTournament = document.querySelector("#tournament .checkbox-input:checked");

    fetch("", {
      method: "POST",
      headers: JSON.stringify({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        name: first.value,
        surname: last.value,
        email: email.value,
        birthdate: new Date(birthdate.value),
        quantity: +quantity.value,
        tournament: wishedTournament.value,
        newsletter: checkbox2.checked,
      }),
    });
  } else {
    console.log("le formulaire n'est valide");
  }
}

// submit event
reserveForm.addEventListener("submit", validate);
