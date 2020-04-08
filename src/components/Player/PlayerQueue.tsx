import {
  Avatar,
  Card,
  CardActions,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { VolumeUp } from '@material-ui/icons';
import { observer } from 'mobx-react';
import React from 'react';
import { AppContext } from '../../app-context';
import { Track } from '../../models/track';

import { getImageUrl, isElementInViewport } from '../../utils';
import './PlayerQueue.css';

const PER_PAGE = 30;

// TODO: use dialog, maybe fullscreen dialog
@observer
class PlayerQueue extends React.Component {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  componentDidUpdate() {
    const { style } = document.body;

    if (!this.context.viewStore.playlistOpen) {
      style.overflow = '';
      style.paddingRight = '';
      return;
    }

    style.overflow = 'hidden';
    style.paddingRight = '17px';

    const { track } = this.context.playerStore;

    if (!track) {
      return;
    }

    const el = document.querySelector(`.PlayerQueue [data-id='${track.id}']`);

    el && !isElementInViewport(el) && el.scrollIntoView();
  }

  render() {
    const { playerStore, viewStore } = this.context;

    if (!viewStore.playlistOpen) {
      return null;
    }

    const { items, trackIndex } = playerStore.queue;

    if (!trackIndex) {
      return null;
    }

    const from = Math.max(0, trackIndex - PER_PAGE / 2);
    const to = Math.min(from + PER_PAGE, items.length);
    // const loading = playerStore.queue.isLoading ? 'loading...' : '';

    return (
      <div className="PlayerQueue" onClick={(e) => e.stopPropagation()}>
        <Card>
          <div className="PlayerQueue-inner">
            <List>
              {items.slice(from, to).map((track: Track, i: number) => (
                <ListItem
                  key={track.permalink + i}
                  button
                  divider
                  dense
                  data-id={track.id}
                  onClick={() => playerStore.playTrack(track)}
                >
                  {playerStore.isSelected(track) ? (
                    <ListItemIcon>
                      <VolumeUp />
                    </ListItemIcon>
                  ) : (
                    <ListItemAvatar>
                      <Avatar
                        src={getImageUrl(track.artwork_url)}
                        className="list-avatar"
                      />
                    </ListItemAvatar>
                  )}
                  <ListItemText
                    primary={track.title}
                    secondary={track.user.username}
                    className="list-item-text-nowrap"
                  />
                </ListItem>
              ))}
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
