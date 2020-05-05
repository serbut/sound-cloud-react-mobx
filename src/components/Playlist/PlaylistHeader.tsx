import { Box, Container, Grid, Hidden, Typography } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { ImageSize } from '../../enums';
import { Playlist } from '../../models/playlist';
import { formatDuration, fromNow, getImageUrl } from '../../utils';
import { Bullet } from '../Bullet';

const useStyles = makeStyles((theme) => ({
  root: {
    background: grey[100],
  },
  img: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
}));

const PlaylistHeader = ({ playlist }: { playlist: Playlist }) => {
  const classes = useStyles();
  const { user } = playlist;

  return (
    <Box py={3} mb={3} className={classes.root}>
      <Container>
        <Grid container alignItems="center" spacing={3}>
          <Hidden xsDown>
            <Grid item sm={3}>
              <img
                src={getImageUrl(playlist.artwork_url, ImageSize.t500x500)}
                alt={playlist.title}
                className={classes.img}
              />
            </Grid>
          </Hidden>

          <Grid item xs>
            <Typography variant="h5">Playlist</Typography>
            <Typography variant="h4" gutterBottom>
              {playlist.title}
            </Typography>
            <Typography variant="subtitle1">
              by{' '}
              <Link to={`/users/${user.permalink}`}>
                <Typography color="primary" display="inline">
                  {user.username}
                </Typography>
              </Link>
            </Typography>
            <Typography variant="body1">
              {fromNow(playlist.created_at)}
              <Bullet />
              {playlist.track_count} tracks, &nbsp;
              {formatDuration(playlist.duration)}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlaylistHeader;
