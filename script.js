const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");
const body = document.querySelector(".bg");

const tl = new TimelineMax();

tl.fromTo ( hero, 1 , {height: "0" }, {height: "100%" }
);
tl.fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "80%" }
).fromTo(
    slider, 
    1.2,
    { x: "-100%"},
    { x: "0%"} 
).fromTo(
    logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1.0"
).fromTo(
    headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1.0"
);

tl.fromto (
    bg, 05, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1.0"
);
