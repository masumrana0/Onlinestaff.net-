/**
 * Title: 'Redux RTK query setup by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 08-11-2024
 *
 */

// import { axiosBaseQuery } from "@/helper/axios/axiosBaseQuery";
// import { getBaseUrl } from "@/helper/config/envConfig";
// import { createApi } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
//   endpoints: () => ({}),
//   tagTypes: ["user", "profile", "product", "auth"],
// });



import {
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store";

import { RootState } from "../store/store";
import { setUser } from "../features/auth/authSlice";
import { tags } from ".";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://onlinestaff-backend.vercel.app/api/v1/",
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    // add accessToken to headers for each request

    const token = (getState() as RootState).auth.token;
    console.log(token)
    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryFn,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    try {
      // if token access token has any issue get new accessToken
      //  using refresh token and set it to the local state
      const res = await fetch(
        `https://onlinestaff-backend.vercel.app/api/v1/auths/refresh-token`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data?.data?.accessToken) {
        const user = (api.getState() as RootState).auth.user;
        api.dispatch(
          setUser({
            user: user,
            token: data?.data?.accessToken,
          })
        );
        result = await baseQuery(args, api, extraOptions);
      } else {
        // api.dispatch(logout());
      }
    } catch (error) {
      console.log(error);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: tags,
});

