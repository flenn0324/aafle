import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authToken = '2|bW3gEj7HYKVci7R5VvsxvDir2oQ8W5n0jqhRIEcr20608780';
const prescripteursApi = createApi({

    reducerPath: 'prescripteurs',
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
            fetchPrescripteurs:builder.query({
                query:()=>{
                    return{
                        url:'/prescripteurs',
                        params:{},
                        method: 'GET',
                    };
                }
            })
        };
    }
});

export const {useFetchPrescripteursQuery} = prescripteursApi;
export {prescripteursApi};
