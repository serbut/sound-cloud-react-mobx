import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ImageSize } from '../../enums';
import { User } from '../../models/user';
import { formatNumber, getImageUrl } from '../../utils';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '100%',
    height: 'auto',
    paddingTop: '100%',
    boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
      0px 3px 1px -2px rgba(0, 0, 0, 0.12)`,
    fontSize: 0,
    '& img': {
      position: 'absolute',
      top: 0,
    },
  },
  content: {
    padding: theme.spacing(2, 2, 4),
  },
}));

const UserCard = ({ user }: { user: User }) => {
  const classes = useStyles();
  const link = `/users/${user.permalink}`;

  return (
    <div>
      <Link to={link}>
        <Avatar
          alt={user.username}
          src={getImageUrl(user.avatar_url, ImageSize.t500x500)}
          className={classes.avatar}
        />
      </Link>
      <div className={classes.content}>
        <Typography variant="subtitle2" align="center">
          <Link to={link}>{user.username}</Link>
        </Typography>
        {user.followers_count && (
          <Typography variant="caption" component="p" align="center">
            {formatNumber(user.followers_count)} followers
          </Typography>
        )}
      </div>
    </div>
  );
};

export default memo(UserCard);
