import { FETCH_PRODUCTS, SEARCH_PRODUCTS } from "../actions/actionTypes";

let initialState = {
  products: [],
  search_result: []
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        search_result: action.payload
      };
    case SEARCH_PRODUCTS:
      if (action.all) {
        return state;
      } else {
        return {
          ...state,
          search_result: state.products.filter(
            item =>
              item.name.toLowerCase().includes(action.search)
          )
        };
      }
    default:
      return state;
  }
}
