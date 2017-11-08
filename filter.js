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
const hasFilter = (options = [], filter) =>
  options.some((options) => filter.includes(options.code));

module.exports = function filterCandidates(candidates, filters = []) {
  const isAvailableFilterSet = filters.includes("AVAILABLE_IMMEDIATELY");
  const isFreshGradFilterSet =
    !isAvailableFilterSet && filters.includes("FRESH_GRAD");

  if (!filters.length) {
    return candidates;
  }

  return candidates.filter(({ options = [] }) => {
    if (isAvailableFilterSet) {
      return hasFilter(options, "AVAILABLE_IMMEDIATELY");
    }

    if (isFreshGradFilterSet) {
      return hasFilter(options, "FRESH_GRAD");
    }

    return filters.every((filter) => hasFilter(options, filter));
  });
};
