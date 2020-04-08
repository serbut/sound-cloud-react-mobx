import {
  CircularProgress,
  IconButton,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import {
  Favorite,
  Pause,
  PlayArrow,
  QueueMusic,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from '@material-ui/icons';
import { observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../app-context';

import { getImageUrl } from '../../utils';
import './Player.css';
import PlayerQueue from './PlayerQueue';
import VolumeControl from './VolumeControl';

@observer
class Player extends React.Component {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  onQueueClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    this.context.viewStore.togglePlaylist();
  };

  render() {
    const {
      viewStore,
      sessionStore,
      playerStore: store,
      playerStore: { track },
    } = this.context;

    if (!track) {
      return null;
    }

    const progressPercent = Math.round(
      (store.progress / (track.duration / 1000)) * 100
    );

    // TODO: remove?
    // const color = 'blue';
    // const bufferedPercent = Math.round(
    //     (store.buffered / (track.duration / 1000)) * 100
    // );
    // const bgGradient = `linear-gradient(to right, transparent 0%, ${color} ${progressPercent}%, transparent ${progressPercent}%)`;

    return (
      <div className="Player">
        <LinearProgress
          variant="determinate"
          value={progressPercent}
          className="Player-progress-bar"
        />
        {/*onChange={(e, value) => store.setProgress(value)}*/}

        {/*//TODO: remove?*/}
        {/*<div className="Player-bg-progress"
          style={{background: bgGradient}}>
          <img src={track.waveform_url} />
        </div>*/}

        <div
          className={'Player-preloader' + (store.isLoading ? ' visible' : '')}
        >
          <CircularProgress />
        </div>

        <div className="Player-inner">
          <div className="Player-group-left">
            <img
              className="Player-track-artwork"
              src={getImageUrl(track.artwork_url)}
              width={64}
              height={64}
              alt="Track artwork"
            />
            <div className="Player-track-details">
              <Typography variant="subtitle1" noWrap>
                <Link
                  to={`/users/${track.user.permalink}/tracks/${track.permalink}`}
                  title={track.title}
                >
                  {track.title}
                </Link>
                <IconButton
                  size="small"
                  color={sessionStore.isLiked(track) ? 'primary' : 'default'}
                  onClick={() => sessionStore.toggleLike(track)}
                  style={{ marginLeft: 5 }}
                >
                  <Favorite fontSize="inherit" />
                </IconButton>
              </Typography>
              <Typography variant="subtitle2" noWrap>
                <Link to={`/users/${track.user.permalink}`}>
                  {track.user.username}
                </Link>
              </Typography>
            </div>
          </div>

          <div className="Player-group-center">
            <IconButton
              color={store.loop ? 'primary' : 'default'}
              onClick={() => store.toggleLoop()}
            >
              <Repeat />
            </IconButton>
            <IconButton
              disabled={!store.queue.prevTrack}
              onClick={() => store.playPrev()}
            >
              <SkipPrevious />
            </IconButton>
            <IconButton color="primary" onClick={() => store.playTrack()}>
              {store.isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton
              disabled={!store.queue.nextTrack}
              onClick={() => store.playNext()}
            >
              <SkipNext />
            </IconButton>
            <IconButton
              color={store.shuffle ? 'primary' : 'default'}
              onClick={() => store.toggleShuffle()}
            >
              <Shuffle />
            </IconButton>
          </div>

          <div className="Player-group-right">
            <VolumeControl />

            <IconButton
              color={viewStore.playlistOpen ? 'primary' : 'default'}
              onClick={this.onQueueClick}
            >
              <QueueMusic />
            </IconButton>

            <PlayerQueue />
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
