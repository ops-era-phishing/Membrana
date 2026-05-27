// main.js

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");

    // Alterna entre ☰ e <
    if (navToggle.textContent === "☰") {
      navToggle.textContent = "<";
    } else {
      navToggle.textContent = "☰";
    }
  });
});