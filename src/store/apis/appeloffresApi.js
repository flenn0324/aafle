import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authToken = localStorage.getItem("accessToken");

const appeloffresApi = createApi({
  reducerPath: "appeloffres",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    prepareHeaders: (headers) => {
      // Include the token directly in the headers
      headers.set("Authorization", `Bearer ${authToken}`);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchAppeloffres: builder.query({
        providesTags: ["Appeloffre"],
        query: () => {
          return {
            url: "/appeloffres",
            params: {},
            method: "GET",
          };
        },
      }),
      updateAppeloffre: builder.mutation({
        invalidatesTags: ["Appeloffre"],
        query: (appeloffre) => ({
          url: `/appeloffres/${appeloffre.id}`,
          method: "PATCH", // Assuming your API supports PUT for updates, adjust accordingly
          body: {
            prescripteur_id : appeloffre.prescripteur_id,
            type: appeloffre.type,
            nombre_societes: appeloffre.nombre_societes,
            localisation: appeloffre.localisation,
            prestataire_actuel: appeloffre.prestataire_actuel,
            contacter_par: appeloffre.contacter_par,
            cahier_charge: appeloffre.cahier_charge,
            commentaire: appeloffre.commentaire,
          },
        }),
      }),
      removeAppeloffre: builder.mutation({
        invalidatesTags: ["Appeloffre"],
        query: (appeloffre) => {
          return {
            url: `/appeloffres/${appeloffre.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchAppeloffresQuery,
  useRemoveAppeloffreMutation,
  useUpdateAppeloffreMutation,
} = appeloffresApi;
export { appeloffresApi };
