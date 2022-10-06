import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./authentication/auth.reducer";
import { blogReducer } from "./blog/blog.reducer";
import { signupReducer } from "./signup/signup.reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    signup:signupReducer,
    blog:blogReducer
})
export const  store = legacy_createStore(rootReducer,applyMiddleware(thunk))