import { apiSlice } from '../../app/api/apiSlice'

export const teamsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeams: builder.query({
      query: () => '/teams',
      providesTags: ['Teams'],
    }),

    getTeamById: builder.query({
      query: (teamId) => ({
        url: `/teams/${teamId}`,
      }),
    }),
  }),
})

export const { useGetAllTeamsQuery, useGetTeamByIdQuery } = teamsApiSlice
