import { FETCH_PRODUCTS, SEARCH_PRODUCTS } from "./actionTypes";

export function fetch_products() {
  return function(dispatch) {
    fetch("http://localhost:3000/products.json")
      .then(res => res.json())
      .then(data => dispatch({ type: FETCH_PRODUCTS, payload: data }));
  };
}

export function search_products(input) {
  return function(dispatch) {
    const searchType = input.toLowerCase();
    if (searchType === "") {
      dispatch({type: SEARCH_PRODUCTS, all: true});
    } else {
      dispatch({type: SEARCH_PRODUCTS, all: false, search: searchType});
    }
  };
}
