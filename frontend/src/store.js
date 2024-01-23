import {createStore, combineReducers, applyMiddleware} from "redux";
import {configureStore} from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";



const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    //this will contain our reduces
})

const userInfoFromStorage = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")): null

const initialState ={
    userLogin:{userInfo: userInfoFromStorage}


}

const middleWare = [thunk];

const store= configureStore({
    reducer,
    preloadedState: initialState
   
   
})

export default store;

