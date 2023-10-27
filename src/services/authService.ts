import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./api";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import ApiSlugs from "../utils/dataTypes/ApiSlugs";

export const authService = createApi({
  reducerPath: "auth",
  baseQuery: baseQuery,
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: ApiSlugs.LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: ApiSlugs.REGISTER,
        method: "POST",
        body: data,
      }),
    })
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation
} = authService;