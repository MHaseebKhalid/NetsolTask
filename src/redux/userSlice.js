import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: '',
// }

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//    setUser(){}
//   },
// })

// // Action creators are generated for each case reducer function
// export const {  } = userSlice.actions

// // export const userToken = state => state.userToken.value;

// export default userSlice.reducer

const userSlice = createSlice({
name: "user",
initialState: {
value: 0
},
reducers: {
setUser: (state,action) => {
state.value = action.payload;
console.log('redux:::::',action.payload);
},

}
});

export const { setUser} = userSlice.actions; 
export default userSlice.reducer;