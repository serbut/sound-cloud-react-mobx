import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, FavoriteBorder, Pause, PlayArrow } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';
import { Track } from '../../models/track';
import { formatDuration, formatNumber, fromNow } from '../../utils';
import { Bullet } from '../Bullet';
import TrackImage from './TrackImage';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  img: {},
  likes: {},
}));

const TrackHeader = ({ track }: { track: Track }) => {
  const classes = useStyles();
  const { sessionStore, playerStore } = useContext(AppContext);
  const { user } = track;
  const isLiked = sessionStore.isLiked(track);
  const isPlaying = playerStore.isSelected(track) === 'isPlaying';

  return (
    <Box py={3} mb={3} className={classes.root}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8} md={9}>
            <Typography variant="h4" gutterBottom>
              {track.title}
            </Typography>
            <Typography variant="body2" display="inline">
              by{' '}
            </Typography>
            <Link to={`/users/${user.permalink}`}>
              <Typography variant="h6" display="inline" gutterBottom>
                {user.username}
              </Typography>
            </Link>
            <Typography variant="body2" gutterBottom>
              added {fromNow(track.created_at)}
              <Bullet />
              {formatDuration(track.duration)}
            </Typography>
            <Typography variant="subtitle1" className={classes.likes}>
              {formatNumber(track.favoritings_count)} likes
            </Typography>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => playerStore.playTrack(track, [track])}
            >
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => sessionStore.toggleLike(track)}
            >
              {isLiked ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </Grid>
          <Grid item xs={4} md={3}>
            <Paper elevation={3} className={classes.img}>
              <TrackImage track={track} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default observer(TrackHeader);
