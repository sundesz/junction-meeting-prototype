import { apiSlice } from '../../app/api/apiSlice'

export const membersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMembers: builder.query({
      query: () => '/members',
      providesTags: ['Members'],
    }),

    getMemberById: builder.query({
      query: (memberId) => ({
        url: `/members/${memberId}`,
      }),
    }),
  }),
})

export const { useGetAllMembersQuery, useGetMemberByIdQuery } = membersApiSlice
