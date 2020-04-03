import axios from 'axios';
import SC from 'soundcloud';

import { CLIENT_ID, REDIRECT_URI, TOKEN_KEY } from './config';

const getToken = () => localStorage.getItem(TOKEN_KEY);
const BASE_URL = '//api.soundcloud.com';
const RESOLVE_URL = '/resolve?url=http://soundcloud.com';
const PAGE_SIZE = 50;
let nextHref = null; // TODO: remove this

SC.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  oauth_token: getToken(),
});

export const getNextHref = () => nextHref; // TODO: remove this

const resolve = url => RESOLVE_URL + url;

const getWithClientID = (url, params = {}) =>
  axios
    .get(BASE_URL + url, {
      params: {
        client_id: CLIENT_ID,
        ...params,
      },
    })
    .then(({ data }) => data);

const formatNextHref = href => {
  if (!href.includes('client_id') && !href.includes('oauth_token')) {
    return (href += getToken()
      ? `&oauth_token=${getToken()}`
      : `&client_id=${CLIENT_ID}`);
  } else {
    return href;
  }
};

export const loadData = (href, params) =>
  SC.get(href, { limit: PAGE_SIZE, linked_partitioning: 1, ...params }).then(
    data => {
      nextHref = data.next_href;
      return data;
    }
  );

export const loadMore = nextHref =>
  axios.get(formatNextHref(nextHref)).then(({ data }) => {
    nextHref = data.next_href;
    return data;
  });

export const loadUser = user => getWithClientID(resolve(`/${user}`));
export const loadPlaylist = (user, playlist) =>
  getWithClientID(resolve(`/${user}/sets/${playlist}`));
export const loadTrack = (user, track) =>
  getWithClientID(resolve(`/${user}/${track}`));
export const loadUserWebProfiles = userId =>
  SC.get(`/users/${userId}/web-profiles`);
export const followUser = userId => SC.put(`/me/followings/${userId}`);
export const unfollowUser = userId => SC.delete(`/me/followings/${userId}`);
export const addLike = trackId => SC.put(`/me/favorites/${trackId}`);
export const removeLike = trackId => SC.delete(`/me/favorites/${trackId}`);

export const addComment = (trackId, body, timestamp) =>
  SC.post(`/tracks/${trackId}/comments`, { comment: { body, timestamp } });

export const removeComment = (trackId, commentId) =>
  SC.delete(`/tracks/${trackId}/comments/${commentId}`);

export const getMeLikesIds = () =>
  axios
    .get(`${BASE_URL}/e1/me/track_likes/ids`, {
      params: {
        limit: 5000,
        linked_partitioning: 1,
        oauth_token: getToken(),
      },
    })
    .then(({ data }) => data.collection);

export const getMeFollowingsIds = () =>
  SC.get('me/followings', {
    limit: 5000,
    linked_partitioning: 1,
  }).then(data => data.collection.map(el => el.id));

export const getUserTracksUrl = userId => `/users/${userId}/tracks`;
export const getUserFollowingsUrl = userId => `/users/${userId}/followings`;
export const getUserLikesUrl = userId => `/users/${userId}/favorites`;
export const getUserPlaylistsUrl = userId => `/users/${userId}/playlists`;
export const USER_PLAYLISTS_PARAMS = { representation: 'compact' };
export const getTrackCommentsUrl = trackId => `tracks/${trackId}/comments`;

export const getSearchTracksByTagRequest = tags => ({
  url: '/tracks',
  params: {
    tags,
  },
});

export const getSearchTracksRequest = query => ({
  url: '/tracks',
  params: {
    q: query,
  },
});

export const getSearchUsersRequest = query => ({
  url: '/users',
  params: {
    q: query,
  },
});

export const formatStreamUrl = url => `${url}?client_id=${CLIENT_ID}`;
