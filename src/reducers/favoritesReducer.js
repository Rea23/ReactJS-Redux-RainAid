import { ADD_FAVORITES, REMOVE_FAVORITES } from "../actions/actionTypes";

let initialState = {
  favorites: []
};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.item]
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
}