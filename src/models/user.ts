import { Kind } from '../enums';

export interface User {
  avatar_url: string;
  id: number;
  kind: Kind.User;
  permalink_url: string;
  uri: string;
  username: string;
  permalink: string;
  last_modified: string;
  first_name: null | string;
  last_name: null | string;
  full_name: string;
  city: null | string;
  description: null | string;
  country: null | string;
  track_count: number;
  public_favorites_count: number;
  followers_count: number;
  followings_count: number;
  plan: string;
  myspace_name: null;
  discogs_name: null;
  website_title: null | string;
  website: null | string;
  reposts_count: number;
  comments_count: number;
  online: boolean;
  likes_count: number;
  playlist_count: number;
}

export interface UserShort {
  avatar_url: string;
  id: number;
  kind: Kind.User;
  permalink_url: string;
  uri: string;
  username: string;
  permalink: string;
  last_modified: string;
}
