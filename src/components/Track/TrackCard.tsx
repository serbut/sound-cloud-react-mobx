import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Track } from '../../models/track';
import { formatNumber, fromNow } from '../../utils';
import { Bullet } from '../Bullet';
import TrackImage from './TrackImage';

const TrackCard = ({
  track,
  tracks, // TODO: TrackCard should nщt know about other tracks
}: {
  track: Track;
  tracks?: Track[];
}) => {
  return (
    <Card>
      <TrackImage track={track} tracks={tracks} />
      <CardContent>
        <Typography variant="subtitle2" noWrap>
          <Link to={`/users/${track.user.permalink}/tracks/${track.permalink}`}>
            {track.title}
          </Link>
        </Typography>
        <Typography variant="body2" noWrap>
          <Link to={`/users/${track.user.permalink}`}>
            {track.user.username}
          </Link>
        </Typography>
        <Typography variant="caption">
          {formatNumber(track.favoritings_count) + ' likes'}
          <Bullet />
          {fromNow(track.created_at)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrackCard;
