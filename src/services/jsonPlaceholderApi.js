import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
    reducerPath: "jsonPlaceholderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com/",
    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "users",
        }),
        getUserById: builder.query({
            query: (id) => `users/${id}`,
        }),
    }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = jsonPlaceholderApi;
