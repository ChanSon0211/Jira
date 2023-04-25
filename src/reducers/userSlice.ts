import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';

import userRequester from 'api/UserRequester';
import Login from 'pages/account/Login';
import { redirect } from 'react-router';
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
      const profileLogin = await userRequester.userLogin(data);


      const { status } = profileLogin

      if (status === 200) {

        localStorage.setItem("Token", profileLogin?.data?.content?.accessToken)

      }

      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Dang nhap thanh cong',
        showConfirmButton: false,
        timer: 1500
      });

      redirect('/project')

      return profileLogin.data?.content

    } catch (err) {

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Dang nhap that bai',
        showConfirmButton: false,
        timer: 1500
      });

    }

  })





export const userSignup = createAsyncThunk(
  'user/signup',
  async (data: SignupType, thunkAPI) => {
    const profileSignup = await userRequester.userSignup(data);

    return profileSignup.data
  })




export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
    })

    builder.addCase(userLogin.fulfilled, (state, {type, payload}) => {
      state.isLoading = false;
      state.userProfile = payload
    })
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
    });

  }
});

export const { } = userSlice.actions;
export default userSlice.reducer;
