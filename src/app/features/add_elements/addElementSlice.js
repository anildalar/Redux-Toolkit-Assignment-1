import { createSlice } from "@reduxjs/toolkit";

let addElementSlice = createSlice({
    name:'anil_assignment',
    initialState:{
        value:[]
    },
    reducers:{
        aFunction:(state,action)=>{
            //console.log(state);
            console.log(action);
            //state.value = [...(state.value),action.payload]; 
            state.value.push(action.payload); 
           
        }
    }
});


//destructuring
export const { aFunction } = addElementSlice.actions;


export default addElementSlice.reducer;


