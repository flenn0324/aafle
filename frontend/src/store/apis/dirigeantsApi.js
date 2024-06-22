import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authToken = localStorage.getItem("accessToken");

const dirigeantsApi = createApi({
  reducerPath: "dirigeants",
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
      fetchDirigeants: builder.query({
        providesTags: ["Dirigeant"],
        query: () => {
          return {
            url: "/dirigeants",
            params: {},
            method: "GET",
          };
        },
      }),
      addDirigeant: builder.mutation({
        invalidatesTags: ["Dirigeant"],
        query: (dirigeant) => {
          return {
            url: "/dirigeants",
            params: {},
            method: "POST",
            body: {
              nom: dirigeant.nom,
              prenom: dirigeant.prenom,
              societe_id: dirigeant.societe_id,
              date_naissance: dirigeant.date_naissance,
              adresse: dirigeant.adresse,
              nationalite: dirigeant.nationalite,
              ville_naissance: dirigeant.ville_naissance,
              pays_naissance: dirigeant.pays_naissance,
              qualite: dirigeant.qualite,
              ancienne_qualite: dirigeant.ancienne_qualite,
              date_modification: dirigeant.date_modification,
              departement_naissance: dirigeant.departement_naissance,
            },
          };
        },
      }),
      updateDirigeant: builder.mutation({
        invalidatesTags: ["Dirigeant"],
        query: (dirigeant) => ({
          url: `/dirigeants/${dirigeant.id}`,
          method: "PATCH",
          body: {
            nom: dirigeant.nom,
            prenom: dirigeant.prenom,
            societe_id: dirigeant.societe_id,
            date_naissance: dirigeant.date_naissance,
            adresse: dirigeant.adresse,
            nationalite: dirigeant.nationalite,
            ville_naissance: dirigeant.ville_naissance,
            pays_naissance: dirigeant.pays_naissance,
            qualite: dirigeant.qualite,
            ancienne_qualite: dirigeant.ancienne_qualite,
            date_modification: dirigeant.date_modification,
            departement_naissance: dirigeant.departement_naissance,
          },
        }),
      }),
      removeDirigeant: builder.mutation({
        invalidatesTags: ["Dirigeant"],
        query: (dirigeant) => {
          return {
            url: `/dirigeants/${dirigeant.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchDirigeantsQuery,
  useAddDirigeantMutation,
  useRemoveDirigeantMutation,
  useUpdateDirigeantMutation,
} = dirigeantsApi;
export { dirigeantsApi };
