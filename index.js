//BUTTON ANIMATION

const navToggle = document.querySelector("#nav-toggle");
const activeNav = () => {
  navToggle.classList.toggle("active");
};
navToggle.addEventListener("click", activeNav);

//NAV
const navbar = document.querySelector("#navbar");

function openNav() {
  navbar.classList.add("active");
  navToggle.setAttribute("aria-expanded", "true");
}

function closenNav() {
  navbar.classList.remove("active");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    closenNav();
  } else {
    openNav();
  }
});
