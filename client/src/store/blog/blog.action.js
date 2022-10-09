import axios from "axios"
import { GET_BLOG, PATCH_BLOG} from "./blog.type"

export const GET_BLOG_API = () => async (dispatch) => {
   try {
      await axios.get(`http://18.183.244.241:3001/blogs/6337324e6211402fc69ac8c0`)
         .then((res) => {
            dispatch({
               type: GET_BLOG,
               payload: (res.data[0])
            })
         })        
   } catch (e) {
      return e.message
   }
}

export const PATCH_BLOG_API = (creds) => async (dispatch) => {
   try {
      let {id} = creds
      if(creds.love){
         await axios.patch(`http://18.183.244.241:3001/blogs/${id}`, {love:creds.love})
      }else if(creds.followers){
         await axios.patch(`http://18.183.244.241:3001/blogs/${id}`, {followers:creds.followers})
      }else{
         await axios.patch(`http://18.183.244.241:3001/blogs/${id}`, {comments:creds.comments})
      }
      
      await axios.get(`http://18.183.244.241:3001/blogs/${id}`)
      .then((res) => {
         dispatch({
            type: GET_BLOG,
            payload: (res.data[0])
         })
      })
   } catch (e) {
      return e.message
   }
}
