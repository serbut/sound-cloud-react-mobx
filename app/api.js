import SC from 'soundcloud';
import Cookies from 'js-cookie';
import axios from 'axios';

import { CLIENT_ID, REDIRECT_URI, COOKIE_PATH } from './config';
const TOKEN = () => Cookies.get(COOKIE_PATH);
const BASE_URL = '//api.soundcloud.com/';
const RESOLVE_URL = `${BASE_URL}resolve?url=http://soundcloud.com/`;
const params = { client_id: CLIENT_ID };
const PAGE_SIZE = 50;
const handleError = err => console.error(err);
let nextHref = null;

SC.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  oauth_token: TOKEN()
});

export const getNextHref = () => nextHref;

export function formatNextHref(href) {
  if (!href.includes('client_id') && !href.includes('oauth_token'))
    return href += TOKEN() ? `&oauth_token=${TOKEN()}` : `&client_id=${CLIENT_ID}`;
  else
    return href;
}

export function formatStreamUrl(url) {
  return `${url}?client_id=${CLIENT_ID}`;
}

export function loadData(href, opts) {
  return SC.get(href, Object.assign({ limit: PAGE_SIZE, linked_partitioning: 1 }, opts))
    .then(data => {
      nextHref = data.next_href;
      return data;
    })
    .catch(handleError);
}

export function loadMore(nextHref) {
  return axios.get(formatNextHref(nextHref))
    .then(({ data }) => {
      nextHref = data.next_href;
      return data;
    })
    .catch(handleError);
}

export function loadUser(permalink) {
  return axios.get(`${RESOLVE_URL}${permalink}`, { params })
    .then(({data}) => data)
    .catch(handleError);
}

export function loadUserWebProfiles(userId) {
  return SC.get(`/users/${userId}/web-profiles`)
    .catch(handleError);
}

export function loadPlaylist(user, playlist) {
  return axios.get(`${RESOLVE_URL}${user}/sets/${playlist}`, { params })
    .then(({data}) => data)
    .catch(handleError);
}

export function loadTrack(user, track) {
  return axios.get(`${RESOLVE_URL}${user}/${track}`, { params })
    .then(({data}) => data)
    .catch(handleError);
}

export function followUser(userId) {
  return SC.put(`/me/followings/${userId}`)
    .catch(handleError);
}

export function unfollowUser(userId) {
  return SC.delete(`/me/followings/${userId}`)
    .catch(handleError);
}

export function addLike(trackId) {
  return SC.put(`/me/favorites/${trackId}`)
    .catch(handleError);
}

export function removeLike(trackId) {
  return SC.delete(`/me/favorites/${trackId}`)
    .catch(handleError);
}

export function addComment(trackId, body, timestamp) {
  return SC.post(`/tracks/${trackId}/comments`, {
    comment: { body, timestamp }
  })
    .catch(handleError);
}

export function removeComment(trackId, commentId) {
  return SC.delete(`/tracks/${trackId}/comments/${commentId}`)
    .catch(handleError);
}

export function getMeLikesIds() {
  return axios.get(`${BASE_URL}e1/me/track_likes/ids`, {
    params: { limit: 5000, linked_partitioning: 1, oauth_token: TOKEN() }
  })
    .then(({data}) => data.collection)
    .catch(handleError);
}

export function getMeFollowingsIds() {
  return SC.get('me/followings', { limit: 5000, linked_partitioning: 1 })
    .then(data => data.collection.map(el => el.id))
    .catch(handleError);
}

export function loadUserVisuals(userId) {
  return axios.get('//visuals.soundcloud.com/visuals', {
    params: { urn: `soundcloud:users:${userId}`, client_id: CLIENT_ID }
  })
    .then(({data}) => data)
    .catch(handleError);
}
