import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../Models/user';

type SliceState = {
  user: User | null;
  isAuth: boolean;
};

const initialState: SliceState = { user: null };
