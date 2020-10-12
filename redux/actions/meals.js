export const TOGGLE_FAVOURITE = 'TOOGLE_FAVOURITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavourite = (mealId) => ({
  type: TOGGLE_FAVOURITE,
  mealId,
});

export const setFilters = (filterSettings) => ({
  type: SET_FILTERS,
  filters: filterSettings
});