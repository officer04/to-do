import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  password: '',
  openEye: true,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setEmail (state, action) {
      state.email = action.payload
    },
    setPassword (state, action) {
      state.password = action.payload
    },
    setOpenEye (state, action) {
      
    }
  },
})

export const { setEmail, setPassword } = dataSlice.actions

export default dataSlice.reducer