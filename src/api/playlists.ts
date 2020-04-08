import { Playlist } from '../models/playlist';
import { getWithClientID, resolve } from './index';

export const loadPlaylist = (user: string, playlist: string) =>
  getWithClientID<Playlist>(resolve(`/${user}/sets/${playlist}`));

export const getUserPlaylistsUrl = (userId: number) =>
  `/users/${userId}/playlists`;

export const USER_PLAYLISTS_PARAMS = { representation: 'compact' };
