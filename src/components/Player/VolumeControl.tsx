import { Card, CardContent, IconButton } from '@material-ui/core';
import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from '@material-ui/icons';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import './VolumeControl.css';

const VolumeContol = () => {
  const { playerStore, viewStore } = useContext(AppContext);

  return (
    <div
      className="VolumeControl"
      onMouseOver={() => (viewStore.volumeControlOpen = true)}
      onMouseOut={() => (viewStore.volumeControlOpen = false)}
    >
      <Card
        className={`VolumeControl-inner ${
          viewStore.volumeControlOpen ? 'visible' : ''
        }`}
      >
        <CardContent>{playerStore.volume}</CardContent>
      </Card>

      <IconButton onClick={() => playerStore.toggleMuted()}>
        {playerStore.muted ? (
          <VolumeOff />
        ) : playerStore.volume === 1 ? (
          <VolumeUp />
        ) : playerStore.volume === 0 ? (
          <VolumeMute />
        ) : (
          <VolumeDown />
        )}
      </IconButton>
    </div>
  );
};

export default observer(VolumeContol);
