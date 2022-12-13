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

// fisrt and last name verification
//place vérification fonctions here

// launch submit
function submitModal(e) {
  e.preventDefault();

  // inputs values
  let first = document.getElementById("first").value;
  console.log(first);
  let last = document.getElementById("last").value;
  console.log(last);
  let email = document.getElementById("email").value;
  console.log(email);
  let birthdate = new Date(document.getElementById("birthdate").value);
  console.log(birthdate);
  let quantity = +document.getElementById("quantity").value;
  console.log(quantity);
  let tournament = document.querySelector("#tournament input:checked").value;
  console.log(tournament);
  let checkbox1 = document.getElementById("checkbox1").checked;
  console.log(checkbox1);
  let checkbox2 = document.getElementById("checkbox2").checked;
  console.log(checkbox2);

  //place verifications here
}

// submit event
btnSubmit.addEventListener("click", submitModal);
