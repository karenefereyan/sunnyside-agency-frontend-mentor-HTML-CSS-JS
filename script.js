let menuOpen = document.querySelector(".hamburger img");
let navMenu = document.querySelector(".menu-bar");

menuOpen.addEventListener("click", () => {
    navMenu.classList.toggle("open");
})