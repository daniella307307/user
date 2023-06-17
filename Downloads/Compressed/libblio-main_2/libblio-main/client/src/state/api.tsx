import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  reducerPath: "api",
  tagTypes: ["User"],
  endpoints: (build: any) => ({
    getUser: build.query({
      query: () => "",
      provideTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = api;
