import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  import { authService } from "./authService";
  import { logout,login } from "../store/slices/authSlice";
import ApiSlugs from "../utils/dataTypes/ApiSlugs";
  
  const query = fetchBaseQuery({
    baseUrl: "/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any)?.auth?.token;
      token && headers.set("authorization", `Bearer ${token}`);
  
      return headers;
    },
  });
  
  const baseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    let result = await query(args, api, extraOptions);
    if (result.error && (result.error as any)?.originalStatus === 401) {
      // try to get a new token
  
      const refreshResult = await query(
        ApiSlugs.REFRESH_TOKEN,
        api,
        extraOptions
      );
      if (refreshResult.data) {
        // store the new token
        api.dispatch(login((refreshResult.data as any)?.data));
        // retry the initial query
        result = await query(args, api, extraOptions);
      } 
      
      if(refreshResult.error) {
        api.dispatch(logout());
        api.dispatch(authService.util.resetApiState());
      }
    }
  
    if (result.error && result.error.status === 500) {
      api.dispatch(authService.util.resetApiState());
    }
  
    return result;
  };
  
  export default baseQuery;