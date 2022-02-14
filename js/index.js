// console.log("JS CONNECTED!");
const dropdown = document.querySelector("#mobile-dropdown");
const dropdownCtrl = document.querySelector(
  "[aria-controls='mobile-dropdown']"
);

dropdownCtrl.addEventListener("click", function () {
  if (dropdownCtrl.getAttribute("aria-expanded") === "false") {
    dropdownCtrl.setAttribute("aria-expanded", "true");
    dropdown.classList.replace("translate-x-full", "translate-x-0");
  } else {
    dropdownCtrl.setAttribute("aria-expanded", "false");
    dropdown.classList.replace("translate-x-0", "translate-x-full");
  }
});
