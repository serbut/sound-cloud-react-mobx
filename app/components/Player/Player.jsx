import {
  Button,
  CircularProgress,
  IconButton,
  LinearProgress,
  Typography
} from "@material-ui/core";
import {
  Favorite,
  PlayArrow,
  QueueMusic,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  Pause
} from "@material-ui/icons";
import { autorun } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { formatStreamUrl } from "../../api";
import { getImageUrl } from "../../utils";
import "./Player.less";
import PlayerQueue from "./PlayerQueue";
import VolumeControl from "./VolumeControl";

@inject("sessionStore", "viewStore", "playerStore")
@observer
export default class Player extends React.Component {
  componentDidMount() {
    const store = this.props.playerStore;

    this.audio = document.createElement("audio");
    this.audio.addEventListener("loadstart", e => store.setIsLoading(true));
    this.audio.addEventListener("canplaythrough", e =>
      store.setIsLoading(false)
    );
    this.audio.addEventListener("timeupdate", e =>
      store.setProgress(Math.round(e.target.currentTime))
    );
    // this.audio.addEventListener('progress',
    // e => store.setBuffered(Math.round(e.target.buffered.end(e.target.buffered.length - 1))));
    this.audio.addEventListener("ended", e => store.playNext());
    this.audio.addEventListener("error", this.handeMediaError.bind(this));

    this.dispose = autorun(() => {
      if (!store.track) return;

      // update src if needed
      const src = formatStreamUrl(store.track.stream_url);
      if (this.audio.currentSrc !== src) this.audio.src = src;

      // update progress if difference more then 1s
      if (Math.abs(Math.round(this.audio.currentTime) - store.progress) > 1)
        this.audio.currentTime = store.progress;

      // update pause/play
      const playPromise = store.isPlaying
        ? this.audio.play()
        : this.audio.pause();
      if (playPromise !== undefined && typeof playPromise.then === "function") {
        playPromise.then(null, e => {});
      }

      this.audio.muted = store.muted;
      this.audio.loop = store.loop;
      this.audio.volume = store.volume;
    });
  }

  handeMediaError(e) {
    this.props.playerStore.isLoading = false;

    switch (e.target.error.code) {
      case e.target.error.MEDIA_ERR_ABORTED:
        console.error("You aborted the video playback.");
        break;
      case e.target.error.MEDIA_ERR_NETWORK:
        console.error("A network error caused the audio download to fail.");
        break;
      case e.target.error.MEDIA_ERR_DECODE:
        console.error(
          "The audio playback was aborted due to a corruption problem or because the video used features your browser did not support."
        );
        break;
      case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
        console.error(
          "The video audio not be loaded, either because the server or network failed or because the format is not supported."
        );
        break;
      default:
        console.error("An unknown error occurred.");
        break;
    }
  }

  componentWillUnmount() {
    this.dispose();
    this.audio.pause();
  }

  onQueueClick = e => {
    e.stopPropagation();
    this.props.viewStore.togglePlaylist(e);
  };

  render() {
    const {
      viewStore,
      sessionStore,
      playerStore: store,
      playerStore: { track }
    } = this.props;
    const color = "blue";

    if (!track) return null;

    const progressPercent = Math.round(
      (store.progress / (track.duration / 1000)) * 100
    );
    const bufferedPercent = Math.round(
      (store.buffered / (track.duration / 1000)) * 100
    );
    const bgGradient = `linear-gradient(to right, transparent 0%, ${color} ${progressPercent}%, transparent ${progressPercent}%)`;

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
          className={"player__preloader" + (store.isLoading ? " visible" : "")}
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
              color={sessionStore.isLiked(track) ? "primary" : "default"}
              onClick={() => sessionStore.toggleLike(track)}
            >
              <Favorite />
            </IconButton>
            <IconButton
              color={store.loop ? "primary" : "default"}
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
              color={store.shuffle ? "primary" : "default"}
              onClick={() => store.toggleShuffle()}
            >
              <Shuffle />
            </IconButton>
          </div>

          <div className="player__group player__group--right">
            <VolumeControl />

            <IconButton
              color={viewStore.playlistOpen ? "primary" : "default"}
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
