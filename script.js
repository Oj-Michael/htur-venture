// to toggle the menu
const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
let isOpen = false;

btn.addEventListener("click", () => {
  if (isOpen === false) {
    btn.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-expanded", "true");
    isOpen = true;
  } else {
    btn.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-expanded", "false");
    isOpen = false;
  }
});
