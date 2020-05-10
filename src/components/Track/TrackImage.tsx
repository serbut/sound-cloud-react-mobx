import { CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { ImageSize } from '../../enums';
import { Track } from '../../models/track';
import { getImageUrl, isPreview } from '../../utils';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    paddingTop: '100%',
  },
  overlay: {
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

const TrackImage = ({ track }: { track: Track }) => {
  const classes = useStyles();

  return (
    <CardMedia
      image={getImageUrl(track.artwork_url, ImageSize.t500x500)}
      title={track.title}
    >
      <div className={classes.root}>
        {isPreview(track) && (
          <div className={classes.overlay}>
            <Typography>Preview</Typography>
          </div>
        )}
      </div>
    </CardMedia>
  );
};

export default TrackImage;
