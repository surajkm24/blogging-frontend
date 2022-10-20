import axios from 'axios';
import { GET_USERS_SUCCESS, USERS_ERROR, USERS_LOADING } from './users.types';

const baseurl = import.meta.env.VITE_BACKENDBASEURL;

export const getUsersAPI = () => async (dispatch: Function) => {
    dispatch({ type: USERS_LOADING });

    try {
        let res = await axios.get(`${baseurl}/users`);
        dispatch({ type: GET_USERS_SUCCESS, payload: { data: res.data } });
        return res.data;
    }
    catch (e) {
        dispatch({type:USERS_ERROR})
        return e;
    }
}