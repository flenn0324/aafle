import { createSlice } from "@reduxjs/toolkit";

const prescripteursSlice = createSlice({
    name : 'prescripteurs',
    initialState : {
        data: [],
    },
    reducers:{},
});

export const prescripteursReducer = prescripteursSlice.reducer;