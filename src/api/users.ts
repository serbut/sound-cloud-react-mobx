import SC from 'soundcloud';
import { User } from '../models/user';
import { UserWebProfile } from '../models/user-web-profile';
import { getWithClientID, resolve } from './index';

export const loadUser = (user: string) =>
  getWithClientID<User>(resolve(`/${user}`));

export const loadUserWebProfiles = (
  userId: number
): Promise<UserWebProfile[]> => SC.get(`/users/${userId}/web-profiles`);
