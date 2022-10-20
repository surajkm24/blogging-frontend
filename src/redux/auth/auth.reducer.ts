import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS, AUTH_SIGNUP_SUCCESS, AUTH_REFRESHTOKEN, AUTH_UPDATEUSERDATA, AUTH_LOGOUT, AUTH_LOGINSUCCESS } from "./auth.types";

type auth = {
    primaryToken: String;
    refreshToken: String;
    loading: boolean;
    error: boolean;
    data: {}
}

const initState: auth = {
    primaryToken: localStorage.getItem('mediumPrimaryToken') || '',
    refreshToken: localStorage.getItem('mediumRefreshToken') || '',
    loading: false,
    error: false,
    data: {}
}

export const authReducer = (state = initState, action: any) => {
    switch (action.type) {
        case AUTH_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case AUTH_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case AUTH_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false
            }
        }
        case AUTH_SIGNUP_SUCCESS: {
            localStorage.setItem('mediumPrimaryToken', action.payload.primaryToken);
            localStorage.setItem('mediumRefreshToken', action.payload.refreshToken)
            return {
                ...state,
                loading: false,
                error: false,
                primaryToken: action.payload.primaryToken,
                refreshToken: action.payload.refreshToken,
                data: action.payload.user
            }
        }
        case AUTH_UPDATEUSERDATA: {
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }
        }
        case AUTH_REFRESHTOKEN: {
            localStorage.setItem('mediumPrimaryToken', action.payload);
            // console.log(localStorage.getItem('mediumPrimaryToken'),4,action.payload,'payload')
            return {
                ...state,
                loading: false,
                error: false,
                primaryToken: action.payload,
            }
        }
        case AUTH_LOGINSUCCESS: {
            localStorage.setItem('mediumPrimaryToken', action.payload.primaryToken);
            localStorage.setItem('mediumRefreshToken', action.payload.refreshToken)
            return {
                ...state,
                loading: false,
                error: false,
                primaryToken: action.payload.primaryToken,
                refreshToken: action.payload.refreshToken,
                data: action.payload.user
            }
        }
        case AUTH_LOGOUT: {
            localStorage.removeItem('mediumPrimaryToken');
            localStorage.removeItem('mediumRefreshToken');
            return {
                ...state,
                loading: false,
                error: false,
                primaryToken: "",
                refreshToken: "",
                data: {}
            }
        }
        default: {
            return state
        }
    }
}