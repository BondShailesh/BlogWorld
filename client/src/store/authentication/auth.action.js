import axios from "axios"
import { LOG_IN, SIGN_UP } from "./auth.type";

export const POST_API = (creds) => async (dispatch) => {
  try {
    await axios.post("http://18.183.244.241:3001/creds", { ...creds })
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

export const POST_LOGIN_API = (creds) => async (dispatch) => {
  try {
    await axios.post("http://18.183.244.241:3001/creds/login", { ...creds })
      .then((res) => {
        dispatch({
          type: LOG_IN,
          payload: (res.data)         
        })
      })
  } catch (e) {
    return e.message
  }
 
}

export const CHECK_TOKEN = (creds) => async (dispatch) => {
  try {
    await axios.post("http://18.183.244.241:3001/creds", { ...creds })
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