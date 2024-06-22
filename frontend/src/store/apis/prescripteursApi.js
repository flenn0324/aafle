import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authToken = localStorage.getItem("accessToken");

const prescripteursApi = createApi({
  reducerPath: "prescripteurs",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
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
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
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
              nom: prescripteur.nom,
              prenom1: prescripteur.prenom1,
              prenom2: prescripteur.prenom2,
              prenom3: prescripteur.prenom3,
              type_utilisateur: prescripteur.type_utilisateur,
              denomination_sociale: prescripteur.denomination_sociale,
              civilite: prescripteur.civilite,
              fonction: prescripteur.fonction,
              adresse: prescripteur.adresse,
              telephone: prescripteur.telephone,
              fix: prescripteur.fix,
            },
            headers: {
              Authorization: `Bearer ${prescripteur.token}`,
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
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }),
      }),
      removePrescripteur: builder.mutation({
        invalidatesTags: ["Prescripteur"],
        query: (prescripteur) => {
          return {
            url: `/prescripteurs/${prescripteur.id}`,
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
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
