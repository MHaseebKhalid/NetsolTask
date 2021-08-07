import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export const userToken = state => state.userToken.value;

export default userSlice.reducer