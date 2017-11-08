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

function filter(candidates, filters = []) {
  var filteredCandidates = [];
  var hasOptions;
  var availableImmediately = filters.includes('AVAILABLE_IMMEDIATELY');
  var freshGrad = !availableImmediately && filters.includes('FRESH_GRAD');

  if (!filters.length) {
    return candidates;
  }
  function hasFilter() {
    let hasFilter = false;
    for (var j = candidates[i].options.length; j--; ) {
      if (!availableImmediately && !freshGrad) {
        if (filters[k].indexOf(candidates[i].options[j].code) !== -1) {
          hasFilter = true;
        }
      } else if (availableImmediately && candidates[i].options[j].code === 'AVAILABLE_IMMEDIATELY') {
        hasFilter = true;
      } else if (freshGrad && candidates[i].options[j].code === 'FRESH_GRAD') {
        hasFilter = true;
      }
    }
    return hasFilter;
  }

  for (var i = candidates.length; i--; ) {
    hasOptions = candidates[i].options && candidates[i].options.length > 0; //has.options

    if (candidates[i].options) {
      for (var k = filters.length; k--; ) {
        hasOptions = hasOptions && hasFilter();
      }
    }
    if (hasOptions) {
      filteredCandidates.unshift(candidates[i]);
    }
  }
  return filteredCandidates;
}

module.exports = filter;
