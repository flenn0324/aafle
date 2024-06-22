import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authToken = localStorage.getItem("accessToken");

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
  }),
  endpoints(builder) {
    return {
        loginUser:builder.mutation({
        query: (datalogin) => {
          return {
            url: "/login",
            params: {},
            method: "POST",
            body: {
              email: datalogin.email,
              password: datalogin.password,
            },
          };
        },
      }),
      registerUser:builder.mutation({
        query: (dataregister) => {
          return {
            url: "/register",
            params: {},
            method: "POST",
            body: {
              name:dataregister.name,
              email: dataregister.email,
              password: dataregister.password,
              password_confirmation:dataregister.password_confirmation,
            },
          };
        },
      }),
      logoutUser:builder.mutation({
        query: () => {
          return {
            url: "/logout",
            params: {},
            method: "POST",
            body: {
            },
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
  useLoginUserMutation,useLogoutUserMutation,useRegisterUserMutation
} = authApi;
export { authApi };
