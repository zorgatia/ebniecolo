import {
  SET_PROJECT,
  EDIT_PROJECT,
  GET_PROJECT,
  GET_PROJECTS,
  DEL_PROJECT,
  ERR_PROJECT
} from "../actions/types";
const initialState = {
  projects: [],
  project: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_PROJECT:
      return {
        ...state,
        projects: [...state.projects, payload],
        loading: false
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false
      };
    case GET_PROJECT:
      return {
        ...state,
        project: state.projects.find(p => p._id === payload)
      };
    case DEL_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(p => p._id !== payload)
      };
    case EDIT_PROJECT:
      return {
        ...state,
        project: null,
        projects: state.projects.map(p => {
          if (p._id === payload._id) return payload;
          return p;
        })
      };
    default:
      return state;
  }
}
