import { createContext } from 'react';

import { IUserProfile } from '../models';

export interface IAuthContext {
  token: string | null;
  user?: IUserProfile;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export default createContext<IAuthContext>({
  token: null,
  user: undefined,
  isLoading: true,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
});