import { STORE_SIGN_UP } from "./sighup.type"
import axios from "axios"

export const SIGNUP_DATA = (creds)=> async(dispatch)=>{
   try{
      await axios.post("https://whispering-garden-97359.herokuapp.com/creds", { ...creds })
      .then((res)=>{
         dispatch({
            type:STORE_SIGN_UP,
            payload:creds
           })
      })
   }catch(e){
      return e.send(e.message)
   }

}