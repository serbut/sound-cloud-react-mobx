import React from 'react';
import {formatDuration, fromNow, getImageUrl} from '../../utils';
import {IMAGE_SIZES} from '../../constants';
import Text from 'material-ui/Text';
import {Link} from 'react-router';

const PlaylistHeader = ({ playlist }) => {
  const { user } = playlist;

  return <div className='playlist-header'>
    <div className='container playlist-header__row'>
      <img src={getImageUrl(playlist.artwork_url, IMAGE_SIZES.t500x500)} alt="playlsit.title" width={250} height={250}/>
      <div className='playlist-header__details'>
        <Text type="subheading">Playlist</Text>
        <Text type='display1' gutterBottom>{playlist.title}</Text>
        <Text type="subheading" gutterBottom>by <Link to={`/users/${user.permalink}`} className='link link--blue'>{user.username}</Link></Text>
        <Text type='subheading'>
          {fromNow(playlist.created_at)} <span className='bullet'>&bull;</span>
          {playlist.track_count} tracks, &nbsp;
          {formatDuration(playlist.duration)} <span className='bullet'>&bull;</span>
          {playlist.genre}
        </Text>
      </div>
    </div>
  </div>
};

export default PlaylistHeader;
