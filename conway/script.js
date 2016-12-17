//Constants
const WIDTH = 600;
const HEIGHT = 600;
const SIZE = 60;
const ROWS = HEIGHT / SIZE;
const COLS = WIDTH / SIZE;

var canvas; //Canvas element
var ctx; //Canvas context
var running; //Variable for if running
var speed; //Variable for speed of iteration

//Create 2d array
var cells = new Array(ROWS);
for (var r = 0; r < ROWS; r++) {
  cells[r] = new Array(COLS);
  for (var c = 0; c < COLS; c++) {
    cells[r][c] = 0;
  }
}

//Draw function to draw cells to canvas
var draw = function() {
  //Clear context
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  //Iterate over every cell in the grid
  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLS; c++) {
      //If the value is 0, draw white
      //If the value is 1, draw black
      if (cells[r][c] == 0) {
        ctx.rect(c * SIZE, r * SIZE, SIZE, SIZE);
      } else {
        ctx.fillRect(c * SIZE, r * SIZE, SIZE, SIZE);
      }
    }
  }
  ctx.stroke();
};

//If index is out of range, translate to other end of array
var checkIndex = function(index, limit) {
  //If index is negative, move to highest position
  //If index greater than max index, move to lowest
  if (index < 0) {
    index += limit;
  } else if (index > limit - 1) {
    index -= limit;
  }
  return index;
};

//Process the current state of the cells
var processState = function() {
  //Create a copy of the array to reference
  var copy = new Array(ROWS);
  for (var r = 0; r < ROWS; r++) {
    copy[r] = cells[r].slice();
  }

  //For each cell
  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLS; c++) {

      //Get the amount of neighbors a cell has
      //Referencing the copy because the cell grid is being changed
      var neighbors = 0;
      neighbors += copy[checkIndex(r - 1, ROWS)][c];
      neighbors += copy[checkIndex(r - 1, ROWS)][checkIndex(c + 1, COLS)];
      neighbors += copy[r][checkIndex(c + 1, COLS)];
      neighbors += copy[checkIndex(r + 1, ROWS)][checkIndex(c + 1, COLS)];
      neighbors += copy[checkIndex(r + 1, ROWS)][c];
      neighbors += copy[checkIndex(r + 1, ROWS)][checkIndex(c - 1, COLS)];
      neighbors += copy[r][checkIndex(c - 1, COLS)];
      neighbors += copy[checkIndex(r - 1, ROWS)][checkIndex(c - 1, COLS)];

      if (cells[r][c] == 0) {
        if (neighbors == 3) {
          cells[r][c] = 1;
        }
      } else {
        if (neighbors < 2 || neighbors > 3) {
          cells[r][c] = 0;
        }
      }
    }
  }
};

//Step through once
var stepOnce = function() {
  if (!running) {
    processState();
    draw();
  }
};

//Start or stop iteration
var start = function() {
  if (running) {
    document.getElementById("toggleRunning").value = "Start";
    running = false;
  } else {
    document.getElementById("toggleRunning").value = "Stop";
    running = true;
    loop();
  }
};

//Loop for iteration
var loop = function() {
  if (!running) {
    return;
  } else {
    processState();
    draw();
    setTimeout(loop, speed);
  }
};

//Update speed
var updateSpeed = function() {
  speed = parseInt(document.getElementById("speed").value);
};

//Activate cell
var activateCell = function(e) {
  if (!running) {
    var pos = getMousePos(canvas, e);
    row = parseInt(pos.y / SIZE);
    col = parseInt(pos.x / SIZE);
    cells[row][col] = 1;
    draw();
  }
};

//Clear board
var clearBoard = function() {
  if (!running) {
    cells = new Array(ROWS);
    for (var r = 0; r < ROWS; r++) {
      cells[r] = new Array(COLS);
      for (var c = 0; c < COLS; c++) {
        cells[r][c] = 0;
      }
    }
    draw();
  }
}

//Get mouse position relative to canvas
var getMousePos = function(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

window.onload = function() {
  //Canvas setup
  canvas = document.getElementById("grid");
  ctx = canvas.getContext("2d");
  ctx.translate(0.5, 0.5);

  //Set speed
  speed = parseInt(document.getElementById("speed").value);

  //Initial draw
  draw();
};
