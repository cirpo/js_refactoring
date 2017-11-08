/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *   
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 * 
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 * 
 * 
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *  
 *   happy refactory :)
 */

function filter(results, filters = []) {
  var out = [];
  var resultsLength = results.length;
  var hasOptions;
  var availableImmediately = false;
  var freshGrad = false;

  if (!filters.length) {
    return results;
  }

  if (filters.indexOf('AVAILABLE_IMMEDIATELY') !== -1) {
    availableImmediately = true;
  } else if (filters.indexOf('FRESH_GRAD') !== -1) {
    freshGrad = true;
  }

  for (var i = resultsLength; i--; ) {
    hasOptions = results[i].options && results[i].options.length > 0; //has.options

    if (results[i].options) {
      for (var k = filters.length; k--; ) {
        // loop through filters
        var hasFilter = false;
        for (var j = results[i].options.length; j--; ) {
          if (!availableImmediately && !freshGrad) {
            if (filters[k].indexOf(results[i].options[j].code) !== -1) {
              hasFilter = true;
            }
          } else if (availableImmediately && results[i].options[j].code === 'AVAILABLE_IMMEDIATELY') {
            hasFilter = true;
          } else if (freshGrad && results[i].options[j].code === 'FRESH_GRAD') {
            hasFilter = true;
          }
        }
        hasOptions = hasOptions && hasFilter;
      }
    }
    if (hasOptions) {
      out.unshift(results[i]);
    }
  }
  return out;
}

module.exports = filter;
