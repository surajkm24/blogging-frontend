import { AUTH_SUCCESS, AUTH_ERROR, AUTH_LOADING, AUTH_SIGNUP_SUCCESS, AUTH_REFRESHTOKEN, AUTH_UPDATEUSERDATA, AUTH_LOGOUT, AUTH_LOGINSUCCESS } from "./auth.types"
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

export const signupSuccessAPI = (creds: { email: string, name: string, token: string }) => async (dispatch: Function) => {
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${baseurl}/users/signup/email/confirm`, creds);
        if (res.data.message === 'Signup successful!') {
            dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: res.data })
        }
        else {
            dispatch({ type: AUTH_SUCCESS })
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
            // console.log(res.data,1)
            dispatch({ type: AUTH_UPDATEUSERDATA, payload: res.data })
        }
        // console.log(res.data,2)
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
            // console.log(res.data,3)
            dispatch({ type: AUTH_REFRESHTOKEN, payload: res.data.primaryToken })
        }
        return res.data
    }
    catch (e) {
        return e;
    }
}

export const logoutAPI = (primaryToken: string, refreshToken: string) => async (dispatch: Function) => {
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${baseurl}/users/logout`, {
            primaryToken, refreshToken
        });
        dispatch({ type: AUTH_LOGOUT });
        return res.data;
    }
    catch (e) {
        return e;
    }
}

export const loginAPI = (email: string) => async (dispatch: Function) => {
    dispatch({ type: AUTH_LOADING })
    try {
        let res = await axios.post(`${baseurl}/users/login`, { email });
        dispatch({ type: AUTH_SUCCESS });
        console.log(res)
        return res.data;
    }
    catch (e) {
        dispatch({ type: AUTH_ERROR });
        return e;
    }
}

export const loginConfirmAPI = (token: string) => async (dispatch: Function) => {
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${baseurl}/users/login/email`, { token });
        if (res.data.message === 'Login successful!') {
            dispatch({ type: AUTH_LOGINSUCCESS, payload: res.data })
        }
        else {
            dispatch({ type: AUTH_SUCCESS })
        }
        return res.data;
    }
    catch (e) {
        return e;
    }
}