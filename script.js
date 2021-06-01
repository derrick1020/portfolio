const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");
const pro = document.querySelector("#pro");
const about = document.querySelector("#me");

const tl = new TimelineMax();
//controlling the animations and the time
tl.fromTo(hero, 1, { height: "0" }, { height: "100%" });
tl.fromTo(hero, 1.2, { width: "100%" }, { width: "80%" });
tl.fromTo(slider, 1.2, { x: "-100%" }, { x: "0%" });
tl.fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1.0");
tl.fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=1.0");
tl.fromTo(pro, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=.8");
tl.fromTo(me, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=.5");
