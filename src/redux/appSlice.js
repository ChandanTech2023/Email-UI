import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice" ,
    initialState:{
        open:false ,
        emails :[],
        selectedEmail:null,
        searchText: "",
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
        state.selectedEmail = action.payload;
       },
       setSeacrhText:(state,action)=>{
        state.searchText = action.payload;
       }
    }
});
export let {setOpen , setEmails , setSelectedEmail, setSeacrhText} = appSlice.actions;
export default appSlice.reducer;