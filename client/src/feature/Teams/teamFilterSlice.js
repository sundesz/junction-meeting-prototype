import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: '',
}

const teamFilterSlice = createSlice({
  name: 'teamFilter',
  initialState,
  reducers: {
    setTeamFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { setTeamFilter } = teamFilterSlice.actions

export default teamFilterSlice.reducer

// export const selectCurrentUser = (state: RootState) => ({
//   isAuthenticate: state.auth.isAuthenticated,
//   email: state.auth.email,
//   name: state.auth.name,
//   userId: state.auth.userId,
//   role: state.auth.role,
// });
