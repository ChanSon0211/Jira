import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';

import userRequester from 'api/UserRequester';
import Login from 'pages/account/Login';
import Swal from 'sweetalert2';
import { LoginType, ProfileType, SignupType } from 'type/userType';



export interface UserSliceType {
  userProfile: ProfileType | null;
  userSignup: SignupType | null
  isLoading: boolean
}

const initialState: UserSliceType = {
  userProfile: null,
  userSignup: null,
  isLoading: false,
};

export const userLogin = createAsyncThunk(
  'user/login',
  async (data: LoginType, thunkAPI) => {
    try {
      // call api
      const profileLogin = await userRequester.userLogin(data);

      // check dieu kien 
      const { status } = profileLogin
      if (status === 200) {
        // luu localstorage
        localStorage.setItem("Token", profileLogin.data.content.accessToken)


      }

      // alert thanh cong
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sign in Success',
        showConfirmButton: false,
        timer: 1500
      })
      return profileLogin.data?.content
    } catch (err) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Sign in Error',
        showConfirmButton: false,
        timer: 1500
      })
    }

  })




export const userSignup = createAsyncThunk(
  'user/signup',
  async (data: SignupType, thunkAPI) => {
    try {
      const profileSignup = await userRequester.userSignup(data);
      const { status } = profileSignup;
      if (status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sign up success',
          showConfirmButton: false,
          timer: 1500
        })
      }
      return profileSignup
    } catch (err) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Sign in Error',
        showConfirmButton: false,
        timer: 1500
      })
    }

  })




export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
    })

    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userProfile = action.payload

    })
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = true;
    })
  }
});

export const { } = userSlice.actions;
export default userSlice.reducer;
