//Grabbing all my needed selectors
const openBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close");

//open the mobile menu when click on menu
openBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-active");
});
//close mobile menu when click on x
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-active");
});

//fade in on scroll
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
