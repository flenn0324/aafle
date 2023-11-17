import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authToken = "2|bW3gEj7HYKVci7R5VvsxvDir2oQ8W5n0jqhRIEcr20608780";

const prescripteursApi = createApi({
  reducerPath: "prescripteurs",
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
      fetchPrescripteurs: builder.query({
        providesTags: ["Prescripteur"],
        query: () => {
          return {
            url: "/prescripteurs",
            params: {},
            method: "GET",
          };
        },
      }),
      addPrescripteur: builder.mutation({
        invalidatesTags: ["Prescripteur"],
        query: (prescripteur) => {
          return {
            url: "/prescripteurs",
            params: {},
            method: "POST",
            body: {
              type_utilisateur: prescripteur.type_utilisateur,
              civilite: prescripteur.civilite,
              denomenation: prescripteur.denomenation,
              nom: prescripteur.nom,
              prenom1: prescripteur.prenom1,
              prenom2: prescripteur.prenom2,
              prenom3: prescripteur.prenom3,
              phone: prescripteur.phone,
              fix: prescripteur.fix,
              fonction: prescripteur.fonction,
            },
          };
        },
      }),
      updatePrescripteur: builder.mutation({
        invalidatesTags: ["prescripteur"],
        query: (prescripteur) => ({
          url: `/prescripteurs/${prescripteur.id}`,
          method: "PATCH", 
          body: {
            type_utilisateur: prescripteur.type_utilisateur,
            civilite: prescripteur.civilite,
            denomination_sociale: prescripteur.denomination_sociale,
            nom: prescripteur.nom,
            prenom1: prescripteur.prenom1,
            prenom2: prescripteur.prenom2,
            prenom3: prescripteur.prenom3,
            phone: prescripteur.telephone,
            fix: prescripteur.fix,
            fonction: prescripteur.fonction,
          },
        }),
      }),
      removePrescripteur: builder.mutation({
        invalidatesTags: ["Prescripteur"],
        query: (prescripteur) => {
          return {
            url: `/prescripteurs/${prescripteur.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPrescripteursQuery,
  useAddPrescripteurMutation,
  useRemovePrescripteurMutation,
  useUpdatePrescripteurMutation,
} = prescripteursApi;
export { prescripteursApi };
