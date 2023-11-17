import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {prescripteursApi} from "./apis/prescripteursApi";
import {societesApi} from "./apis/societesApi";

import { prescripteursReducer } from "./slices/prescripteursSlice";


export const store = configureStore({
    reducer:{
        prescripteurs: prescripteursReducer,
        [prescripteursApi.reducerPath] : prescripteursApi.reducer,
        [societesApi.reducerPath] : societesApi.reducer
    }, 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(societesApi.middleware).concat(prescripteursApi.middleware);
    } 
});

setupListeners(store.dispatch);

export {useFetchPrescripteursQuery,useAddPrescripteurMutation,useRemovePrescripteurMutation,useUpdatePrescripteurMutation} from './apis/prescripteursApi';
export {useFetchSocietesQuery,useAddSocieteMutation,useRemoveSocieteMutation,useUpdateSocieteMutation} from './apis/societesApi';