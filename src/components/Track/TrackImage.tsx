import { CardMedia, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pause, PlayArrow } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import { ImageSize } from '../../enums';
import { Track } from '../../models/track';
import { getImageUrl, isPreview } from '../../utils';
import Overlay from '../Overlay';

const useStyles = makeStyles({
  imagePlaceholder: {
    paddingTop: '100%',
  },
  previewOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'right',
    background: 'hsla(0, 0%, 6.7%, 0.8)',
  },
});

const TrackImage = ({
  track,
  tracks = [track],
}: {
  track: Track;
  tracks?: Track[];
}) => {
  const { playerStore } = useContext(AppContext);
  const classes = useStyles();

  const handlePlayClick = () => {
    playerStore.playTrack(track, tracks.slice());
  };

  const isCurrentTrack = !!playerStore.isSelected(track);
  const isPlaying = playerStore.isSelected(track) === 'isPlaying';

  return (
    <CardMedia
      image={getImageUrl(track.artwork_url, ImageSize.t500x500)}
      title={track.title}
    >
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
        <div className={classes.imagePlaceholder}>
          {isPreview(track) && (
            <div className={classes.previewOverlay}>
              <Typography>Preview</Typography>
            </div>
          )}
        </div>
      </Overlay>
    </CardMedia>
  );
};

export default observer(TrackImage);
