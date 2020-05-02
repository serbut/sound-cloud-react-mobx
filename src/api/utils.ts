import { CLIENT_ID } from '../config';
import { StorageKey } from '../enums';
import { RESOLVE_URL } from './index';

export const getToken = () =>
  localStorage.getItem(StorageKey.Token) || undefined;

export const resolve = (url: string) => RESOLVE_URL + url;

export const formatStreamUrl = (url: string) => `${url}?client_id=${CLIENT_ID}`;

export const getAuthParams = () => ({
  client_id: CLIENT_ID,
  oauth_token: getToken(),
});
