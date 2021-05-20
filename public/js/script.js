// Drum Arrays - each initialized to 16 values of false
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

// initialize drums library with string key and array value
const drums = {
  'kicks': kicks, 
  'snares': snares, 
  'hiHats': hiHats,
  'rideCymbals': rideCymbals
};

const toggleDrum = (drumString, index) => {
  // takes an array name string, e.g. 'kicks' and an index 
  // toggles true/false at the index
  const validArguments = drumString && index >= 0 && index <= 16;

  if (validArguments) {
    // invert the boolean value at the index given
    drums[drumString][index] = !drums[drumString][index]; 
  }
};

const validateDrumString = drumString => Object.keys(drums).includes(drumString);

const clear = (drumString) => {
  // takes an array name string and sets all values in the correct array to false
  const validDrumString = validateDrumString(drumString);
  // check if arguments are valid drum names, then reassign the array
  if (validDrumString) drums[drumString].fill(false);
}

const invert = drumString => {
  // invert each boolean value of all elements in the correct array
  const validDrumString = validateDrumString(drumString);
  if (validDrumString) drums[drumString].forEach((bool, i, drumArray) => {
    // invert values of original array
    drumArray[i] = !bool;
  });
};

// Bonus implementation: getNeighborPads() to play multiple synthesizer tones at once 

const getNeighborPads = (x, y, size) => {
  // x and y refers to the synth grid: zero-indexed from the bottom left of the grid
  // size is a number representing the number of rows/columns in the square, e.g. 4 => 4x4
  // should return an array of neighbors, each in the form [xValue, yValue]
  // Neighbors are the squares immediately to the left, right, above, and below a grid position

  if (x === undefined || y === undefined || size <= x || size <= y || x < 0 || y < 0) {
    // return [] if x or y is outside grid range
    return [];
  }
  
  // Because grid starts with 0, 0 at bottom left
  // Change the x y to work with zero indexed arrays
  let X = Math.abs(y - (size - 1));
  let Y = x;

  // Returned neighbour coordinate arrays will be stored here
  const validNeighbours = [];

  // Make a 2D array for the given size
  const rows = Array(size).fill(0);
  const grid = Array(size).fill(rows);
  // Fill in the x,y coordinate with the number 1 without mutating every row
  const markedRow = grid[X].map((n, index) => index === Y ? 1 : n);
  // replace the row with markedRow
  grid[X] = markedRow;
  // debugging...
  console.log(`x is ${x}, y is ${y}, grid is...`);
  console.log(grid);
  

  // save the grid coordinates L, R, UP, DOWN relative to given x, y (respectively)
  const left = [x-1, y];
  const right = [x+1, y];
  const up = [x, y+1];
  const down = [x, y-1];

  const potentialNeighbours = [left, down, right, up];

  for (const neighbour of potentialNeighbours) {
    //console.log(neighbour);
    const x = neighbour[0];
    const y = neighbour[1];
    // add only grid neighbors visible in grid of 0s
    if (grid[x][y] === 0) {
      validNeighbours.push(neighbour);
    }
  }
  
  

  console.log(validNeighbours)
  return validNeighbours;
}