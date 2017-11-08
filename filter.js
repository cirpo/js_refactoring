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
  function hasFilter(candidate, filter) {
    let hasFilter = false;

    candidate.options.forEach(option => {
      if (filter.includes(option.code)) {
        hasFilter = true;
      }
    });

    return hasFilter;
  }

  candidates.forEach(candidate => {
    hasOptions = candidate.options && candidate.options.length;

    if (candidate.options) {
      if (availableImmediately) {
        hasOptions = hasFilter(candidate, 'AVAILABLE_IMMEDIATELY');
      } else if (freshGrad) {
        hasOptions = hasFilter(candidate, 'FRESH_GRAD');
      } else {
        filters.forEach(filter => {
          hasOptions = hasOptions && hasFilter(candidate, filter);
        });
      }
    }
    if (hasOptions) {
      filteredCandidates.push(candidate);
    }
  });

  return filteredCandidates;
}

module.exports = filter;
