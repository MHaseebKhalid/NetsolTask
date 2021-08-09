import { createSlice,createAsyncThunk,getDefaultMiddleware  } from '@reduxjs/toolkit';
import axios from 'axios';
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
 });

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (token, thunkAPI) => {
    try{
      const response = await getPost(token)
    // console.log("TTTTTTOOOOOOKKEEEN",token)
    return response;
    }
    catch(err){
      return err;
    }
  }
)
const getPost=async (token)=>{
  // console.log("myTOken",token)
return await fetch(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${token}`)
         .then((response) => response.json()) 
         .then(async (res) => { 
           const dataVal=res.data
         
          let vals=[];
          dataVal.forEach(async (x) => {
             let data=await getPostByID(x.id,token);
           console.log("myTOken",data)

             vals.push(data);
          });
       
         return vals;

         
             }) 
         .catch((error) => { console.error(error); });
       

}

const getPostByID=async(id,token)=>{
return await fetch(`https://graph.instagram.com/${id}?fields=id,media_type,media_url,username,timestamp&access_token=${token}`)
       .then((response) => response.json()) 
         .then((res) => { 
             return res;
             }) 
         .catch((error) => { console.error(error); });
        
} 

const postSlice = createSlice({
name: "post",
initialState: {
post: null,
loading: false,
error:'',
},
reducers: {},
extraReducers:{
[fetchPosts.fulfilled]:(state,action) => {
      console.log('extra:::::',action.payload);
      state.post=action.payload;
      state.loading=false;
},
[fetchPosts.pending]:(state,action) => {
      console.log('extra:::::',action.payload);
     state.loading=true;
},
[fetchPosts.rejected]:(state,action) => {
     console.log('extra:::::',action.payload);
     state.loading=false;
     state.error=action.error;
},
}
});

export const { getPosts } = postSlice.actions; 
export default postSlice.reducer;