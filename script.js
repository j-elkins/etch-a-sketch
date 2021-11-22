// create a grid of squares by appending div elements

const gridContainer = document.querySelector("#gridContainer");

let currentPaintMode = "purple";

function getPaintStyle() {
  if (currentPaintMode == "purple") {
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
  } else if (currentPaintMode == "lighten") {
    return "background-color: #cd2ecd; border: 1px black solid";
  } else if (currentPaintMode == "darken") {
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

const resizeGridBtn = document.querySelector("#resizeGridBtn");
resizeGridBtn.addEventListener("click", () => {
  console.log("clicked resize grid");
  prompt("enter height and width");
});

// button to select black & white mode

const toggleBlackBtn = document.querySelector("#toggleBlackBtn");
toggleBlackBtn.addEventListener("click", function () {
  currentPaintMode = "black";
});

// button to select 'shade of purple' mode

const toggleShadesBtn = document.querySelector("#toggleShadesBtn");
toggleShadesBtn.addEventListener("click", function () {
  currentPaintMode = "purple";
});

// button to select 'lighten' mode

const toggleLightenBtn = document.querySelector("#toggleLightenBtn");
toggleLightenBtn.addEventListener("click", function () {
  currentPaintMode = "lighten";
});

// button to select 'darken' mode

const toggleDarkenBtn = document.querySelector("#toggleDarkenBtn");
toggleDarkenBtn.addEventListener("click", function () {
  currentPaintMode = "darken";
});

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
