import { GET_USERS_SUCCESS, USERS_ERROR, USERS_LOADING } from "./users.types"

const initState: any = {
    loading: false,
    error: false,
    data: []
}

export const usersReducer = (state = initState, action: any) => {
    switch (action.type) {
        case USERS_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case USERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data
            }
        }
        default: {
            return state
        }
    }
}