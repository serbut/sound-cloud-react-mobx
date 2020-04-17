import { Avatar, Button, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import { ImageSize } from '../../enums';
import { User } from '../../models/user';
import { formatNumber, getImageUrl } from '../../utils';
import './UserHeader.css';

const UserHeader = ({ user }: { user: User }) => {
  const { sessionStore } = useContext(AppContext);

  return (
    <div className="UserHeader">
      <Avatar
        alt={user.username}
        src={getImageUrl(user.avatar_url, ImageSize.t500x500)}
        style={{ width: 250, height: 250 }}
      />
      <div className="UserHeader-details">
        <Typography variant="h5">Artist</Typography>
        <Typography variant="h4" gutterBottom>
          {user.username}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {formatNumber(user.followers_count)} followers
        </Typography>
        {sessionStore.isAuthedUser(user) ? null : sessionStore.isFollowing(
            user
          ) ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => sessionStore.toggleFollowing(user)}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => sessionStore.toggleFollowing(user)}
          >
            Follow
          </Button>
        )}
      </div>
    </div>
  );
};

export default observer(UserHeader);
