import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authToken = localStorage.getItem("accessToken");

const societesApi = createApi({

    reducerPath: 'societes',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:8000/api',
        prepareHeaders: (headers) => {
            // Include the token directly in the headers
            headers.set('Authorization', `Bearer ${authToken}`);
            return headers;
        },
    }),
    endpoints(builder) {
        return{
            fetchSocietes:builder.query({
                providesTags:['Societe'],
                query:()=>{
                    return{
                        url:'/societes',
                        params:{},
                        method: 'GET',
                    };
                }
            }),
            addSociete:builder.mutation({
                invalidatesTags:['Societe'],
                query:(societe)=>{
                    return{
                        url:'/societes',
                        params:{},
                        method: 'POST',
                        body:{
                            siren:societe.siren,
                            greffe: societe.greffe,
                            forme_sociale: societe.forme_sociale,
                            denomination: societe.denomination,
                            objet_sociale: societe.objet_sociale,
                            date: societe.date,
                            duree: societe.duree,
                            capital_social: societe.capital_social,
                            exercice_social: societe.exercice_social,
                            sigle: societe.sigle,
                            adresse: societe.adresse,
                        }
                    };
                }
            }),
            updateSociete: builder.mutation({
                invalidatesTags: ['Societe'],
                query: (societe) => ({
                  url: `/societes/${societe.id}`,
                  method: 'PATCH', // Assuming your API supports PUT for updates, adjust accordingly
                  body: {
                    siren: societe.siren,
                    greffe: societe.greffe,
                    forme_sociale: societe.forme_sociale,
                    denomination: societe.denomination,
                    objet_sociale: societe.objet_sociale,
                    date: societe.date,
                    duree: societe.duree,
                    capital_social: societe.capital_social,
                    exercice_social: societe.exercice_social,
                    sigle: societe.sigle,
                    adresse: societe.adresse,
                  },
                }),
              }),
            removeSociete: builder.mutation({
                invalidatesTags:['Societe'],
                query:(societe)=>{
                    return {
                        url:`/societes/${societe.id}`,
                        method:'DELETE'
                    };
                }
            })
        };
    }
});

export const {useFetchSocietesQuery,useAddSocieteMutation,useRemoveSocieteMutation,useUpdateSocieteMutation} = societesApi;
export {societesApi};
