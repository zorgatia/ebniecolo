import axios from "axios";
import { setAlert } from "./alert";

import{
    SET_PROF,
    EDIT_PROF,
    GET_PROF,
    GET_PROFS,
    DEL_PROF,
    ERR_PROF
}from "./types"

import setAuthToken from '../utils/setAuthToken';
//add prof
export const addProf = ({ nom, prenom, email, image, type, fix, mob, site }) => async dispatch =>{
    
    try{
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        const config = {
            headers: {
              "Content-Type": "Application/json"
            }
          };
        const body = JSON.stringify({ nom, prenom, email, image, type, fix, mob, site });      
          
        const res = await axios.post('/api/prof', body, config)
        dispatch({
            type: SET_PROF,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: ERR_PROF
        })
    }
}


// getProfs
export const getProfs = () => async dispatch => {
    try {
        const res = await axios.get('/api/prof')
        dispatch({
            type: GET_PROFS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ERR_PROF
        })
    }
}

// getProf
export const getProf = (_id) => async dispatch => {
    try {
        dispatch({
            type: GET_PROF,
            payload: _id
        })
    } catch (err) {
        dispatch({
            type: ERR_PROF
        })
    }
}

//delprof
export const delProf = (id) => async dispatch => {
    try {
        const res = await axios.delete(`/api/prof/${id}`)
        dispatch({
            type: DEL_PROF,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: ERR_PROF
        })
    }
}

// editprof
export const editProf = ({_id, nom, prenom, email, image, type, fix, mob, site }) => async dispatch => {
    try {
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        const config = {
            headers: {
              "Content-Type": "Application/json"
            }
          };
        const body = JSON.stringify({_id, nom, prenom, email, image, type, fix, mob, site });      
          
        const res = await axios.post('/api/prof', body, config)
        dispatch({
            type: EDIT_PROF,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ERR_PROF
        })
    }
}