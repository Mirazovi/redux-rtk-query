import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../redux/feature/TodoSlice'

export const store = configureStore({
  reducer: {
    todos:todoReducer
  },
})

