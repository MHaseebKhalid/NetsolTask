import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (token, thunkAPI) => {
    const response = await getPost(token)
    console.log("TTTTTTOOOOOOKKEEEN",token)
    return response
  }
)
const getPost=async (token)=>{
   await fetch(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${token}`)
         .then((response) => response.json()) 
         .then(async (res) => { 
            //  console.log(res.data)  
            const dataVal=res.data
             if (dataVal) {
                 dataVal.map(async x => {
               let data=await getPostByID(x.id,token)
              console.log('---------',data)
             });
             }
             }) 
         .catch((error) => { console.error(error); });
}

const getPostByID=async(id,token)=>{
let post = await fetch(`https://graph.instagram.com/${id}?fields=id,media_type,media_url,username,timestamp&access_token=${token}`)
       .then((response) => response.json()) 
         .then((res) => { 
             return res;
             }) 
         .catch((error) => { console.error(error); });

         return post;
} 

const postSlice = createSlice({
name: "post",
initialState: {
post: null,
loading: false,
error:'',
},
reducers: {

},
extraReducers:{
[fetchPosts.fullfilled]:(state,action) => {
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