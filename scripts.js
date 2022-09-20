const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");
const hide = document.querySelector(".hide");
const feature = document.querySelector(".feat-dd");
const arrowfeat = document.querySelector(".features>img");
const comp = document.querySelector(".comp-dd");
const arrowcomp = document.querySelector(".company>img");

menu.addEventListener("click", () => {
    nav.classList.add("open");
    nav.classList.remove("close");
    hide.classList.add('overlay');
});

menuClose.addEventListener("click", () => {
    nav.classList.remove("open");
    nav.classList.add("close");
    hide.classList.remove('overlay');
});

feature.addEventListener("mouseover", () => {
    arrowfeat.src = "images/icon-arrow-up.svg";
});

feature.addEventListener("mouseout", () => {
    arrowfeat.src = "images/icon-arrow-down.svg";
});

comp.addEventListener("mouseover", () => {
    arrowcomp.src = "images/icon-arrow-up.svg";
});

comp.addEventListener("mouseout", () => {
    arrowcomp.src = "images/icon-arrow-down.svg";
});

