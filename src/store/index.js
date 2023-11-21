import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {prescripteursApi} from "./apis/prescripteursApi";
import {societesApi} from "./apis/societesApi";
import {dirigeantsApi} from "./apis/dirigeantsApi";
import { etablissementsApi } from "./apis/etablissementsApi";
import { appeloffresApi } from "./apis/appeloffresApi";


import { prescripteursReducer } from "./slices/prescripteursSlice";


export const store = configureStore({
    reducer:{
        prescripteurs: prescripteursReducer,
        [prescripteursApi.reducerPath] : prescripteursApi.reducer,
        [societesApi.reducerPath] : societesApi.reducer,
        [dirigeantsApi.reducerPath] : dirigeantsApi.reducer,
        [etablissementsApi.reducerPath] : etablissementsApi.reducer,
        [appeloffresApi.reducerPath] : appeloffresApi.reducer
    }, 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(societesApi.middleware)
        .concat(prescripteursApi.middleware)
        .concat(dirigeantsApi.middleware)
        .concat(etablissementsApi.middleware)
        .concat(appeloffresApi.middleware);
    } 
});

setupListeners(store.dispatch);

export {useFetchPrescripteursQuery,useAddPrescripteurMutation,useRemovePrescripteurMutation,useUpdatePrescripteurMutation} from './apis/prescripteursApi';
export {useFetchSocietesQuery,useAddSocieteMutation,useRemoveSocieteMutation,useUpdateSocieteMutation} from './apis/societesApi';
export {useFetchDirigeantsQuery,useAddDirigeantMutation,useRemoveDirigeantMutation,useUpdateDirigeantMutation} from './apis/dirigeantsApi';
export {useFetchAppeloffresQuery,useRemoveAppeloffreMutation,useUpdateAppeloffreMutation} from './apis/appeloffresApi';
export  {
    useFetchEtablissementsQuery,
    useAddEtablissementMutation,
    useRemoveEtablissementMutation,
    useUpdateEtablissementMutation,
  } from './apis/etablissementsApi';