import { List } from '@material-ui/core';
import React from 'react';
import { Comment } from '../../models/comment';
import CommentComponent from './SingleComment';

export const CommentsList = ({
  comments,
  removeComment,
}: {
  comments: Comment[] | null;
  removeComment: (comment: Comment) => void;
}) => {
  return (
    <List>
      {comments &&
        comments.map((comment: Comment) => (
          <CommentComponent
            key={comment.id}
            comment={comment}
            removeComment={removeComment}
          />
        ))}
    </List>
  );
};
