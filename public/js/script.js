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
  // size is a number representing the number of rows/columns in the square
  // should return an array of neighbors, each in the form [xValue, yValue]
  // Neighbors are the squares immediately to the left, right, above, and below a grid position

}