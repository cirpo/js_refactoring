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

function hasFilter(candidate, filter) {
  return candidate.options.some(option => {
    return filter.includes(option.code);
  });
}

function filter(candidates, filters = []) {
  const filteredCandidates = [];
  const isAvailableFilterSet = filters.includes('AVAILABLE_IMMEDIATELY');
  const isFreshGradFilterSet = !isAvailableFilterSet && filters.includes('FRESH_GRAD');

  if (!filters.length) {
    return candidates;
  }

  return candidates.filter(candidate => {
    if (candidate.options) {
      if (isAvailableFilterSet) {
        return hasFilter(candidate, 'AVAILABLE_IMMEDIATELY');
      } else if (isFreshGradFilterSet) {
        return hasFilter(candidate, 'FRESH_GRAD');
      } else {
        return filters.every(filter => hasFilter(candidate, filter));
      }
    }

    return false;
  });
}

module.exports = filter;
