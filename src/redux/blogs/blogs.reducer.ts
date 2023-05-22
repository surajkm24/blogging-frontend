import { BLOGS_ERROR, BLOGS_LOADING, BLOGS_SUCCESS, GETBLOGCOMMENTS, GETSINGLEBLOG, LIKEBLOG, LIKECOMMENT, POSTCOMMENT, POSTCOMMENTLOAD, POSTCOMMENTLOADEND } from "./blogs.types"

const initState: any = {
    loading: false,
    error: false,
    data: [],
    singleBlog: {},
    comments: [],
    cLoading: false
}

export const blogsReducer = (state = initState, action: any) => {
    switch (action.type) {
        case BLOGS_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case BLOGS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case BLOGS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data
            }
        }
        case GETSINGLEBLOG: {
            return {
                ...state,
                loading: false,
                error: false,
                singleBlog: action.payload.blog
            }
        }
        case GETBLOGCOMMENTS: {
            return {
                ...state,
                loading: false,
                error: false,
                comments: action.payload.comments
            }
        }
        case LIKEBLOG: {
            let likes = state.singleBlog.likes ? [...state.singleBlog.likes] : [];
            if (likes.includes(action.payload.userId)) {
                likes = likes.filter(ele => ele.toString() !== action.payload.userId)
            }
            else {
                likes = [...likes, action.payload.userId];
            }
            let singleBlog = { ...state.singleBlog, likes }
            return {
                ...state,
                loading: false,
                error: false,
                singleBlog
            }
        }
        case LIKECOMMENT: {
            let [likedComment] = state.comments.filter((ele: any) => ele._id?.toString() === action.payload.id);
            let likes = likedComment.likes?[...likedComment.likes]:[]
            if (likes.includes(action.payload.userId)) {
                likes = likes.filter(ele => ele.toString() !== action.payload.userId)
            }
            else {
                likes = [...likes, action.payload.userId];
            }
            let comments = [...state.comments];
            comments = comments.map(ele=>{
                if(ele._id?.toString() === action.payload.id){
                    return {...ele,likes};
                }
                else {
                    return ele;
                }
            })
            return {
                ...state,
                loading: false,
                error: false,
                comments
            }
        }
        case POSTCOMMENTLOAD: {
            return {
                ...state,
                cLoading: true
            }
        }
        case POSTCOMMENT: {
            let comments = [...state.comments, action.payload.comment || {}]
            return {
                ...state,
                cLoading: false,
                error: false,
                comments
            }
        }
        case POSTCOMMENTLOADEND: {
            return {
                ...state,
                cLoading: false
            }
        }
        default: {
            return state;
        }
    }
}