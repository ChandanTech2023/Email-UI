import {configureStore} from "@reduxjs/toolkit"
import appReducer from "./appSlice"

//Create Global store 
const store = configureStore({
    //Create reducer Object
    reducer:{
        appSlice :appReducer

    }
});
export default store;
