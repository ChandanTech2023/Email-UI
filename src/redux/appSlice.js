import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice" ,
    initialState:{
        open:false
    },
    reducers:{
        // multiple Actions 
        setsetOpen: (state , action)=>{
            state.open = action.payload;
        }
    }
});
export const {setsetOpen} = appSlice.actions;
export default appSlice.reducer;