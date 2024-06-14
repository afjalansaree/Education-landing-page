"use strict";

// navbar variables

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// header sticky functionality

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 20
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// go top

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 800
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// Inquiry Form

function Message(event) {
 
  let success = document.querySelector("#success");
  let danger = document.querySelector("#danger");
  let pnum = document.querySelector("#pnum");

  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");
  let city = document.querySelector("#city");

  if (
    name.value == "" ||
    email.value == "" ||
    phone.value == "" ||
    city.value == ""
  ) {
    danger.style.display = "block";
    success.style.display = "none";
    return false;
  } else if(phone.value.length>10 || phone.value.length<10){
    pnum.style.display = "block"
    danger.style.display = "none";
    return false;
  }
   else {
    setTimeout(() => {
      name.value = "";
      email.value = "";
      phone.value = "";
      city.value = "";
    }, 2000);
    success.style.display = "block";
    danger.style.display = "none";
    pnum.style.display= "none"
    true;
  }
}
