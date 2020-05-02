import { Grid, IconButton } from '@material-ui/core';
import { Favorite, QueueMusic } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import VolumeControl from './VolumeControl';

const PlayerRight = () => {
  const { viewStore, sessionStore, playerStore } = useContext(AppContext);
  const { track } = playerStore;

  return (
    <Grid
      container
      item
      xs={4}
      spacing={1}
      alignItems="center"
      justify="flex-end"
    >
      <Grid item>
        <VolumeControl />
      </Grid>
      {track && (
        <Grid item>
          <IconButton
            size="small"
            color={sessionStore.isLiked(track) ? 'primary' : 'default'}
            onClick={() => sessionStore.toggleLike(track)}
          >
            <Favorite fontSize="inherit" />
          </IconButton>
        </Grid>
      )}
      <Grid item>
        <IconButton
          size="small"
          color={viewStore.playlistOpen ? 'primary' : 'default'}
          onClick={() => viewStore.togglePlaylist()}
        >
          <QueueMusic />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default observer(PlayerRight);
