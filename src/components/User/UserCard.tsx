import { Avatar, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';

import { ImageSize } from '../../enums';
import { User } from '../../models/user';
import { formatNumber, getImageUrl } from '../../utils';
import './UserCard.css';

const UserCard = ({ user }: { user: User }) => {
  const link = `/users/${user.permalink}`;

  return (
    <div className="UserCard">
      <Link to={link}>
        <Avatar
          alt={user.username}
          src={getImageUrl(user.avatar_url, ImageSize.t500x500)}
          className="UserCard-avatar"
        />
      </Link>
      <div className="UserCard-content">
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

export default observer(UserCard);
