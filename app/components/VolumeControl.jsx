import React from 'react';
import { inject, observer } from 'mobx-react';
import IconButton from 'material-ui/IconButton';
import { Card, CardHeader, CardContent } from 'material-ui/Card';

import './VolumeControl.less';

const VolumeContol = ({ playerStore: store, viewStore }) => {
  return (
    <div className='volume-slider-wrap'
      onMouseOver={() => viewStore.setVolumeControlOpen(true)}
      onMouseOut={() => viewStore.setVolumeControlOpen(false)}
    >
      <Card className={`volume-slider ${viewStore.volumeControlOpen ? 'visible' : ''}`}>
        <CardContent>{store.volume}</CardContent>
      </Card>

      <IconButton onTouchTap={() => store.toggleMuted()} >
        {store.muted ? 'volume_off' :
          store.volume === 1 ? 'volume_up' :
            store.volume === 0 ? 'volume_mute' :
              'volume_down'}
      </IconButton>
    </div>
  );
};

export default inject('playerStore', 'viewStore')(observer(VolumeContol));
