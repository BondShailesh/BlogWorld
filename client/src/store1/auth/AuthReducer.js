import { LOGIN, LOGOUT } from "./auth.type";

const token = localStorage.getItem("token")
const initState = {
    auth:!!token,
    token:token
}
export const authReducer = (state=initState,{type,payload})=>{
    switch (type) {
        case LOGIN:{           
            localStorage.setItem("token",payload)
            return {
                ...state,
                auth:true,
                token:payload
            }
        }
        case LOGOUT:{
            localStorage.removeItem("token")
            return {
                ...state,
                auth:false,
                token:""
            }
        }
                
        default:
            return state
    }
}