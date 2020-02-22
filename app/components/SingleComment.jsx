import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import { fromNow, getImageUrl, formatDuration } from '../utils';
import { IMAGE_SIZES } from '../constants';

const Comment = ({ comment, removeComment, sessionStore }) => {
  return (
    <ListItem divider>
      <Avatar
        src={getImageUrl(comment.user.avatar_url, IMAGE_SIZES.badge)}
        alt={comment.user.username}
        className='list-avatar' />
      <ListItemText
        primary={
          <span>
            <Link to={`/${comment.user.permalink}`} className='link link--blue'>{comment.user.username}</Link>
            <small> at {formatDuration(comment.timestamp)}</small>
            <span className='bullet'>&bull;</span>
            <small>{fromNow(comment.created_at)}</small>
          </span>
        }
        secondary={comment.body}
        className='list-item-text'
      />
      {sessionStore.isLoggedIn && sessionStore.user.id === comment.user.id &&
        <ListItemSecondaryAction>
          <IconButton onClick={() => removeComment(comment)}>close</IconButton>
        </ListItemSecondaryAction>
      }
    </ListItem>
  );
};

export default inject('sessionStore')(observer(Comment));
