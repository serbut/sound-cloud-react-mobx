import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';
import { Track } from '../../models/track';
import { formatNumber, fromNow } from '../../utils';
import { Bullet } from '../Bullet';
import Overlay from '../Overlay';
import TrackImage from './TrackImage';

const TrackCard = ({
  track,
  tracks, // TODO: TrackCard should nщt know about other tracks
}: {
  track: Track;
  tracks: Track[];
}) => {
  const { playerStore } = useContext(AppContext);

  const handlePlayClick = () => {
    playerStore.playTrack(track, tracks.slice());
  };

  const isCurrentTrack = !!playerStore.isSelected(track);
  const isPlaying = playerStore.isSelected(track) === 'isPlaying';
  return (
    <Card>
      <Overlay
        overlayContent={
          <IconButton
            onClick={handlePlayClick}
            aria-label={isPlaying ? 'pause' : 'play'}
          >
            {isPlaying ? (
              <Pause fontSize="large" color="secondary" />
            ) : (
              <PlayArrow fontSize="large" color="secondary" />
            )}
          </IconButton>
        }
        shown={isCurrentTrack}
        showOnMouseIn={true}
      >
        <TrackImage track={track} />
      </Overlay>
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

export default observer(TrackCard);
