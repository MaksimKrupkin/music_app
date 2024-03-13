import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../Models/user';

type SliceState = {
  user: User | null;
  isAuth: boolean;
};

const initialState: SliceState = {
  user: JSON.parse(localStorage.getItem('user')),
  isAuth: user === null ? false : true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {},
    // logoutUser(state, action){

    // }
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
