import { Box, Button, Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
  img: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    margin: '0 auto',
    marginBottom: theme.spacing(4),
  },
  likes: {
    marginBottom: theme.spacing(2),
  },
}));

const TrackHeader = ({ track }: { track: Track }) => {
  const classes = useStyles();
  const { sessionStore } = useContext(AppContext);
  const { user } = track;
  const isLiked = sessionStore.isLiked(track);

  return (
    <Box py={3} mb={3} textAlign="center" className={classes.root}>
      <Container>
        <Paper elevation={3} className={classes.img}>
          <TrackImage track={track} />
        </Paper>

        <Typography variant="h4" gutterBottom>
          {track.title}
        </Typography>
        <Typography variant="body1" display="inline">
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
        <Typography variant="body1" className={classes.likes}>
          {formatNumber(track.favoritings_count)} likes
        </Typography>
        <Button
          variant="contained"
          color={isLiked ? 'default' : 'secondary'}
          onClick={() => sessionStore.toggleLike(track)}
        >
          {isLiked ? 'Unlike' : 'Like'}
        </Button>
      </Container>
    </Box>
  );
};

export default observer(TrackHeader);
