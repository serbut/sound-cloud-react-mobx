import './TrackCard.less';

import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { IMAGE_SIZES } from '../../constants';
import { formatNumber, fromNow, getImageUrl, isPreview } from '../../utils';

// TODO: split into 2 components: TrackCard & TrackCardContent
const TrackCard = ({ track, compact, playerStore, tracks = [track] }) => {
  const handlePlayClick = () => {
    playerStore.playTrack(track, tracks.slice());
  };

  const isPlaying = playerStore.isSelected(track) === 'isPlaying';

  return (
    <Card
      className={
        'track-card' +
        (!compact && playerStore.isSelected(track) ? ' active' : '')
      }
    >
      <CardMedia
        className="track-card__media"
        image={getImageUrl(
          track.artwork_url,
          IMAGE_SIZES.t500x500,
          track.title
        )}
        title={track.title}
      >
        <div className="track-card__overlay">
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
          <div className="track-card__overlay2">
            <Typography>Preview</Typography>
          </div>
        )}
      </CardMedia>

      {!compact && (
        <CardContent>
          <Typography variant="subtitle2" noWrap>
            <Link
              to={`/users/${track.user.permalink}/tracks/${track.permalink}`}
              className="link"
            >
              {track.title}
            </Link>
          </Typography>
          <Typography variant="body2" noWrap>
            <Link to={`/users/${track.user.permalink}`} className="link">
              {track.user.username}
            </Link>
          </Typography>
          <Typography variant="caption">
            {formatNumber(track.likes_count || track.favoritings_count) +
              ' likes'}
            <span className="bullet">&bull;</span>
            {fromNow(track.created_at)}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default inject('playerStore')(observer(TrackCard));
