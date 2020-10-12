import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE, SET_FILTERS } from '../actions/meals';

const mealsReducerIntitialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
};

const mealsReducer = (state = mealsReducerIntitialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
      const newFavMeals =
        existingIndex >= 0 ?
          state.favouriteMeals.filter(meal => meal.id !== action.mealId) :
          [state.meals.find(meal => meal.id === action.mealId), ...state.favouriteMeals];

      return {
        ...state,
        favouriteMeals: newFavMeals,
      };
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree)
          return false;
        if (appliedFilters.lactoseFree && !meal.isLactosFree)
          return false;
        if (appliedFilters.vegan && !meal.isVegan)
          return false;
        if (appliedFilters.vegetarian && !meal.isVegetarian)
          return false;

        return true;
      })
      return {
        ...state,
        filteredMeals
      };
    default:
      return state;
  }
};

export default mealsReducer;