import { CLIENT_ID, TOKEN_KEY } from '../config';
import { RESOLVE_URL } from './index';

export const getToken = () => localStorage.getItem(TOKEN_KEY) || undefined;

export const resolve = (url: string) => RESOLVE_URL + url;

export const formatStreamUrl = (url: string) => `${url}?client_id=${CLIENT_ID}`;

export const getAuthParams = () => ({
  client_id: CLIENT_ID,
  oauth_token: getToken(),
});
