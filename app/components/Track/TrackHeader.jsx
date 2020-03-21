import {Button, Typography} from '@material-ui/core';
import {inject, observer} from 'mobx-react';
import React from 'react';
import {Link} from 'react-router-dom';
import {formatDuration, formatNumber, fromNow} from '../../utils';
import TrackCard from './TrackCard';

const TrackHeader = ({ track, sessionStore }) => {
  const { user } = track;

  return <div className='track-header'>
    <div className='track-header__row container'>
      <div className='track-header__artwork'>
        <TrackCard track={track} compact />
      </div>
      <div className='track-header__details'>
        <Typography variant='h5'>Single</Typography>
        <Typography variant='h4'>{track.title}</Typography>
        <Typography variant="subtitle1">by <Link to={`/users/${user.permalink}`} className='link link--blue'>{user.username}</Link></Typography>
        <Typography variant='body1' gutterBottom>
          added {fromNow(track.created_at)} <span className='bullet'>&bull;</span>
          {formatDuration(track.duration)}
          <br/>
          {formatNumber(track.playback_count)} plays <span className='bullet'>&bull;</span>
          {formatNumber(track.favoritings_count || track.likes_count)} likes <span className='bullet'>&bull;</span>
          {formatNumber(track.reposts_count)} reposts <span className='bullet'>&bull;</span>
          {formatNumber(track.comment_count)} comments
        </Typography>
        {sessionStore.isLiked(track) ?
          <Button variant="contained"  color="secondary" onClick={() => sessionStore.toggleLike(track)}>Remove like</Button> :
          <Button variant="contained" color="primary" onClick={() => sessionStore.toggleLike(track)}>Like</Button>
        }
      </div>
    </div>
  </div>
};

export default inject('sessionStore')(observer(TrackHeader));
