import  {combineReducers} from 'redux';
//changing the name of reduxer to reduxForm
import {reducer as reduxForm} from 'redux-form' //object destructuring syntax. Retrieving the reducer function from the object exported
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,   //the key is where the output of the reducer will be stored at in the store.
    form: reduxForm //need the special key "form"
})