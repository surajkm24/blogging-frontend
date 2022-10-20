import axios from 'axios';
import { BLOGS_ERROR, BLOGS_LOADING, BLOGS_SUCCESS, GETSINGLEBLOG } from './blogs.types';

const baseurl = import.meta.env.VITE_BACKENDBASEURL;

export const getBlogsAPI = () => async (dispatch: Function) => {
    dispatch({ type: BLOGS_LOADING })
    try {
        let res = await axios.get(`${baseurl}/blogs`);
        dispatch({ type: BLOGS_SUCCESS, payload: { data: res.data } });
        return res.data;
    }
    catch (e) {
        dispatch({ type: BLOGS_ERROR });
        return e;
    }
}

export const getSingleBlogAPI = (id: string) => async (dispatch: Function) => {
    dispatch({ type: BLOGS_LOADING });
    try {
        let res = await axios.get(`${baseurl}/blogs/${id}`);
        dispatch({ type: GETSINGLEBLOG, payload: { blog: res.data } });
        return res.data;
    }
    catch (e) {
        return e;
    }
}