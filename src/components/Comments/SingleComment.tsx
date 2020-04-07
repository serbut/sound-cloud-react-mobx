import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IMAGE_SIZES } from '../../constants';
import { Comment } from '../../models/comment';
import { StoresContext } from '../../stores-context';
import { formatDuration, fromNow, getImageUrl } from '../../utils';

const CommentComponent = ({
  comment,
  removeComment,
}: {
  comment: Comment;
  removeComment: Function;
}) => {
  const { sessionStore } = useContext(StoresContext);

  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar
          src={getImageUrl(comment.user.avatar_url, IMAGE_SIZES.badge)}
          alt={comment.user.username}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <span>
            <Link to={`/${comment.user.permalink}`}>
              <Typography color="primary" display="inline">
                {comment.user.username}
              </Typography>
            </Link>
            <Typography variant="caption">
              {' '}
              at {formatDuration(comment.timestamp)}
            </Typography>
            <span className="bullet">&bull;</span>
            <Typography variant="caption">
              {fromNow(comment.created_at)}
            </Typography>
          </span>
        }
        secondary={comment.body}
      />
      {sessionStore.user && sessionStore.user.id === comment.user.id && (
        <ListItemSecondaryAction>
          <IconButton color="secondary" onClick={() => removeComment(comment)}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

export default observer(CommentComponent);
