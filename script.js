// create a grid of squares from user input (default 16x16)
let height = "";
let width = "";

function matchWidthToHeight() {
  let src = document.querySelector("#height");
  let dest = document.querySelector("#width");
  dest.value = src.value;
}

function getInputValues() {
  height = document.querySelector("#height").value;
  width = document.querySelector("#width").value;

  createGrid(height, width);
}

const form = document.querySelector(".form");
const resizeGridBtn = document.querySelector("#resizeGridBtn");
resizeGridBtn.addEventListener("click", () => {
  getInputValues();
});

const gridContainer = document.querySelector("#gridContainer");

//  select paint mode
let currentPaintMode = "purple";
let currentHueValue = 270;
const incrementHue = 1;

function getPaintStyle() {
  if (currentPaintMode == "darker") {
    return "background-color: purple";
  } else if (currentPaintMode == "black") {
    return "background-color: black";
  } else if (currentPaintMode == "eraser") {
    return "background-color: white";
  } else if (currentPaintMode == "random") {
    let randomColor = Math.floor(Math.random() * 360);
    return "background-color: hsl(" + randomColor + ", 100%, 50%)";
  } else if (currentPaintMode == "purple") {
    return "background-color: #cd2ecd";
  } else if (currentPaintMode == "lighter") {
    return "background-color: #ba7bba";
  } else if (currentPaintMode == "shades") {
    currentHueValue += incrementHue;
    let angle = 285 + 30 * Math.sin(currentHueValue);
    return "background-color: hsl(" + angle + ", 100%, 50%)";
  } else if (currentPaintMode == "rainbow") {
    currentHueValue += incrementHue;
    return "background-color: hsl(" + currentHueValue + ", 100%, 50%)";
  }
}

// create grid using default or form input
function createGrid(height, width) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${height}, 1fr)`;

  for (let i = 0; i < height * width; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.cssText = "background-color: white";
    gridContainer.appendChild(square);

    square.addEventListener("mouseenter", () => {
      square.style.cssText = getPaintStyle();
    });
  }
}

createGrid(16, 16); // default

// CONTROL PANEL BUTTONS
const refreshPageBtn = document.querySelector("#refreshPageBtn");
refreshPageBtn.addEventListener("click", () => {
  document.location.reload();
});

const toggleBlackBtn = document.querySelector("#toggleBlackBtn");
toggleBlackBtn.addEventListener("click", function () {
  currentPaintMode = "black";
});

const toggleDarkerBtn = document.querySelector("#toggleDarkerBtn");
toggleDarkerBtn.addEventListener("click", function () {
  currentPaintMode = "darker";
});

const togglePurpleBtn = document.querySelector("#togglePurpleBtn");
togglePurpleBtn.addEventListener("click", function () {
  currentPaintMode = "purple";
});

const toggleLighterBtn = document.querySelector("#toggleLighterBtn");
toggleLighterBtn.addEventListener("click", function () {
  currentPaintMode = "lighter";
});

const toggleRainbowBtn = document.querySelector("#toggleRainbowBtn");
toggleRainbowBtn.addEventListener("click", function () {
  currentPaintMode = "rainbow";
});

const toggleEraserBtn = document.querySelector("#toggleEraserBtn");
toggleEraserBtn.addEventListener("click", function () {
  currentPaintMode = "eraser";
});

// extra modes: random, shades of purple

// const toggleRandomBtn = document.querySelector("#toggleRandomBtn");
// toggleRandomBtn.addEventListener("click", function () {
//   currentPaintMode = "random";
// });

// const toggleShadesBtn = document.querySelector("#toggleShadesBtn");
// toggleShadesBtn.addEventListener("click", function () {
//   currentPaintMode = "shades";
// });
