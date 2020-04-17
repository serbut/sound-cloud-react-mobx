import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';
import { Track } from '../../models/track';
import { formatDuration, formatNumber, fromNow } from '../../utils';
import TrackCard from './TrackCard';

const TrackHeader = ({ track }: { track: Track }) => {
  const { sessionStore } = useContext(AppContext);
  const { user } = track;

  return (
    <Box py={3} mb={3} style={{ backgroundColor: '#eeeeee99' }}>
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={3}>
            <TrackCard track={track} compact />
          </Grid>

          <Grid item xs={9}>
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
            <Typography variant="body1" paragraph>
              added {fromNow(track.created_at)}{' '}
              <span className="bullet">&bull;</span>
              {formatDuration(track.duration)}
              <span className="bullet">&bull;</span>
              {formatNumber(track.playback_count)} plays{' '}
              <span className="bullet">&bull;</span>
              {formatNumber(track.reposts_count)} reposts{' '}
            </Typography>
            <Button
              variant={sessionStore.isLiked(track) ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => sessionStore.toggleLike(track)}
            >
              {formatNumber(track.favoritings_count)} likes
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default observer(TrackHeader);
