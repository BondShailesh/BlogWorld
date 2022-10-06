import { GET_BLOG, PATCH_BLOG, POST_BLOG } from "./blog.type";

const initState = {

}
export const blogReducer = (state=initState,{type,payload})=>{
    switch (type) {
        case POST_BLOG:{
            return{
                ...state,
                state:payload
            }
        }        
        case PATCH_BLOG:{
            return{
                ...state,
                state:payload
            }
        }        
        case GET_BLOG:{
            return{
                ...state,
                state:payload
            }
        }        
    
        default: return state            
    }
}