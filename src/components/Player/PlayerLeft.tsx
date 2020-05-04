import { CircularProgress, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';
import { getImageUrl } from '../../utils';

// TODO: create Overlay component
const useStyles = makeStyles({
  img: {
    display: 'block',
  },
  imgContainer: {
    position: 'relative',
  },
  imgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.5)',
  },
});

const PlayerLeft = () => {
  const clases = useStyles();
  const { playerStore } = useContext(AppContext);
  const { track, isLoading } = playerStore;

  return (
    <Grid container item xs={4} spacing={1} alignItems="center" wrap="nowrap">
      {track && (
        <>
          <Grid item className={clases.imgContainer}>
            <img
              src={getImageUrl(track.artwork_url)}
              alt={track.title}
              width={64}
              height={64}
              className={clases.img}
            />
            {isLoading && (
              <div className={clases.imgOverlay}>
                <CircularProgress />
              </div>
            )}
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="subtitle1" noWrap>
              <Link
                to={`/users/${track.user.permalink}/tracks/${track.permalink}`}
                title={track.title}
              >
                {track.title}
              </Link>
            </Typography>
            <Typography variant="subtitle2" noWrap>
              <Link to={`/users/${track.user.permalink}`}>
                {track.user.username}
              </Link>
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default observer(PlayerLeft);
