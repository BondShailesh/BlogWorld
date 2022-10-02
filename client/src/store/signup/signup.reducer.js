import { STORE_SIGN_UP } from "./sighup.type"

const initState = {
}
export const signupReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case STORE_SIGN_UP: {
            return {
                ...state,
                state: payload
            }
        }
        default: return state

    }
}