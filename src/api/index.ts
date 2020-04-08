import axios from 'axios';
import SC from 'soundcloud';
import { CLIENT_ID, REDIRECT_URI, TOKEN_KEY } from '../config';

export const BASE_URL = '//api.soundcloud.com';
export const PAGE_SIZE = 50;
export const RESOLVE_URL = '/resolve?url=http://soundcloud.com';
export const getToken = () => localStorage.getItem(TOKEN_KEY) || undefined;
export const resolve = (url: string) => RESOLVE_URL + url;
export const formatStreamUrl = (url: string) => `${url}?client_id=${CLIENT_ID}`;

export const getWithClientID = <T>(url: string, params: Object = {}) =>
  axios
    .get(BASE_URL + url, {
      params: {
        client_id: CLIENT_ID,
        ...params,
      },
    })
    .then(({ data }: { data: T }) => data);

export * from './collections';
export * from './tracks';
export * from './users';
export * from './likes';
export * from './comments';
export * from './followings';
export * from './playlists';
export * from './search';
export * from './stream';
export * from './auth';

SC.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  oauth_token: getToken(),
});
