import { Box, Container, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Bullet } from '../../Bullet';
import { ImageSize } from '../../enums';
import { Playlist } from '../../models/playlist';
import { formatDuration, fromNow, getImageUrl } from '../../utils';

const PlaylistHeader = ({ playlist }: { playlist: Playlist }) => {
  const { user } = playlist;

  return (
    <Box py={3} mb={3} style={{ backgroundColor: '#eeeeee99' }}>
      <Container>
        <Grid container alignItems="center" spacing={3}>
          <Hidden xsDown>
            <Grid item sm={3}>
              <img
                src={getImageUrl(playlist.artwork_url, ImageSize.t500x500)}
                alt="playlsit.title"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
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
