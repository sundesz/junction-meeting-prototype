import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = '/api/v1'
// const BASE_URL = 'http://localhost:8080/api/v1'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Teams', 'Members'],
  endpoints: (builder) => ({}),
})
