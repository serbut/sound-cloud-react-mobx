import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';
import { Bullet } from '../../Bullet';

import { ImageSize } from '../../enums';
import { Track } from '../../models/track';
import { formatNumber, fromNow, getImageUrl, isPreview } from '../../utils';
import './TrackCard.css';

// TODO: split into 2 components: TrackCard & TrackCardContent
const TrackCard = ({
  track,
  compact = false,
  tracks = [track], // TODO: TrackCard should nщt know about other tracks
}: {
  track: Track;
  compact?: boolean;
  tracks?: Track[];
}) => {
  const { playerStore } = useContext(AppContext);

  const handlePlayClick = () => {
    playerStore.playTrack(track, tracks.slice());
  };

  const isPlaying = playerStore.isSelected(track) === 'isPlaying';

  return (
    <Card
      className={
        'TrackCard' +
        (!compact && playerStore.isSelected(track) ? ' active' : '')
      }
    >
      <CardMedia
        className="TrackCard-media"
        image={getImageUrl(track.artwork_url, ImageSize.t500x500)}
        title={track.title}
      >
        <div className="TrackCard-overlay">
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
        </div>
        {isPreview(track) && (
          <div className="TrackCard-overlay2">
            <Typography>Preview</Typography>
          </div>
        )}
      </CardMedia>

      {!compact && (
        <CardContent>
          <Typography variant="subtitle2" noWrap>
            <Link
              to={`/users/${track.user.permalink}/tracks/${track.permalink}`}
            >
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
      )}
    </Card>
  );
};

export default observer(TrackCard);
