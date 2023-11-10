import { configureStore } from "@reduxjs/toolkit";
import { prescripteursReducer } from "./slices/prescripteursSlice";

export const store = configureStore({
    reducer:{
        prescripteurs: prescripteursReducer
    }
});