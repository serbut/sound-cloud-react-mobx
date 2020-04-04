import { Card, CardContent, IconButton } from '@material-ui/core';
import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from '@material-ui/icons';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StoresContext } from '../../stores-context';
import './VolumeControl.less';

const VolumeContol = () => {
  const { playerStore, viewStore } = useContext(StoresContext);

  return (
    <div
      className="volume-slider-wrap"
      onMouseOver={() => (viewStore.volumeControlOpen = true)}
      onMouseOut={() => (viewStore.volumeControlOpen = false)}
    >
      <Card
        className={`volume-slider ${
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
