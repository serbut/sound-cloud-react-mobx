import { CollectionItemType } from '../enums';
import { Playlist } from './playlist';
import { Track } from './track';

export interface Collection<T> {
  collection: T[];
  next_href?: string;
  future_href?: string;
}

export interface CollectionItem {
  origin: Track | Playlist | null;
  tags: null;
  created_at: string;
  type: CollectionItemType;
}

export interface StatusResponse {
  status: number;
  message?: string;
}
