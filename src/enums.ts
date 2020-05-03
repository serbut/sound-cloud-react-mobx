export enum CollectionItemType {
  Playlist = 'playlist',
  PlaylistRepost = 'playlist-repost',
  Track = 'track',
  TrackRepost = 'track-repost',
}

export enum Kind {
  User = 'user',
  Track = 'track',
  Playlist = 'playlist',
  Comment = 'comment',
}

/*
JPEG, PNG and GIF are accepted when uploading and will be encoded to multiple JPEGs in these formats:

t500x500: 500×500
crop: 400×400
t300x300: 300×300
large: 100×100 (default)
t67x67: 67×67 (only on artworks)
badge: 47×47
small: 32×32
tiny: 20×20 (on artworks)
tiny: 18×18 (on avatars)
mini: 16×16
* */
export enum ImageSize {
  t500x500 = 't500x500',
  crop = 'crop',
  t300x300 = 't300x300',
  t200x200 = 't200x200',
  large = 'large',
  t67x67 = 't67xt67',
  badge = 'badge',
  small = 'small',
  tiny = 'tiny',
  mini = 'mini',
}

export enum StorageKey {
  Token = 'accessToken',
  User = 'user',
  PlaybackState = 'playbackState',
  PlayQueueState = 'playQueueState',
}
