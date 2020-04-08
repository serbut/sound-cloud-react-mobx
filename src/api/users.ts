import SC from 'soundcloud';
import { User } from '../models/user';
import { UserWebProfile } from '../models/user-web-profile';
import { getWithClientID, resolve } from './index';

export const loadUser = (user: string) =>
  getWithClientID<User>(resolve(`/${user}`));

export const loadUserWebProfiles = (userId: number) =>
  SC.get<UserWebProfile[]>(`/users/${userId}/web-profiles`);

export const getMe = () => SC.get<User>('/me');
