import axios from 'axios';
import qs from 'qs';
import SC from 'soundcloud';
import { CLIENT_ID, REDIRECT_URI } from '../config';
import { Collection, StatusResponse } from '../models/api';
import { Comment } from '../models/comment';
import { User } from '../models/user';
import { endpoints } from './endpoints';
import { getAuthParams, getToken } from './utils';

SC.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  oauth_token: getToken(),
});

export * from './endpoints';

export const API_URL = 'https://api.soundcloud.com';
export const PAGE_SIZE = 50;
export const RESOLVE_URL = '/resolve?url=http://soundcloud.com';

let _nextHref: string | undefined; // TODO: remove this

export const getNextHref = () => _nextHref; // TODO: remove this

export const login = () => SC.connect().then(({ oauth_token }) => oauth_token);

export const load = <T>(href: string, params: any = {}) => {
  href = href.replace(`${API_URL}`, '');

  if (href.startsWith('/')) {
    href = href.slice(1);
  }

  const [hrefWithoutQueryString, queryString] = href.split('?');

  href = hrefWithoutQueryString;

  const paramsFromHref = qs.parse(queryString);
  const authParams = getAuthParams();

  return axios
    .get<T>(`${API_URL}/${href}`, {
      params: {
        ...paramsFromHref,
        ...authParams,
        ...params,
      },
    })
    .then(({ data }) => {
      if ((data as any).next_href) {
        _nextHref = (data as any).next_href;
      }

      return data;
    });
};
export const getMyFollowingsIds = () =>
  load<Collection<User>>(endpoints.myFollowings, {
    limit: 5000,
    linked_partitioning: 1,
  }).then((data) => data.collection.map((el) => el.id));

export const getMyLikesIds = () =>
  load<Collection<number>>(endpoints.myLikesIds, {
    limit: 5000,
    linked_partitioning: 1,
  }).then((data) => data.collection);

export const addComment = (
  trackId: number,
  body: string,
  timestamp: number | null
) =>
  SC.post<Comment>(endpoints.addComment(trackId), {
    comment: { body, timestamp },
  });

export const removeComment = (trackId: number, commentId: number) =>
  SC.delete<StatusResponse>(endpoints.removeComment(trackId, commentId));

export const followUser = (userId: number) =>
  SC.put<User>(endpoints.follow(userId));

export const stopFollowingUser = (userId: number) =>
  SC.delete<StatusResponse>(endpoints.follow(userId));

export const addLike = (trackId: number) =>
  SC.put<StatusResponse>(endpoints.like(trackId));

export const removeLike = (trackId: number) =>
  SC.delete<StatusResponse>(endpoints.like(trackId));
