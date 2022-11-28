// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
    prepareHeaders: (headers) => {
      headers.set('content-type', 'application/json')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getContributors: builder.query({
      query: () => '/repos/IT-Academy-BCN/ita-directory/contributors',
    }),
    getUser: builder.query({
      query: (user) => `/users/${user}`,
    }),
  }),
})

export const { useGetContributorsQuery, useGetUserQuery } = githubApi
