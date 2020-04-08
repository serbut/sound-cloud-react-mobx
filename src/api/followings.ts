import SC from 'soundcloud';
import { StatusResponse } from '../models/api';
import { User } from '../models/user';

export const getMyFollowingsIds = (): Promise<number[]> =>
  SC.get('me/followings', {
    limit: 5000,
    linked_partitioning: 1,
  }).then((data: any) => data.collection.map((el: any) => el.id));

export const followUser = (userId: number): Promise<User> =>
  SC.put(`/me/followings/${userId}`);

export const stopFollowingUser = (userId: number): Promise<StatusResponse> =>
  SC.delete(`/me/followings/${userId}`);

export const getUserFollowingsUrl = (userId: number) =>
  `/users/${userId}/followings`;
