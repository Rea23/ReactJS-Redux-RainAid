import { ADD_FAVORITES, REMOVE_FAVORITES } from './actionTypes';

export function AddFavorites(product) {
    return function(dispatch) {
        dispatch({type: ADD_FAVORITES, item: product});
    }
}

export function RemoveFavorites(id) {
    return function(dispatch) {
        dispatch({type: REMOVE_FAVORITES, id});
    }
}