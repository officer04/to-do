import { configureStore } from '@reduxjs/toolkit'
import data from './../redux/slices/dataSlice'

export const store = configureStore({
  reducer: {data},
})