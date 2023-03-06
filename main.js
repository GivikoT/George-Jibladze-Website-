let toggleBtn = document.querySelector(".toggle-btn");
let bigWrapper = document.querySelector(".big-wrapper");
let year = document.querySelector("#year");
let hamburger_menu = document.querySelector(".hamburger-menu");
let boxes = document.querySelectorAll(".link-box");

hamburger_menu.addEventListener("click", () => {
  bigWrapper.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  year.textContent = new Date().getFullYear();
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

const preferredMode = localStorage.getItem("mode");
if (preferredMode) {
  bigWrapper.classList.add(preferredMode);
} else {
  bigWrapper.classList.add("light");
}

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.add("active");
  setTimeout(() => {
    toggleBtn.classList.remove("active");
  }, 1000);

  if (bigWrapper.classList.contains("light")) {
    bigWrapper.classList.replace("light", "dark");
    localStorage.setItem("mode", "dark");
  } else {
    bigWrapper.classList.replace("dark", "light");
    localStorage.setItem("mode", "light");
  }
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
    }
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const img = option.querySelector("img");
      selected.src = img.src;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
