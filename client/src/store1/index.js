import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux"
import { totoRedcer } from "./todoR/TodoRJson"
import thunk from "redux-thunk";
import { authReducer } from "./auth/AuthReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    todo:totoRedcer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = legacy_createStore(rootReducer, 
    createComposer(applyMiddleware(thunk)),   
    )