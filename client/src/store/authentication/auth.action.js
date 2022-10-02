import axios from "axios"
import { SIGN_UP } from "./auth.type";

export const POST_API = (creds) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/creds", { ...creds })
      .then((res) => {
        dispatch({
          type: SIGN_UP,
          payload: (res.data)         
        })
      })
  } catch (e) {
    return e.message
  }
 
}

export const CHECK_TOKEN = (creds) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/creds", { ...creds })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: SIGN_UP,
          payload: (res.data)         
        })
       
      })
  } catch (e) {
    return e.message
  }
}