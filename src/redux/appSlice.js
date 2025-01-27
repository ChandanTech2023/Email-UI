import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice" ,
    initialState:{
        open:false ,
        emails :[],
        selectedEmail:null
    },
    reducers:{
        // multiple Actions 
        setOpen: (state , action)=>{
            state.open = action.payload;
        },
       setEmails :(state ,action)=>{
        state.emails = action.payload;
       },
       setSelectedEmail:(state, action)=>{
        state.emails = action.payload;
       }
    }
});
export let {setOpen , setEmails , setSelectedEmail} = appSlice.actions;
export default appSlice.reducer;