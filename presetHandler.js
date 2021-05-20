// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetIndex, newPresetArray) => {
  // returns a status code and a presetArray for GET requests, e.g. [200, [true, true ...]]
  // returns a status code and an updated presetArray for PUT requests [200, newPresetArray]
  const validIndex = presets[presetIndex];
  const presetArray = validIndex ? [200] : [404];

  switch (requestType) {
    case 'GET':
      // add the requested presetArray to the returned result
      if (validIndex) presetArray.push(presets[presetIndex]);
    case 'PUT':
      // if third argument is given, it will be a PUT request
      if (newPresetArray) {
        // update the presets array at the given index
        presets[presetIndex] = newPresetArray;
        // add the new array to the returned preset
        presetArray.push(newPresetArray);
      }
      // always return here for GET or PUT, no break statements.
      return presetArray;
    default: 
      // invalid/bad request
      return [400]
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
