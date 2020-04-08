import axios from 'axios';
import SC from 'soundcloud';
import { StatusResponse } from '../models/api';
import { BASE_URL, getToken } from './index';

export const getMyLikesIds = (): Promise<number[]> =>
  axios
    .get(`${BASE_URL}/e1/me/track_likes/ids`, {
      params: {
        limit: 5000,
        linked_partitioning: 1,
        oauth_token: getToken(),
      },
    })
    .then(({ data }) => data.collection);

export const addLike = (trackId: number) =>
  SC.put<StatusResponse>(`/me/favorites/${trackId}`);

export const removeLike = (trackId: number) =>
  SC.delete<StatusResponse>(`/me/favorites/${trackId}`);

export const getUserLikesUrl = (userId: number) => `/users/${userId}/favorites`;
