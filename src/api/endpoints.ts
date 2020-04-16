import { resolve } from './utils';

export const endpoints = {
  track: (user: string, track: string) => resolve(`/${user}/${track}`),

  trackComments: (id: number) => `tracks/${id}/comments`,

  user: (user: string) => resolve(`/${user}`),

  userPlaylists: (id: number) => `/users/${id}/playlists`,

  userTracks: (id: number) => `/users/${id}/tracks`,

  userWebProfiles: (id: number) => `/users/${id}/web-profiles`,

  userLikes: (id: number) => `/users/${id}/favorites`,

  userFollowings: (id: number) => `/users/${id}/followings`,

  playlist: (user: string, playlist: string) =>
    resolve(`/${user}/sets/${playlist}`),

  me: '/me',

  stream: 'me/activities/tracks/affiliated',

  tracks: '/tracks',

  users: '/users',

  myLikesIds: '/e1/me/track_likes/ids',

  myFollowings: 'me/followings',

  like: (trackId: number) => `/me/favorites/${trackId}`,

  follow: (userId: number) => `/me/followings/${userId}`,

  addComment: (id: number) => `/tracks/${id}/comments`,

  removeComment: (trackId: number, commentId: number) =>
    `/tracks/${trackId}/comments/${commentId}`,
};
