"use strict";

const modal = document.querySelector(".modal-container");
const hotelSearchBtn = document.querySelector(".hotel-search-button");
const modalCloseBtn = document.querySelector(".modal-close-button");

hotelSearchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("is-hidden");
});

modalCloseBtn.addEventListener("click", function () {
  modal.classList.add("is-hidden");
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.add("is-hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("is-hidden")) {
    modal.classList.add("is-hidden");
  }
});
