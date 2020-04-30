import { Box, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import useCollectionDataLoader from '../../hooks/use-collection-data-loader';
import { Comment } from '../../models/comment';
import { formatNumber } from '../../utils';
import Error from '../Error';
import { Spinner } from '../Spinner';
import CommentForm from './CommentForm';
import { CommentsList } from './CommentsList';

const Comments = ({
  trackId,
  commentsCount,
}: {
  trackId: number;
  commentsCount: number;
}) => {
  const { playerStore, sessionStore, api } = useContext(AppContext);
  const {
    data: comments,
    isLoading,
    loadMore,
    error,
    setData: setComments,
    isLastPage,
  } = useCollectionDataLoader<Comment>(
    api.endpoints.trackComments(trackId),
    api.paginationParams
  );

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
    <Box py={2}>
      <Typography variant="h6" gutterBottom>
        {formatNumber(commentsCount)} comments
      </Typography>
      <CommentForm addComment={addComment} />
      <br />

      <div>
        <CommentsList
          comments={comments}
          removeComment={removeComment}
          loadMore={loadMore}
          isLastPage={isLastPage}
        />

        {isLoading && <Spinner />}

        {error && <Error>{'Failed to load comments'}</Error>}
      </div>
    </Box>
  );
};

export default observer(Comments);
