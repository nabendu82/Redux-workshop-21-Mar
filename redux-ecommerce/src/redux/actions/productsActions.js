import shopApi from '../../apis/shopApi';
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => {
    return async function(dispatch) {
        try {
            const response = await shopApi.get("/products");
            dispatch({
                type: ActionTypes.FETCH_PRODUCTS,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export const fetchProduct = id => {
    return async function(dispatch) {
        try {
            const response = await shopApi.get(`/products/${id}`);
            dispatch({
                type: ActionTypes.SELECTED_PRODUCT,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
