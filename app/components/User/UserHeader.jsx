import {Avatar, Button, Typography} from '@material-ui/core';
import {inject, observer} from 'mobx-react';
import React from 'react';
import {IMAGE_SIZES} from '../../constants';
import {formatNumber, getImageUrl} from '../../utils';

const UserHeader = ({ user, sessionStore }) => {
  return <div className='user-header__row'>
    <Avatar alt={user.username} src={getImageUrl(user.avatar_url, IMAGE_SIZES.t500x500)}
            style={{ width: 250, height: 250 }}
    />
    <div className='user-header__details'>
      <Typography variant='h5'>Artist</Typography>
      <Typography variant='h4' gutterBottom>{user.username}</Typography>
      <Typography variant='body1' gutterBottom>
        {formatNumber(user.followers_count)} followers <span className='bullet'>&bull;</span>
        {user.followings_count} followings
        <br/>
        {user.playlist_count} playlists <span className='bullet'>&bull;</span>
        {user.public_favorites_count} likes <span className='bullet'>&bull;</span>
        {user.reposts_count} reposts <span className='bullet'>&bull;</span>
        {user.track_count} tracks
      </Typography>
      {sessionStore.isAuthedUser(user) ? null :
        sessionStore.isFollowing(user) ?
          <Button variant="contained" color="secondary" onClick={() => sessionStore.toggleFollowing(user)}>Unfollow</Button> :
          <Button variant="contained" color="primary" onClick={() => sessionStore.toggleFollowing(user)}>Follow</Button>
      }
    </div>
  </div>;
};

export default inject('sessionStore')(observer(UserHeader));
