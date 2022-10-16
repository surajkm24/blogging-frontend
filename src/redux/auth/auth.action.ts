import { AUTH_SUCCESS, AUTH_ERROR, AUTH_LOADING, AUTH_SIGNUP_SUCCESS, AUTH_REFRESHTOKEN, AUTH_UPDATEUSERDATA } from "./auth.types"
import axios from 'axios';

const baseurl = import.meta.env.VITE_BACKENDBASEURL;

export const signupAPI = (email: string) => async (dispatch: Function) => {
    dispatch({ type: AUTH_LOADING })
    try {
        let res = await axios.post(`${baseurl}/users/signup`, { email });
        dispatch({ type: AUTH_SUCCESS });
        console.log(res)
        return res.data;
    }
    catch (e) {
        dispatch({ type: AUTH_ERROR });
        return e;
    }
}

export const signupConfirmLinkAPI = (token: string) => async (dispatch: Function) => {
    dispatch({ type: AUTH_LOADING })
    try {
        let res = await axios.post(`${baseurl}/users/signup/email`, {
            token
        })
        dispatch({ type: AUTH_SUCCESS })
        return res.data;
    }
    catch (e) {
        return e;
    }
}

export const signupSuccessAPI = (creds: { email: string, name: string }) => async (dispatch: Function) => {
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${baseurl}/users/signup/email/confirm`, creds);
        if (res.data.message === 'Signup successful!') {
            dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: res.data })
        }
        return res.data;
    }
    catch (e) {
        return e;
    }
}

export const addTopicsAPI = (topics: Array<string>, id: string) => async (dispatch: Function) => {
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.patch(`${baseurl}/users/topics`, {
            topics, id
        });
        dispatch({ type: AUTH_SUCCESS });
        return res.data;
    }
    catch (e) {
        return e;
    }
}

export const getUserData = (token: string) => async (dispatch: Function) => {
    try {
        let res = await axios.get(`${baseurl}/users/data`, {
            headers: { 'Authorization': token }
        });
        if (res.data !== 'Invalid token!') {
            console.log(res.data)
            dispatch({ type: AUTH_UPDATEUSERDATA, payload: { user: res.data } })
        }
        return res.data
    }
    catch (e) {
        return e;
    }
}

export const refreshToken = (token: string) => async (dispatch: Function) => {
    try {
        let res = await axios.post(`${baseurl}/users/refresh`, {}, {
            headers: { 'RefreshToken': token }
        });
        if (res.data.message === 'Token regenerated successfully!') {
            dispatch({ type: AUTH_REFRESHTOKEN, payload: res.data.primaryToken })
        }
        return res.data
    }
    catch (e) {
        return e;
    }
}