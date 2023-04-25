import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';

import userRequester from 'api/UserRequester';
import Login from 'pages/account/Login';
import {  LoginType, ProfileType, SignupType } from 'type/userType';



export interface UserSliceType {
 userProfile: ProfileType | null;
 userSignup: SignupType | null
  isLoading : boolean
}

const initialState: UserSliceType = {
  userProfile: null,
  userSignup:null,
  isLoading: false,
};

export const userLogin = createAsyncThunk(
  'user/login', 
  async( data:LoginType , thunkAPI)=>{
    const profileLogin = await userRequester.userLogin(data);
    console.log(profileLogin)
   return  profileLogin.data
  })




export const userSignup = createAsyncThunk(
  'user/signup',
 async (data:SignupType , thunkAPI)=>{
  const profileSignup = await userRequester.userSignup(data);

  console.log(profileSignup)
  return profileSignup.data
 })




export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userSignup.pending , (state , action)=>{
      state.isLoading = true;
    })
    builder.addCase(userLogin.pending , (state, action)=>{
      state.isLoading = true;
    })
    builder.addCase(userSignup.fulfilled , (state , action)=>{
      state.isLoading = false;
      state.userSignup = action.payload.content
      
    })
    builder.addCase(userLogin.fulfilled ,  (state,action)=>{
      state.isLoading= false;
      state.userProfile = action.payload.content
    })
    builder.addCase(userLogin.rejected , (state, action)=>{
      state.isLoading = true;
    })
   }
});

export const { } = userSlice.actions;
export default userSlice.reducer;
