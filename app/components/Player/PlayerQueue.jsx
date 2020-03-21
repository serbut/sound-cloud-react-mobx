import React from 'react';
import {inject, observer} from 'mobx-react';
import {Card, CardActions, CardHeader, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, ListItemAvatar} from '@material-ui/core';
import {VolumeUp} from '@material-ui/icons';
import './PlayerQueue.less';
import {getImageUrl, isElementInViewport} from '../../utils';

const PER_PAGE = 30;

// TODO: use dialog, maybe fullscreen dialog
@inject('viewStore', 'playerStore') @observer
class PlayerQueue extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const { style } = document.body;

    if (!prevProps.viewStore.playlistOpen) {
      style.overflow = null;
      style.paddingRight = null;
      return;
    }

    style.overflow = 'hidden';
    style.paddingRight = '17px';
    const el = document.querySelector(`.player-queue [data-id='${this.props.playerStore.track.id}']`);
    el && !isElementInViewport(el) && el.scrollIntoView();
  }

  render() {
    const { playerStore, viewStore } = this.props;

    if (!viewStore.playlistOpen)
      return null;

    const { items, trackIndex } = playerStore.queue;
    const from = Math.max(0, trackIndex - PER_PAGE / 2);
    const to = Math.min(from + PER_PAGE, items.length);
    const loading = playerStore.queue.isLoading ? 'loading...' : '';

    return (
      <div className='player-queue' onClick={e => e.stopPropagation()}>
        <Card>
          <div className='player-queue__inner'>
            <List>
              {items.slice(from, to).map((track, i) =>
                <ListItem key={track.permalink + i} button divider dense data-id={track.id}
                  onClick={() => playerStore.playTrack(track)}
                >
                  {playerStore.isSelected(track)
                    ? <ListItemIcon><VolumeUp/></ListItemIcon>
                    : <ListItemAvatar>
                        <Avatar src={getImageUrl(track.artwork_url)} className='list-avatar' />
                      </ListItemAvatar>
                  }
                  <ListItemText
                    primary={track.title}
                    secondary={track.user.username}
                    className='list-item-text-nowrap'
                  />
                </ListItem>
              )}
            </List>
          </div>
          <CardActions style={{ justifyContent: 'center' }}>
            {/*TODO: move to settings page*/}
            {/*<LabelSwitch*/}
            {/*  checked={playerStore.skipPreviews}*/}
            {/*  onChange={(event, checked) => playerStore.toggleSkipPreviews()}*/}
            {/*  label="Skip Previews"*/}
            {/*/>*/}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default PlayerQueue;
