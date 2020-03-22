import './UserCard.less';

import { Avatar, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { IMAGE_SIZES } from '../../constants';
import { formatNumber, getImageUrl } from '../../utils';

const UserCard = ({ user }) => {
  const link = `/users/${user.permalink}`;

  return (
    <div className="user-card">
      <Link to={link} className="link">
        <Avatar
          alt={user.username}
          src={getImageUrl(user.avatar_url, IMAGE_SIZES.t500x500)}
          className="user-card__avatar"
        />
      </Link>
      <div className="user-card__content">
        <Typography variant="subtitle2" align="center">
          <Link to={link} className="link">
            {user.username}
          </Link>
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
