import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../redux/feature/TodoSlice'
import { baseApi } from './api/api'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todos:todoReducer
  },
  middleware: (getDefaultMiddlewares) => 
    getDefaultMiddlewares().concat(baseApi.middleware),
})

