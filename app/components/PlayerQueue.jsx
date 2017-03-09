import React from 'react';
import { Link } from 'react-router';
import { observer, inject } from 'mobx-react';
import { Card, CardHeader, CardContent, CardActions } from 'material-ui/Card';
import { List, ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import { LabelSwitch } from 'material-ui/Switch';

import './PlayerQueue.less';
import TrackCard from './TrackCard';
import { isElementInViewport, getImageUrl } from '../utils';

const PER_PAGE = 30;

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
          <CardHeader title={`Queue (${trackIndex + 1}/${items.length}) ${loading}`} />
          <Divider />
          <div className='player-queue__inner'>
            <List>
              {items.slice(from, to).map((track, i) =>
                <ListItem key={track.permalink + i} button divider dense data-id={track.id}
                  onTouchTap={() => playerStore.playTrack(track)}
                >
                  <Avatar src={getImageUrl(track.artwork_url)} className='list-avatar' />
                  <ListItemText primary={track.title} secondary={track.user.username}
                    title={track.title} className='list-item-text-nowrap' />
                  {playerStore.isSelected(track) ?
                    <ListItemIcon className='list-icon'><Icon>volume_up</Icon></ListItemIcon> : null}
                </ListItem>
              )}
            </List>
          </div>
          <CardActions style={{ justifyContent: 'center' }}>
            <LabelSwitch
              checked={playerStore.skipPreviews}
              onChange={(event, checked) => playerStore.toggleSkipPreviews()}
              label="Skip Previews"
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default PlayerQueue;
