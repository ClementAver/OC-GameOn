function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const btnSubmit = document.querySelector(".modal-body .btn-submit");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCross = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launches modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launches modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launches modal form
function closeModal() {
  modalbg.style.display = "none";
}

// closes modal event
modalCross.addEventListener("click", closeModal);

// test the length of a string
function testLength(string) {
  if (string.length >= 2) {
    console.log(`${string} est valide`);
    return true;
  } else {
    console.log(`${string} est invalide`);
    return false;
  }
}

// test email
function testEmail(email) {
  // regex : "RFC2822 Email Validation" by Tripleaxis on regexr.com
  const regExpMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (regExpMail.test(email)) {
    console.log(`${email} est une adresse valide`);
    return true;
  } else {
    console.log(`${email} n'est pas une adresse valide`);
    return false;
  }
}

//test number
function testNumber(number) {
  const regExpNumber = /[0-9]/;
  if (regExpNumber.test(number)) {
    console.log(`${number} est un nombre valide`);
    return true;
  } else {
    console.log(`${number} n'est pas un nombre valide`);
    return false;
  }
}

//test exist
function testExist(being) {
  if (being) {
    return true;
  } else {
    console.log(`${being} does not exist`);
    return false;
  }
}

// launch submit
function submitModal(e) {
  e.preventDefault();

  // inputs values
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = new Date(document.getElementById("birthdate").value);
  let quantity = document.getElementById("quantity").value;
  let tournament = document.querySelector("#tournament input:checked");
  let checkbox1 = document.getElementById("checkbox1").checked;
  let checkbox2 = document.getElementById("checkbox2").checked;

  // verifications
  if (testLength(first) && testLength(last) && testEmail(email) && testNumber(quantity) && testExist(tournament)) {
    console.log(first);
    console.log(last);
    console.log(email);
    console.log(birthdate);
    console.log(quantity);
    console.log(tournament);
    console.log(checkbox1);
    console.log(checkbox2);
  }
}

// submit event
btnSubmit.addEventListener("click", submitModal);
