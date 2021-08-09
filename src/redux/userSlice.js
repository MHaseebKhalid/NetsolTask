import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
name: "user",
initialState: {
value: ""
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