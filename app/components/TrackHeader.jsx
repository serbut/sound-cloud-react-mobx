import React from 'react';
import TrackCard from './TrackCard';
import Text from 'material-ui/Text';
import {Link} from 'react-router';
import {formatDuration, formatNumber, fromNow} from '../utils';
import Button from 'material-ui/Button';
import {inject} from 'mobx-react';

const TrackHeader = ({ track, sessionStore }) => {
  const { user } = track;

  return <div className='track-header'>
    <div className='track-header__row container'>
      <div className='track-header__artwork'>
        <TrackCard track={track} compact />
      </div>
      <div className='track-header__details'>
        <Text type='subheading'>Single</Text>
        <Text type='display1' gutterBottom>{track.title}</Text>
        <Text type="subheading" gutterBottom>by <Link to={`/users/${user.permalink}`} className='link link--blue'>{user.username}</Link></Text>
        <Text type='subheading' gutterBottom>
          {fromNow(track.created_at)} <span className='bullet'>&bull;</span>
          {formatDuration(track.duration)} <span className='bullet'>&bull;</span>
          {track.genre} <span className='bullet'>&bull;</span>
          {formatNumber(track.playback_count)} plays <span className='bullet'>&bull;</span>
          {formatNumber(track.favoritings_count || track.likes_count)} likes <span className='bullet'>&bull;</span>
          {formatNumber(track.reposts_count)} reposts <span className='bullet'>&bull;</span>
          {formatNumber(track.comment_count)} comments
        </Text>
        {sessionStore.isLiked(track) ?
          <Button raised primary onTouchTap={() => sessionStore.toggleLike(track)}>Liked</Button> :
          <Button raised accent onTouchTap={() => sessionStore.toggleLike(track)}>Like</Button>
        }
      </div>
    </div>
  </div>
};

export default inject('sessionStore')(TrackHeader);
