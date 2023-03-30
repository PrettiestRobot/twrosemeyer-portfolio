const mNavBtn = document.querySelector(".m-nav");
const mNav = document.querySelector(".p-nav-links");

console.log("attached");

mNavBtn.addEventListener('click', function() {
    mNav.classList.toggle("m-nav-active")
    mNavBtn.classList.toggle("nav-btn-active")
});