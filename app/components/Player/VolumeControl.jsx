import {Card, CardContent, IconButton} from '@material-ui/core';
import {VolumeDown, VolumeMute, VolumeOff, VolumeUp} from '@material-ui/icons';
import {inject, observer} from 'mobx-react';
import React from 'react';

import './VolumeControl.less';

const VolumeContol = ({ playerStore: store, viewStore }) => {
  return (
    <div className='volume-slider-wrap'
      onMouseOver={() => viewStore.volumeControlOpen = true}
      onMouseOut={() => viewStore.volumeControlOpen = false}
    >
      <Card className={`volume-slider ${viewStore.volumeControlOpen ? 'visible' : ''}`}>
        <CardContent>{store.volume}</CardContent>
      </Card>

      <IconButton onClick={() => store.toggleMuted()} >
        {store.muted ? <VolumeOff/> :
          store.volume === 1 ? <VolumeUp/> :
            store.volume === 0 ? <VolumeMute/> :
              <VolumeDown/>}
      </IconButton>
    </div>
  );
};

export default inject('playerStore', 'viewStore')(observer(VolumeContol));
