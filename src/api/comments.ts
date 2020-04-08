import SC from 'soundcloud';

export const addComment = (
  trackId: number,
  body: string,
  timestamp: number | null
): Promise<Comment> =>
  SC.post(`/tracks/${trackId}/comments`, { comment: { body, timestamp } });

export const removeComment = (trackId: number, commentId: number) =>
  SC.delete(`/tracks/${trackId}/comments/${commentId}`);

export const getTrackCommentsUrl = (trackId: number) =>
  `tracks/${trackId}/comments`;
