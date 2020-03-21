import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {inject, observer} from 'mobx-react';
import React from 'react';
import {Link} from 'react-router-dom';
import {IMAGE_SIZES} from '../../constants';
import {formatDuration, fromNow, getImageUrl} from '../../utils';

const Comment = ({ comment, removeComment, sessionStore }) => {
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
            <Link to={`/${comment.user.permalink}`} className='link link--blue'>{comment.user.username}</Link>
            <Typography variant="caption"> at {formatDuration(comment.timestamp)}</Typography>
            <span className='bullet'>&bull;</span>
            <Typography variant="caption">{fromNow(comment.created_at)}</Typography>
          </span>
        }
        secondary={comment.body}
      />
      {sessionStore.isLoggedIn && sessionStore.user.id === comment.user.id &&
        <ListItemSecondaryAction>
          <IconButton color="secondary" onClick={() => removeComment(comment)}><Delete /></IconButton>
        </ListItemSecondaryAction>
      }
    </ListItem>
  );
};

export default inject('sessionStore')(observer(Comment));
