import { AUTH_ERROR, AUTH_LOADING } from "../auth/auth.types"
import { BLOGS_ERROR, BLOGS_LOADING, BLOGS_SUCCESS, GETSINGLEBLOG } from "./blogs.types"

const initState: any = {
    loading: false,
    error: false,
    data: [],
    singleBlog: {}
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
        default: {
            return state;
        }
    }
}