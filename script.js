// create a grid of squares by appending div elements
// const heightInput = document.querySelector("#height");
// const gridHeight = document.querySelector("#height").value;
// console.log(heightInput, gridHeight);

let gridHeight = "";
let gridWidth = "";

function getInputValues() {
  gridHeight = document.querySelector("#height").value;
  gridWidth = document.querySelector("#width").value;

  console.log(gridHeight, gridWidth);
}

const submitInputBtn = document.querySelector("#submitInputBtn");
submitInputBtn.addEventListener("click", () => {
  getInputValues();
});

const gridContainer = document.querySelector("#gridContainer");

let currentPaintMode = "purple";

function getPaintStyle() {
  if (currentPaintMode == "darker") {
    return "background-color: purple; border: 1px black solid";
  } else if (currentPaintMode == "black") {
    return "background-color: black; border: 1px black solid";
  } else if (currentPaintMode == "eraser") {
    return "background-color: white; border: 1px black solid";
  } else if (currentPaintMode == "rainbow") {
    let randomColor = Math.floor(Math.random() * 360);
    return (
      "background-color: hsl(" +
      randomColor +
      ", 100%, 50%); border: 1px black solid"
    );
  } else if (currentPaintMode == "purple") {
    return "background-color: #cd2ecd; border: 1px black solid";
  } else if (currentPaintMode == "lighter") {
    return "background-color: #ba7bba; border: 1px black solid";
  }
}

function createGrid(height, width) {
  gridContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${height}, 1fr)`;

  for (let i = 0; i < height * width; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.cssText = "background-color: white; border: 1px black solid";
    gridContainer.appendChild(square);
    // if mousedown detected, then mouseenter to change each div, until mouseup?
    square.addEventListener("mouseenter", () => {
      // if background is white: add color
      // else lighten/darken according to chosen mode
      square.style.cssText = getPaintStyle();
    });
  }
}

createGrid(30, 30);

// CONTROL PANEL BUTTONS

// button to refresh page/ clear grid

const refreshPageBtn = document.querySelector("#refreshPageBtn");
refreshPageBtn.addEventListener("click", () => {
  document.location.reload();
});

// button to resize grid based on user input
// max height/width 100 - needs to fit in same size container
// how to set CSS based on user input number of columns/rows?
const form = document.querySelector(".form");
const resizeGridBtn = document.querySelector("#resizeGridBtn");
resizeGridBtn.addEventListener("click", () => {
  form.classList.toggle("hidden");
});

// button to select black & white mode

const toggleBlackBtn = document.querySelector("#toggleBlackBtn");
toggleBlackBtn.addEventListener("click", function () {
  currentPaintMode = "black";
});

// button to select 'darker' mode

const toggleDarkerBtn = document.querySelector("#toggleDarkerBtn");
toggleDarkerBtn.addEventListener("click", function () {
  currentPaintMode = "darker";
});

// button to select 'purple' mode (default)

const togglePurpleBtn = document.querySelector("#togglePurpleBtn");
togglePurpleBtn.addEventListener("click", function () {
  currentPaintMode = "purple";
});

// button to select 'lighter' mode

const toggleLighterBtn = document.querySelector("#toggleLighterBtn");
toggleLighterBtn.addEventListener("click", function () {
  currentPaintMode = "lighter";
});

// button to select 'random' mode

// const toggleRandomBtn = document.querySelector("#toggleRandomBtn");
// toggleRandomBtn.addEventListener("click", function () {
//   currentPaintMode = "random";
// });

// button to select 'rainbow' mode

const toggleRainbowBtn = document.querySelector("#toggleRainbowBtn");
toggleRainbowBtn.addEventListener("click", function () {
  currentPaintMode = "rainbow";
});

// button to select eraser

const toggleEraserBtn = document.querySelector("#toggleEraserBtn");
toggleEraserBtn.addEventListener("click", function () {
  currentPaintMode = "eraser";
});

// add prompt popup to user asking: # of squares per side for new grid
// max limit 100
// new grid should take up same total space no matter what # of squares

// BONUS: lighten/darken 10% on each pass
// BONUS: shades of purple instead of black
// BONUS: add option to toggle random rainbow color insted of black
