import { CircularProgress, List, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';

import { AppContext } from '../../app-context';
import DataLoader from '../../hoc/DataLoader';
import InfiniteScroll from '../../hoc/InfiniteScrollify';
import { Comment } from '../../models/comment';
import Error from '../Error';
import CommentForm from './CommentForm';
import CommentComponent from './SingleComment';

const Comments = ({ trackId }: { trackId: number }) => {
  const { playerStore, sessionStore, api } = useContext(AppContext);

  const addComment = (commentBody: string) => {
    const timestamp =
      playerStore.track && playerStore.track.id === trackId
        ? playerStore.progress * 1000
        : null;

    (sessionStore.isLoggedIn ? Promise.resolve() : sessionStore.login()).then(
      () => {
        api.addComment(trackId, commentBody, timestamp);
        // .then(res => comments.unshift(res)); TODO: addComment
      }
    );
  };

  const removeComment = (comment: Comment) => {
    api.removeComment(comment.track_id, comment.id);
    // .then(res => comments.remove(comment)); TODO: removeComment
  };

  return (
    <div>
      <Typography variant="h5">Leave a comment</Typography>
      <CommentForm addComment={addComment} />
      <br />

      <DataLoader
        url={api.getTrackCommentsUrl(trackId)}
        render={({
          data: comments,
          isLoading,
          loadMore,
          error,
        }: {
          data: any;
          isLoading: boolean;
          loadMore: Function;
          error: string | null;
        }) => (
          <div>
            <InfiniteScroll load={loadMore}>
              <List>
                {comments.map((comment: Comment) => (
                  <CommentComponent
                    key={comment.id}
                    comment={comment}
                    removeComment={removeComment}
                  />
                ))}
              </List>
            </InfiniteScroll>

            {isLoading && (
              <div className="loader-wrap">
                <CircularProgress />
              </div>
            )}

            {error && <Error>{'Failed to load comments'}</Error>}
          </div>
        )}
      />
    </div>
  );
};

export default observer(Comments);
