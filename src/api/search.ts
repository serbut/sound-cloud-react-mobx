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
