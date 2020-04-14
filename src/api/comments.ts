import SC from 'soundcloud';
import { StatusResponse } from '../models/api';
import { Comment } from '../models/comment';

export const addComment = (
  trackId: number,
  body: string,
  timestamp: number | null
) =>
  SC.post<Comment>(`/tracks/${trackId}/comments`, {
    comment: { body, timestamp },
  });

export const removeComment = (trackId: number, commentId: number) =>
  SC.delete<StatusResponse>(`/tracks/${trackId}/comments/${commentId}`);

export const getTrackCommentsUrl = (trackId: number) =>
  `tracks/${trackId}/comments`;
