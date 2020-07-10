import axios from "axios";
import { setAlert } from "./alert";

import {
  SET_PRODUIT,
  EDIT_PRODUIT,
  GET_PRODUIT,
  GET_PRODUITS,
  DEL_PRODUIT,
  ERR_PRODUIT
} from "./types";

import setAuthToken from "../utils/setAuthToken";

//add Produit
export const addProduit = ({
  nom,
  descp,
  mainImage,
  cat,
  prix,
  stock
}) => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const config = {
      headers: {
        "Content-Type": "Application/json"
      }
    };
    const body = JSON.stringify({
      nom, descp, mainImage, cat, prix, stock
    });

    const res = await axios.post("/api/produit", body, config);
    dispatch({
      type: SET_PRODUIT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERR_PRODUIT
    });
  }
};

// getProduits
export const getProduits = () => async dispatch => {
  try {
    const res = await axios.get("/api/produit");
    dispatch({
      type: GET_PRODUITS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERR_PRODUIT
    });
  }
};

// getProduit
export const getProduit = _id => async dispatch => {
  try {
    dispatch({
      type: GET_PRODUIT,
      payload: _id
    });
  } catch (err) {
    dispatch({
      type: ERR_PRODUIT
    });
  }
};

//delproject
export const delProduit = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/project/${id}`);
    dispatch({
      type: DEL_PRODUIT,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: ERR_PRODUIT
    });
  }
};

// editprof
export const editProduit = ({
  _id,
  nom,
  prenom,
  email,
  image,
  type,
  fix,
  mob,
  site
}) => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const config = {
      headers: {
        "Content-Type": "Application/json"
      }
    };
    const body = JSON.stringify({
      _id,
      nom,
      prenom,
      email,
      image,
      type,
      fix,
      mob,
      site
    });

    const res = await axios.post("/api/project", body, config);
    dispatch({
      type: EDIT_PRODUIT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERR_PRODUIT
    });
  }
};
