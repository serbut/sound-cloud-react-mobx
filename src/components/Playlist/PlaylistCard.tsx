import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PlaylistPlay } from '@material-ui/icons';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ImageSize } from '../../enums';
import { Playlist } from '../../models/playlist';
import { fromNow, getImageUrl } from '../../utils';

const useStyles = makeStyles((theme) => ({
  media: {
    position: 'relative',
    paddingTop: '100%',
    '& img': {
      position: 'absolute',
      top: '0',
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 0.8)',
    background: 'hsla(0, 0%, 6.7%, 0.8)',
  },
  trackCount: {
    marginRight: theme.spacing(1),
  },
}));

const PlaylistCard = ({ playlist }: { playlist: Playlist }) => {
  const classes = useStyles();
  const link = `/users/${playlist.user.permalink}/playlists/${playlist.permalink}`;

  return (
    <Card>
      <CardMedia className={classes.media}>
        <Link to={link}>
          <img
            src={getImageUrl(playlist.artwork_url, ImageSize.t500x500)}
            alt={playlist.title}
          />
          <div className={classes.overlay}>
            <Typography
              variant="subtitle1"
              color="inherit"
              className={classes.trackCount}
            >
              {playlist.track_count}
            </Typography>
            <PlaylistPlay />
          </div>
        </Link>
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle2" noWrap title={playlist.title}>
          <Link to={link}>{playlist.title}</Link>
        </Typography>
        <Typography variant="body2" noWrap>
          <Link to={`/users/${playlist.user.permalink}`}>
            {playlist.user.username}
          </Link>
        </Typography>
        <Typography variant="caption">
          {fromNow(playlist.created_at)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(PlaylistCard);
