import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { Close as CloseIcon } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import { isElementInViewport } from '../../utils';
import TracksList from '../Track/TracksList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PlayerQueue = () => {
  const { viewStore, playerStore } = useContext(AppContext);
  const classes = useStyles();
  const { track, queue } = playerStore;

  const onEntered = () => {
    const el = document.querySelector(`[data-track-id='${track?.id}']`);
    el && !isElementInViewport(el) && el.scrollIntoView();
  };

  const onClose = () => {
    viewStore.togglePlaylist();
  };

  const onClear = () => {
    playerStore.queue.clearItems();
  };

  return (
    <Dialog
      fullScreen
      open={viewStore.playlistOpen}
      onClose={onClose}
      TransitionComponent={Transition}
      onEntered={onEntered}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Next up
          </Typography>
          <Button color="inherit" onClick={onClear}>
            Clear
          </Button>
        </Toolbar>
      </AppBar>
      <TracksList tracks={queue.items} />
    </Dialog>
  );
};

// TODO: move to settings page
// <LabelSwitch
//  checked={playerStore.skipPreviews}
//  onChange={(event, checked) => playerStore.toggleSkipPreviews()}
//  label="Skip Previews"
// />

export default observer(PlayerQueue);
