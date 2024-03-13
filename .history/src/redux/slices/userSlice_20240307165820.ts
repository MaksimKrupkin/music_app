import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../Models/user';

type SliceState = {
  user: User | null;
  isAuth: boolean;
};

const user = JSON.parse(localStorage.getItem('user'));

const initialState: SliceState = {
  user: null,
  isAuth: user === null ? false : true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload; // Обновление данных пользователя
      state.isAuth = true; // Установка флага аутентификации в true
    },
    // logoutUser(state, action){

    // }
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
