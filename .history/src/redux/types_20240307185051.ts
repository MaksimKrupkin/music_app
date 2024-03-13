import { User } from './Models/user';

export interface RootState {
  user: {
    user: User | null;
    isAuth: boolean;
  };
}
