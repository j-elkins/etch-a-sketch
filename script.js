// create a grid of squares. default 16 x 16
// accept user input fro 'resize' form

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

const submitInputBtn = document.querySelector("#submitInputBtn");
submitInputBtn.addEventListener("click", () => {
  getInputValues();
});

const gridContainer = document.querySelector("#gridContainer");

let currentPaintMode = "purple";
let currentColor = 270;
const incrementColor = 1;

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
  } else if (currentPaintMode == "rainbow") {
    currentColor += incrementColor;
    return "background-color: hsl(" + currentColor + ", 100%, 50%)";
  }
}

// create grid using form input
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

createGrid(16, 16);

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

// const toggleRandomBtn = document.querySelector("#toggleRandomBtn");
// toggleRandomBtn.addEventListener("click", function () {
//   currentPaintMode = "random";
// });

const toggleRainbowBtn = document.querySelector("#toggleRainbowBtn");
toggleRainbowBtn.addEventListener("click", function () {
  currentPaintMode = "rainbow";
});

const toggleEraserBtn = document.querySelector("#toggleEraserBtn");
toggleEraserBtn.addEventListener("click", function () {
  currentPaintMode = "eraser";
});

// show form to take user input
const form = document.querySelector(".form");
const resizeGridBtn = document.querySelector("#resizeGridBtn");
resizeGridBtn.addEventListener("click", () => {
  form.classList.toggle("hidden");
});

// BONUS: shades of purple instead of rainbow
// BONUS: lighten/darken 10% on each pass
