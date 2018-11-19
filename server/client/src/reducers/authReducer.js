import {FETCH_USER } from '../actions/types'

export default function(state=null, action){
    console.log(action);
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false; //if action.payload is empty string it is treated as false value so by adding "||false" the entire or statement is false, so returns false
        default:
            return state;
    }
}