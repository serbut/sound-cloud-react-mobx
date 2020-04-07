import axios from 'axios';
import SC from 'soundcloud';

import { CLIENT_ID, REDIRECT_URI, TOKEN_KEY } from './config';
import { CollectionItemType } from './enums';
import { Playlist } from './models/playlist';
import { Track } from './models/track';
import { User } from './models/user';
import { UserWebProfile } from './models/user-web-profile';

export interface CollectionItem {
  origin: Track | Playlist | null;
  tags: null;
  created_at: string;
  type: CollectionItemType;
}

export interface Collection<T> {
  collection: T[];
  next_href?: string;
  future_href?: string;
}

export interface StatusResponse {
  status: string;
}

export interface Error {
  error_message: string;
}

export interface ErrorResponse {
  errors: Error[];
}

const getToken = () => localStorage.getItem(TOKEN_KEY);
const BASE_URL = '//api.soundcloud.com';
const RESOLVE_URL = '/resolve?url=http://soundcloud.com';
const PAGE_SIZE = 50;
let nextHref: string | null = null; // TODO: remove this

SC.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  oauth_token: getToken(),
});

export const getNextHref = () => nextHref; // TODO: remove this

const resolve = (url: string) => RESOLVE_URL + url;

const getWithClientID = (url: string, params = {}) =>
  axios
    .get(BASE_URL + url, {
      params: {
        client_id: CLIENT_ID,
        ...params,
      },
    })
    .then(({ data }) => data);

const formatNextHref = (href: string) => {
  if (!href.includes('client_id') && !href.includes('oauth_token')) {
    return (
      href +
      (getToken() ? `&oauth_token=${getToken()}` : `&client_id=${CLIENT_ID}`)
    );
  } else {
    return href;
  }
};

export const loadData = <T>(href: string, params: {}): Promise<Collection<T>> =>
  SC.get(href, { limit: PAGE_SIZE, linked_partitioning: 1, ...params }).then(
    (data: any) => {
      nextHref = data.next_href;
      return data;
    }
  );

export const loadMore = <T>(nextHref: string): Promise<Collection<T>> =>
  axios.get(formatNextHref(nextHref)).then(({ data }) => {
    nextHref = data.next_href;
    return data;
  });

export const loadUser = (user: string): Promise<User> =>
  getWithClientID(resolve(`/${user}`));

export const loadPlaylist = (
  user: string,
  playlist: string
): Promise<Playlist> => getWithClientID(resolve(`/${user}/sets/${playlist}`));

export const loadTrack = (user: string, track: string): Promise<Track> =>
  getWithClientID(resolve(`/${user}/${track}`));

export const loadUserWebProfiles = (
  userId: number
): Promise<UserWebProfile[]> => SC.get(`/users/${userId}/web-profiles`);

export const followUser = (userId: number): Promise<User> =>
  SC.put(`/me/followings/${userId}`);

export const unfollowUser = (userId: number): Promise<StatusResponse> =>
  SC.delete(`/me/followings/${userId}`);

export const addLike = (trackId: number): Promise<StatusResponse> =>
  SC.put(`/me/favorites/${trackId}`);

export const removeLike = (trackId: number): Promise<StatusResponse> =>
  SC.delete(`/me/favorites/${trackId}`);

export const addComment = (
  trackId: number,
  body: string,
  timestamp: number | null
): Promise<Comment> =>
  SC.post(`/tracks/${trackId}/comments`, { comment: { body, timestamp } });

export const removeComment = (trackId: number, commentId: number) =>
  SC.delete(`/tracks/${trackId}/comments/${commentId}`);

export const getMeLikesIds = (): Promise<number[]> =>
  axios
    .get(`${BASE_URL}/e1/me/track_likes/ids`, {
      params: {
        limit: 5000,
        linked_partitioning: 1,
        oauth_token: getToken(),
      },
    })
    .then(({ data }) => data.collection);

export const getMeFollowingsIds = (): Promise<number[]> =>
  SC.get('me/followings', {
    limit: 5000,
    linked_partitioning: 1,
  }).then((data: any) => data.collection.map((el: any) => el.id));

export const getUserTracksUrl = (userId: number) => `/users/${userId}/tracks`;

export const getUserFollowingsUrl = (userId: number) =>
  `/users/${userId}/followings`;

export const getUserLikesUrl = (userId: number) => `/users/${userId}/favorites`;

export const getUserPlaylistsUrl = (userId: number) =>
  `/users/${userId}/playlists`;

export const USER_PLAYLISTS_PARAMS = { representation: 'compact' };

export const getTrackCommentsUrl = (trackId: number) =>
  `tracks/${trackId}/comments`;

export const getSearchTracksByTagRequest = (tags: string) => ({
  url: '/tracks',
  params: {
    tags,
  },
});

export const getSearchTracksRequest = (query: string) => ({
  url: '/tracks',
  params: {
    q: query,
  },
});

export const getSearchUsersRequest = (query: string) => ({
  url: '/users',
  params: {
    q: query,
  },
});

export const formatStreamUrl = (url: string) => `${url}?client_id=${CLIENT_ID}`;
