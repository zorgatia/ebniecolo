import axios from "axios";
import { setAlert } from "./alert";

import {
  SET_PROJECT,
  EDIT_PROJECT,
  GET_PROJECT,
  GET_PROJECTS,
  DEL_PROJECT,
  ERR_PROJECT
} from "./types";

import setAuthToken from "../utils/setAuthToken";

//add project
export const addProject = ({
    titre,
    mainImage,
    images,
    descp,
    datef,
    region,
    adress,
    nom,
    image,
    email,
    prof
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
        titre,
        mainImage,
        images,
        descp,
        datef,
        region,
        adress,
        nom,
        image,
        email,
        prof
    });

    const res = await axios.post("/api/project", body, config);
    dispatch({
      type: SET_PROJECT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERR_PROJECT
    });
  }
};

// getProjects
export const getProjects = () => async dispatch => {
  try {
    const res = await axios.get("/api/project");
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERR_PROJECT
    });
  }
};

// getProject
export const getProject = _id => async dispatch => {
  try {
    dispatch({
      type: GET_PROJECT,
      payload: _id
    });
  } catch (err) {
    dispatch({
      type: ERR_PROJECT
    });
  }
};

//delproject
export const delProject = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/project/${id}`);
    dispatch({
      type: DEL_PROJECT,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: ERR_PROJECT
    });
  }
};

// editprof
export const editProject = ({
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
      type: EDIT_PROJECT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERR_PROJECT
    });
  }
};
