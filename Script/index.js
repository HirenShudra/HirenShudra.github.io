window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function(){
    const header = document.querySelector(".hamburger");
    header.classList.toggle("sticky", window.scrollY > 0);
})
window.addEventListener("scroll", function(){
    const header = document.querySelector(".vertical_navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
})

let hamburger = document.querySelector(".ham");
hamburger.addEventListener("click", function(){
    let navbar = document.querySelector(".vertical_navbar");
    navbar.style.display = "block";
})

let cross = document.querySelector(".cross");
cross.addEventListener("click", function(){
    let navbar = document.querySelector(".vertical_navbar");
    navbar.style.display = "none";
})