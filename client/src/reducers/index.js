import { combineReducers } from 'redux';
import alert from './alert'
import auth from './auth'
import prof from './prof'
import project from './project'
import produit from './produit'



export default combineReducers({
    alert,
    auth,
    prof,
    project,
    produit
});