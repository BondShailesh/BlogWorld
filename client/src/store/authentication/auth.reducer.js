import { LOG_IN, LOG_OUT, SIGN_UP } from "./auth.type";

const initAuth = {
    auth: false,
    token: ""
}
export const authReducer = (state = initAuth, { type, payload }) => {
    switch (type) {
        case SIGN_UP: {
            return {
                ...state,
                auth: true,
                token: payload
            }
        }
        case LOG_IN: {
            return {
                ...state,
                auth: true,
                token: payload
            }
        }

        case LOG_OUT: {
            return {
                ...state,
                auth: false,
                token: ""
            }
        }

        default: return state
    }
}