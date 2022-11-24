const openBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-active");
});
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-active");
});
