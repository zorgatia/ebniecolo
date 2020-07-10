import { SET_PROF,
    EDIT_PROF,
    GET_PROF,
    GET_PROFS,
    DEL_PROF,
    ERR_PROF} from '../actions/types'
const initialState = {
    profs:[],
    prof:null,
    loading: true,
    error: {}

};

 export default function(state = initialState,action){
    const {type , payload} = action;
    
    switch(type){
        case SET_PROF:
            return {
                ...state,
                profs: [...state.profs,payload],
                loading:false
            }
        case GET_PROFS:
            return{
                ...state,
                profs: payload,
                loading: false
            }
        case GET_PROF:
            return{
                ...state,
                prof: state.profs.find(p=>p._id===payload)
            }
        case DEL_PROF:
            return{
                ...state,
                profs: state.profs.filter(p=>p._id!==payload)
            }
        case EDIT_PROF:
            return {
                ...state,
                prof: null,
                profs: state.profs.map(p=>{
                    if(p._id=== payload._id)return payload;
                    return p;
                })
            }
        default:
            return state;
    }
 }