import { configureStore } from "@reduxjs/toolkit";
import rootReducerFunction from "./features/add_elements/addElementSlice";




let store = configureStore({
    reducer:{
        rootReducer:rootReducerFunction
    },
});


export default store;