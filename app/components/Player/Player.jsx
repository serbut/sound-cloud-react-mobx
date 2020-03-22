import './Player.less';

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
import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { getImageUrl } from '../../utils';
import PlayerQueue from './PlayerQueue';
import VolumeControl from './VolumeControl';

@inject('sessionStore', 'viewStore', 'playerStore')
@observer
class Player extends React.Component {
  onQueueClick = e => {
    e.stopPropagation();
    this.props.viewStore.togglePlaylist(e);
  };

  render() {
    const {
      viewStore,
      sessionStore,
      playerStore: store,
      playerStore: { track },
    } = this.props;
    // const color = 'blue';

    if (!track) return null;

    const progressPercent = Math.round(
      (store.progress / (track.duration / 1000)) * 100
    );
    // const bufferedPercent = Math.round(
    //     (store.buffered / (track.duration / 1000)) * 100
    // );
    // const bgGradient = `linear-gradient(to right, transparent 0%, ${color} ${progressPercent}%, transparent ${progressPercent}%)`;

    return (
      <div className="player">
        <LinearProgress
          variant="determinate"
          value={progressPercent}
          className="player__progress-bar"
        />
        {/*onChange={(e, value) => store.setProgress(value)}*/}

        {/*<div className='player__bg-progress'
          style={{background: bgGradient}}>
          <img src={track.waveform_url} />
        </div>*/}

        <div
          className={'player__preloader' + (store.isLoading ? ' visible' : '')}
        >
          <CircularProgress />
        </div>

        <div className="player__inner">
          <div className="player__group player__group--left">
            <img
              className="player__track-artwork"
              src={getImageUrl(track.artwork_url)}
              width={64}
              height={64}
            />
            <div className="player__track-details">
              <Typography variant="subtitle2" noWrap>
                <Link
                  to={`/users/${track.user.permalink}/tracks/${track.permalink}`}
                  title={track.title}
                  className="link"
                >
                  {track.title}
                </Link>
              </Typography>
              <Typography variant="subtitle1" noWrap>
                <Link to={`/users/${track.user.permalink}`} className="link">
                  {track.user.username}
                </Link>
              </Typography>
            </div>
          </div>

          <div className="player__group player__group--center">
            <IconButton
              color={sessionStore.isLiked(track) ? 'primary' : 'default'}
              onClick={() => sessionStore.toggleLike(track)}
            >
              <Favorite />
            </IconButton>
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

          <div className="player__group player__group--right">
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
