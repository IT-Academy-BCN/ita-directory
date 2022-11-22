// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/repos/IT-Academy-BCN/ita-directory',
    prepareHeaders: (headers) => {
      headers.set('content-type', 'application/json')
      headers.set('Authorization', `token ${import.meta.env.VITE_GITHUB_TOKEN}` || '')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getContributors: builder.query({
      query: (_) => '/contributors',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContributorsQuery } = githubApi
