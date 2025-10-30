const menuOpenButton = document.querySelector(".menu-open-btn");
const menuCloseButton = document.querySelector(".menu-close-btn");
const navList = document.querySelector(".nav-list");

function toggleMobileMenu() {
  menuOpenButton.classList.toggle("hidden");

  menuCloseButton.classList.toggle("hidden");

  navList.classList.toggle("nav-list-is-open");
}

menuOpenButton.addEventListener("click", toggleMobileMenu);
menuCloseButton.addEventListener("click", toggleMobileMenu);

const submitButton = document.querySelector(".form-submit");
const nameInput = document.querySelector("#user-name");
const emailInput = document.querySelector("#user-email");
const messageText = document.querySelector("form textarea");

function handleFormSubmit(event) {
  const name = nameInput.value.trim();

  const email = emailInput.value.trim();

  const message = messageText.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Name, email, or message cannot be empty.");

    event.preventDefault();
  }
}

submitButton.addEventListener("click", handleFormSubmit);
