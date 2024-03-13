import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../Models/user';

type SliceState = {
  user: User | null;
  isAuth: boolean;
};

const user = JSON.parse(localStorage.getItem('user'));

const initialState: SliceState = {
  user: user,
  isAuth: user === null ? false : true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
    logoutUser(state, action) {
      localStorage.removeItem('user'), (state.isAuth = false);
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
