import React, { Component } from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, ListSubheader } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { CircularProgress } from 'material-ui/Progress';

import { fromNow, getImageUrl, formatDuration } from '../utils';
import { IMAGE_SIZES } from '../constants';

const Comments = ({ comments, isLoading }) => {
  return (
    <div>
      <List subheader={<ListSubheader>Comments</ListSubheader>}>
        {comments.map((comment, i) =>
          <ListItem key={i} divider dense>
            <Avatar
              src={getImageUrl(comment.user.avatar_url, IMAGE_SIZES.badge)}
              alt={comment.user.username}
              className='list-avatar' />
            <ListItemText
              primary={
                <span>
                  <Link to={`/${comment.user.permalink}`} className='link'>{comment.user.username}</Link>
                  <small> at {formatDuration(comment.timestamp)}</small>
                </span>
              }
              secondary={comment.body} />
            {/*<ListItemSecondaryAction>
              <IconButton>reply</IconButton>
            </ListItemSecondaryAction>*/}
          </ListItem>
        )}
      </List>

      {isLoading ? <div className="loader-wrap"><CircularProgress /></div> : null}
    </div>
  )
}

export default observer(Comments);
