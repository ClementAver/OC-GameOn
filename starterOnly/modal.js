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

// test date
function testDate(date) {
  if (date == "Invalid Date") {
    console.log(`${date} n'est pas une date valide`);
    return false;
  } else if (typeof date === "object") {
    console.log(`${date} est une date valide`);
    return true;
  }
}

//test exist
function testTournament(tournament) {
  if (tournament) {
    console.log(`${tournament.value} est sélectionné`);
    return true;
  } else {
    console.log(`aucun tournoi sélectionné`);
    return false;
  }
}

function testCheck(checkbox) {
  if (checkbox.checked) {
    console.log(`${checkbox.id} est cochée`);
    return true;
  } else {
    console.log(`${checkbox.id} n'est pas cochée`);
    return false;
  }
}
// launch submit
function submitModal(e) {
  e.preventDefault();

  // inputs
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = new Date(document.getElementById("birthdate").value);
  let quantity = document.getElementById("quantity").value;
  let tournament = document.querySelector("#tournament input:checked");
  let checkbox1 = document.getElementById("checkbox1");
  let checkbox2 = document.getElementById("checkbox2");

  // verifications
  if (testLength(first) && testLength(last) && testEmail(email) && testDate(birthdate) && testNumber(quantity) && testTournament(tournament) && testCheck(checkbox1)) {
    testCheck(checkbox2);
  }
}

// submit event
btnSubmit.addEventListener("click", submitModal);
