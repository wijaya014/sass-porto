console.log("Hello");
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

let display = false;

menuBtn.addEventListener("click", () => {
    if(!display){
        hamburger.classList.add('open');
        display = true;
    } else {
        hamburger.classList.remove('open');
        display= false;
    }
});
