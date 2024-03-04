let img = document.querySelector(".section");
let me = document.getElementById("me");

img.addEventListener("mouseover", () => {
	me.style.cssText = "transform:scale(1.20);cursor:pointer";
	me.style.transitionDelay = ".5s";
	me.style.transitionDuration = "2s";
	me.style.transitionProperty = "all";
	me.style.transitionTimingFunction = "ease";
});
img.addEventListener("mouseout", () => {
	me.style.cssText = "transform:scale(0.9)";
	me.style.transitionDelay = ".5s";
	me.style.transitionDuration = "2s";
	me.style.transitionProperty = "all";
	me.style.transitionTimingFunction = "ease";
});

let logo = document.getElementById("diamond");
let toggle = document.getElementById("hamburger");
let icons = document.getElementById("star");
let links = document.getElementById("few");
toggle.addEventListener("click", () => {
	icons.classList.toggle("star-platinum");
	links.classList.toggle("few");
	logo.classList.toggle("headerlogo");
});
