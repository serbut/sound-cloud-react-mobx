import SC from 'soundcloud';
import { Collection, StatusResponse } from '../models/api';
import { User } from '../models/user';

export const getMyFollowingsIds = () =>
  SC.get<Collection<User>>('me/followings', {
    limit: 5000,
    linked_partitioning: 1,
  }).then((data) => data.collection.map((el) => el.id));

export const followUser = (userId: number) =>
  SC.put<User>(`/me/followings/${userId}`);

export const stopFollowingUser = (userId: number) =>
  SC.delete<StatusResponse>(`/me/followings/${userId}`);

export const getUserFollowingsUrl = (userId: number) =>
  `/users/${userId}/followings`;
