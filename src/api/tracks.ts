import { Track } from '../models/track';
import { getWithClientID, resolve } from './index';

export const loadTrack = (user: string, track: string) =>
  getWithClientID<Track>(resolve(`/${user}/${track}`));

export const getUserTracksUrl = (userId: number) => `/users/${userId}/tracks`;
