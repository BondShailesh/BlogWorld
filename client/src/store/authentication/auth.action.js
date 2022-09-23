import axios from "axios"
import { SIGN_UP } from "./auth.type";

export const POST_API = (creds)=> async(dispatch)=>{
  try{
   const data = axios.post("http://localhost:8080/cred");
   dispatch({
    type:SIGN_UP,
    payload:(await data).data
   })
  }catch(e){
   return e.message
  }
}