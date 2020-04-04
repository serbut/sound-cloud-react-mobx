import { Button, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Track } from '../../models/track';
import { StoresContext } from '../../stores-context';

import { formatDuration, formatNumber, fromNow } from '../../utils';
import TrackCard from './TrackCard';
import './TrackHeader.css';

const TrackHeader = ({ track }: { track: Track }) => {
  const { sessionStore } = useContext(StoresContext);
  const { user } = track;

  return (
    <div className="TrackHeader">
      <div className="TrackHeader-row container">
        <div className="TrackHeader-artwork">
          <TrackCard track={track} compact />
        </div>
        <div className="TrackHeader-details">
          <Typography variant="h5">Single</Typography>
          <Typography variant="h4" gutterBottom>
            {track.title}
          </Typography>
          <Typography variant="subtitle1">
            by{' '}
            <Link to={`/users/${user.permalink}`}>
              <Typography color="primary" display="inline">
                {user.username}
              </Typography>
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            added {fromNow(track.created_at)}{' '}
            <span className="bullet">&bull;</span>
            {formatDuration(track.duration)}
            <br />
            {formatNumber(track.playback_count)} plays{' '}
            <span className="bullet">&bull;</span>
            {formatNumber(
              track.favoritings_count || track.likes_count
            )} likes <span className="bullet">&bull;</span>
            {formatNumber(track.reposts_count)} reposts{' '}
            <span className="bullet">&bull;</span>
            {formatNumber(track.comment_count)} comments
          </Typography>
          {sessionStore.isLiked(track) ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => sessionStore.toggleLike(track)}
            >
              Remove like
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => sessionStore.toggleLike(track)}
            >
              Like
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(TrackHeader);
