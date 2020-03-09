import React from 'react';
import Avatar from 'material-ui/Avatar';
import {formatNumber, getImageUrl, getUserLocation} from '../utils';
import {IMAGE_SIZES} from '../constants';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import {inject, observer} from 'mobx-react';

const UserHeader = ({ user, sessionStore }) => {
  return <div className='user-header__row'>
    <Avatar alt={user.username} src={getImageUrl(user.avatar_url, IMAGE_SIZES.t500x500)}
            style={{ width: 250, height: 250 }}
    />
    <div className='user-header__details'>
      <Text type='subheading'>Artist</Text>
      <Text type='display1' gutterBottom>{user.username}</Text>
      <Text type='subheading' gutterBottom>{formatNumber(user.followers_count)} followers</Text>
      <Text type='body1' gutterBottom>
        {user.followings_count} followings <span className='bullet'>&bull;</span>
        {user.playlist_count} playlists <span className='bullet'>&bull;</span>
        {user.public_favorites_count} likes <span className='bullet'>&bull;</span>
        {user.reposts_count} reposts <span className='bullet'>&bull;</span>
        {user.track_count} tracks
      </Text>
      {location && <Text type='body1' gutterBottom>from {getUserLocation(user)}</Text>}
      {sessionStore.isAuthedUser(user) ? null :
        sessionStore.isFollowing(user) ?
          <Button raised primary onTouchTap={() => sessionStore.toggleFollowing(user)}>Unfollow</Button> :
          <Button raised accent onTouchTap={() => sessionStore.toggleFollowing(user)}>Follow</Button>
      }
    </div>
  </div>;
};

export default inject('sessionStore')(observer(UserHeader));
