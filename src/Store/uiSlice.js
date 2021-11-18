import { createSlice } from "@reduxjs/toolkit";


const PageUiSlice = createSlice({
    name:"PageUi",
    initialState: {
        Name:"",
        ComponentNumber: 0,
    },
    reducers: {
        changeName(state,action){
            console.log(action.payload.Name);
            state.Name = action.payload.Name;
        },
        changeComponentNumber(state,action){
            console.log(action.payload.Profile);
            if(action.payload.ComponentNumber > 0){
            state.ComponentNumber = action.payload.ComponentNumber;
            }
        },
    },
});


export const PageUiActions = PageUiSlice.actions;

export default PageUiSlice;