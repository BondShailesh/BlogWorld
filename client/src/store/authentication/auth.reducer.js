import { useState } from "react";
import { AUTHENTICATION, LOG_IN, LOG_OUT, SIGN_UP } from "./auth.type";

const token = localStorage.getItem("token")
const initAuth = {
    auth: !!token,
    token: token
}
export const authReducer = (state = initAuth, { type, payload }) => {
    switch (type) {
        case SIGN_UP: {
            if(payload.tempToken){
                localStorage.setItem("token", JSON.stringify(payload))
            }           
            return {
                ...state,
                auth: true,
                token: payload
            }
        }
        case LOG_IN: {
            localStorage.removeItem("token")
            return {
                ...state,
                auth: true,
                token: payload
            }
        }

        case LOG_OUT: {
            localStorage.setItem("token", payload)
            return {
                ...state,
                auth: false,
                token: ""
            }
        }

        case AUTHENTICATION: {
            return {
                ...state,
                auth: payload
            }
        }

        default: return state
    }
}