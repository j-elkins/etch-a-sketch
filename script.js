// create a grid of squares by appending div elements

const gridContainer = document.querySelector("#gridContainer");

let currentPaintMode = "purple";
let randomColor = Math.floor(Math.random() * 16777215).toString(16);

function getPaintStyle() {
  if (currentPaintMode == "purple") {
    return "background-color: purple; border: 1px black solid";
  } else if (currentPaintMode == "black") {
    return "background-color: black; border: 1px black solid";
  } else if (currentPaintMode == "eraser") {
    return "background-color: white; border: 1px black solid";
  } else if (currentPaintMode == "rainbow") {
    return "background-color: '#' + randomColor; border: 1px black solid";
  } else if (currentPaintMode == "lighten") {
    return "background-color: white; border: 1px black solid";
  } else if (currentPaintMode == "darken") {
    return "background-color: white; border: 1px black solid";
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
      // else
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

const toggleBWBtn = document.querySelector("#toggleBWBtn");
toggleBWBtn.addEventListener("click", function () {
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

// add hover effect: grid dvs change color when mouse passes over them
// addEventListener for mouse pointer enters/leaves div

// change color of the divs either by JS change background-color
// or adding new class to div

// add prompt popup to user asking: # of squares per side for new grid
// max limit 100
// new grid should take up same total space no matter what # of squares

// BONUS: lighten/darken 10% on each pass
// BONUS: shades of purple instead of black and white
// BONUS: add option to toggle random rainbow color insted of black
