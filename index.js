// create a 16x16 grid of square divs using JS
// select grid container, appendChild divs for grid boxes
const gridContainer = document.querySelector("#gridContainer");

const square = document.createElement("div");
square.classList.add("square");
square.style.cssText = "background-color: white; border: 1px black solid";
gridContainer.appendChild(square);

// style with CSS grid
// watch out for borders/margins adjusting the size of squares..

// add hover effect: grid dvs change color when mouse passes over them
// addEventListener for mouse pointer enters/leaves div

// change color of the divs either by JS change background-color
// or adding new class to div

// add button to top of screen to clear current grid
// and send popup to user asking: # of squares per side for new grid
// max limit 100
// new grid should take up same total space no matter what # of squares

// add option to toggle random rainbow color insted of black
