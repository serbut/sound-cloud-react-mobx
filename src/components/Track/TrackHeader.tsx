import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core';
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
  const isLiked = sessionStore.isLiked(track);

  return (
    <Box py={3} mb={3} style={{ backgroundColor: '#eeeeee99' }}>
      <Container>
        <Grid container alignItems="center" spacing={3}>
          <Hidden smDown>
            <Grid item sm={3}>
              <TrackCard track={track} compact />
            </Grid>
          </Hidden>

          <Grid item xs>
            <Typography variant="h5">Single</Typography>
            <Typography variant="h4" gutterBottom>
              {track.title}
            </Typography>
            <Typography variant="body1" display="inline">
              by{' '}
            </Typography>
            <Link to={`/users/${user.permalink}`}>
              <Typography
                variant="body1"
                color="primary"
                display="inline"
                gutterBottom
              >
                {user.username}
              </Typography>
            </Link>
            <Typography variant="body2" gutterBottom>
              added {fromNow(track.created_at)}
              <span className="bullet">&bull;</span>
              {formatDuration(track.duration)}
              <span className="bullet">&bull;</span>
              {formatNumber(track.playback_count)} plays
              <span className="bullet">&bull;</span>
              {formatNumber(track.favoritings_count)} likes
              {/*<span className="bullet">&bull;</span>*/}
              {/*{formatNumber(track.reposts_count)} reposts{' '}*/}
            </Typography>
            <Button
              variant="contained"
              color={isLiked ? 'default' : 'primary'}
              onClick={() => sessionStore.toggleLike(track)}
            >
              {isLiked ? 'Unlike' : 'Like'}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default observer(TrackHeader);
