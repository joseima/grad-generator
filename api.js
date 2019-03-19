const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const direction = document.querySelector(".direction");
const body = document.getElementById("gradient");

const  setGradient = () => {
    body.style.background = "linear-gradient( " + direction.value + ", " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
direction.addEventListener("input", setGradient);