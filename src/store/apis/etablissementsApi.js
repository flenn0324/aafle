import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authToken = localStorage.getItem("accessToken");

const etablissementsApi = createApi({
  reducerPath: "etablissements",
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
      fetchEtablissements: builder.query({
        providesTags: ["Etablissement"],
        query: () => {
          return {
            url: "/etablisements",
            params: {},
            method: "GET",
          };
        },
      }),
      addEtablissement: builder.mutation({
        invalidatesTags: ["Etablissement"],
        query: (etablissement) => {
          return {
            url: "/etablisements",
            params: {},
            method: "POST",
            body: {
              modele: etablissement.modele,
              activite: etablissement.activite,
              societe_id: etablissement.societe_id,
              date_debut: etablissement.date_debut,
              adresse: etablissement.adresse,
              nom_commercial: etablissement.nom_commercial,
              enseigne: etablissement.enseigne,
            },
          };
        },
      }),
      updateEtablissement: builder.mutation({
        invalidatesTags: ["Etablissement"],
        query: (etablissement) => ({
          url: `/etablisements/${etablissement.id}`,
          method: "PATCH",
          body: {
            modele: etablissement.modele,
            activite: etablissement.activite,
            societe_id: etablissement.societe_id,
            date_debut: etablissement.date_debut,
            adresse: etablissement.adresse,
            nom_commercial: etablissement.nom_commercial,
            enseigne: etablissement.enseigne,
          },
        }),
      }),
      removeEtablissement: builder.mutation({
        invalidatesTags: ["Etablissement"],
        query: (etablissement) => {
          return {
            url: `/etablisements/${etablissement.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchEtablissementsQuery,
  useAddEtablissementMutation,
  useRemoveEtablissementMutation,
  useUpdateEtablissementMutation,
} = etablissementsApi;
export { etablissementsApi };
