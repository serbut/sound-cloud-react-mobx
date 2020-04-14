import { Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import useDataLoader from '../../hooks/use-data-loader';
import { Comment } from '../../models/comment';
import Error from '../Error';
import InfiniteScroll from '../InfiniteScrollify';
import { Spinner } from '../Spinner';
import CommentForm from './CommentForm';
import { CommentsList } from './CommentsList';

const Comments = ({ trackId }: { trackId: number }) => {
  const { playerStore, sessionStore, api } = useContext(AppContext);
  const {
    data: comments,
    isLoading,
    loadMore,
    error,
    setData: setComments,
  } = useDataLoader<Comment>(api.getTrackCommentsUrl(trackId));

  const addComment = (commentBody: string) => {
    const timestamp =
      playerStore.track && playerStore.track.id === trackId
        ? playerStore.progress * 1000
        : null;

    (sessionStore.isLoggedIn ? Promise.resolve() : sessionStore.login()).then(
      () => {
        api.addComment(trackId, commentBody, timestamp).then((comment) => {
          if (comments) {
            setComments([comment, ...comments]);
          }
        });
      }
    );
  };

  const removeComment = (comment: Comment) => {
    api.removeComment(comment.track_id, comment.id).then((response) => {
      if (comments) {
        setComments(comments.filter((c) => c.id !== comment.id));
      }
    });
  };

  return (
    <div>
      <Typography variant="h5">Leave a comment</Typography>
      <CommentForm addComment={addComment} />
      <br />

      <div>
        <InfiniteScroll load={loadMore}>
          <CommentsList comments={comments} removeComment={removeComment} />
        </InfiniteScroll>

        {isLoading && <Spinner />}

        {error && <Error>{'Failed to load comments'}</Error>}
      </div>
    </div>
  );
};

export default observer(Comments);
