import {
    SET_PRODUIT,
    EDIT_PRODUIT,
    GET_PRODUIT,
    GET_PRODUITS,
    DEL_PRODUIT,
    ERR_PRODUIT
  } from "../actions/types";
  const initialState = {
    produits: [],
    produit: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case SET_PRODUIT:
        return {
          ...state,
          produits: [...state.produits, payload],
          loading: false
        };
      case GET_PRODUITS:
        return {
          ...state,
          produits: payload,
          loading: false
        };
      case GET_PRODUIT:
        return {
          ...state,
          produit: state.produits.find(p => p._id === payload)
        };
      case DEL_PRODUIT:
        return {
          ...state,
          produits: state.produits.filter(p => p._id !== payload)
        };
      case EDIT_PRODUIT:
        return {
          ...state,
          produit: null,
          produits: state.produits.map(p => {
            if (p._id === payload._id) return payload;
            return p;
          })
        };
      default:
        return state;
    }
  }
  