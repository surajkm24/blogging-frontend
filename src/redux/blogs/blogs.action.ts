import axios from 'axios';
import { BLOGS_ERROR, BLOGS_LOADING, BLOGS_SUCCESS, GETBLOGCOMMENTS, GETSINGLEBLOG, LIKEBLOG, LIKECOMMENT, POSTCOMMENT, POSTCOMMENTLOAD, POSTCOMMENTLOADEND } from './blogs.types';

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

export const getBlogCommentsAPI = (id: string) => async (dispatch: Function) => {
    dispatch({ type: BLOGS_LOADING });
    try {
        let res = await axios.get(`${baseurl}/comments/${id}`);
        dispatch({ type: GETBLOGCOMMENTS, payload: { comments: res.data } })
        return res.data;
    }
    catch (e) {
        dispatch({ type: BLOGS_ERROR })
        return e;
    }
}

export const likeBlogAPI = (id: string, userId: string) => async (dispatch: Function) => {
    try {
        dispatch({ type: LIKEBLOG, payload: { userId } })
        let res = await axios.patch(`${baseurl}/blogs/like/${id}`, {
            userId
        });
        return res.data;
    }
    catch (e) {
        return e
    }
}

export const postCommentAPI = (author: string, blog: string, content: string) => async (dispatch: Function) => {
    dispatch({ type: POSTCOMMENTLOAD })
    try {
        let res = await axios.post(`${baseurl}/comments`, { blog, author, content });
        dispatch({ type: POSTCOMMENT, payload: { comment: res.data.comment } })
        return res.data
    }
    catch (e) {
        dispatch({ type: POSTCOMMENTLOADEND })
        return e;
    }
}

export const likeCommentAPI = (id: string, userId: string) => async (dispatch: Function) => {
    try {
        dispatch({ type: LIKECOMMENT, payload: { userId, id } })
        let res = await axios.patch(`${baseurl}/comments/like/${id}`, {
            userId
        });
        return res.data;
    }
    catch (e) {
        return e;
    }
}