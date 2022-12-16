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

//inputs
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
let wishedTournament = document.querySelector("#tournament .checkbox-input:checked");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// launches modals
function launchModal(element, index) {
  element[index].style.display = "flex";
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
function testLength(string, element) {
  if (string.length >= 2) {
    element.style.border = "none";
    return true;
  }
  element.style.border = "2px solid #fe142f";
  return false;
}

// tests email
function isEmail(email, element) {
  // regex : "RFC2822 Email Validation" by Tripleaxis on regexr.com
  const regExpMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (regExpMail.test(email.value)) {
    element.style.border = "none";
    return true;
  }
  element.style.border = "2px solid #fe142f";
  return false;
}

// tests date
function isDate(date, element) {
  if (new Date(date.value) == "Invalid Date") {
    element.style.border = "2px solid #fe142f";
    return false;
  } else if (typeof new Date(date.value) === "object") {
    element.style.border = "none";
    return true;
  }
}

// tests number
function isNumberOneNinetyNine(number, element) {
  if (number.value.length > 0 && number.value >= 0 && number.value <= 99) {
    element.style.border = "none";
    return true;
  }
  element.style.border = "2px solid #fe142f";
  return false;
}

// tests if checked
function testCheck(checkbox) {
  return checkbox.checked;
}

function isNotNull(variable) {
  return variable != null;
}

//validates inputs
function isValid(callback, argument, index, element) {
  if (callback(argument, element)) {
    invalidMessages[index].classList.remove("invalid-field");
    return true;
  }
  invalidMessages[index].classList.add("invalid-field");
  throw new Error(`The field n°${index} isn't valid`);
}

// checks if all inputs are valid
function allValid() {
  wishedTournament = document.querySelector("#tournament .checkbox-input:checked");
  try {
    isValid(testLength, firstName.value, 0, firstName);
    isValid(testLength, lastName.value, 1, lastName);
    isValid(isEmail, email, 2, email);
    isValid(isDate, birthdate, 3, birthdate);
    isValid(isNumberOneNinetyNine, quantity, 4, quantity);
    isValid(isNotNull, wishedTournament, 5);
    isValid(testCheck, checkbox1, 6);
  } catch (err) {
    var error = err;
    console.error(err);
  }
  return !error;
}

// launches submit
function validate(e) {
  e.preventDefault();

  if (allValid()) {
    closeModal(modalbg, 0);
    launchModal(modalbg, 1);

    // delete when production
    console.log(
      "this would be sent to the server :" +
        JSON.stringify({
          name: first.value,
          surname: last.value,
          email: email.value,
          birthdate: new Date(birthdate.value),
          quantity: quantity.value,
          tournament: wishedTournament.value,
          newsletter: checkbox2.checked,
        })
    );

    /*
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
*/
  }
}

// submit event
reserveForm.addEventListener("submit", validate);
