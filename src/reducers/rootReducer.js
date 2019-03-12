import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  favlist: favoritesReducer
});

export default rootReducer;
