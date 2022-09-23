import axios from "axios"
import { LOGIN } from "./auth.type";

export const LOGINAPI = (creds)=>async(dispatch)=>{

        const res = await axios.post("https://reqres.in/api/login",(creds));
        dispatch({
            type:LOGIN,
            payload:res.data.token
        })
}