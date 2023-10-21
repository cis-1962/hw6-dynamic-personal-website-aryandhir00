import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../features/homeSlice'
import postSlice from '../features/postSlice'



export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    post: postSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch