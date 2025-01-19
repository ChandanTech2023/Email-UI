import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice" ,
    initialState:{
        open:false
    },
    reducers:{
        // multiple Actions 
        setOpen: (state , action)=>{
            state.open = action.payload;
        }
    }
});
export let {setOpen} = appSlice.actions;
export default appSlice.reducer;