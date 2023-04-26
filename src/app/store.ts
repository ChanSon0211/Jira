import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import projectSlice from 'reducers/projectSlice';
import userSlice from 'reducers/userSlice';





export const store = configureStore({
  reducer: {
    user: userSlice,
    project: projectSlice,
  },

});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

