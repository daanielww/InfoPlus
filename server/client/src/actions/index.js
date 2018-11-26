import axios from 'axios'
import { FETCH_USER } from './types';

//since its only 1 expression, arrow function will just return it. no need for curly braces or return keyword
export const fetchUser = () =>
    async (dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    };

export const handleToken = (token) => async (dispatch) =>{
    const res = await axios.post('/api/stripe', token);
    dispatch ({type: FETCH_USER, payload: res.data});
};

