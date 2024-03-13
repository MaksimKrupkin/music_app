import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../Models/user';

type SliceState = {
  user: User | null;
  isAuth: boolean;
};

const initialState: SliceState = { user: null, isAuth: false };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {

    }
    logoutUser(state, action){

    }
  }
});

export const {loginUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;
