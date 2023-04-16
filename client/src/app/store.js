import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import teamFilterReducer from '../feature/Teams/teamFilterSlice'

export const store = configureStore({
  reducer: {
    teamFilter: teamFilterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  // devTools: process.node.NODE_ENV === dev,
})
