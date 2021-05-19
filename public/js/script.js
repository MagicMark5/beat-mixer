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

const clear = (drumString) => {
  // takes an array name string and sets all values in the correct array to false
  const validDrumString = Object.keys(drums).includes(drumString);
  // check if arguments are valid drum names, then reassign the array
  if (validDrumString) drums[drumString].fill(false);
}