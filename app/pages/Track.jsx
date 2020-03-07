import React from 'react';
import {observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import Chip from 'material-ui/Chip';
import Text from 'material-ui/Text';
import {CircularProgress} from 'material-ui/Progress';
import Button from 'material-ui/Button';
import './Track.less';
import Comments from '../components/Comments';
import TrackCard from '../components/TrackCard';
import {formatDuration, formatNumber, fromNow, getTags} from '../utils';
import {loadTrack} from '../api';
import {Link} from "react-router";

@inject('sessionStore', 'viewStore') @observer
class Track extends React.Component {
  @observable track;
  @observable isLoading;

  componentDidMount() {
    this.loadTrack(this.props);
  }

  componentWillReceiveProps (nextProps, nextState) {
    const {user: nextUser, track: nextTrack} = nextProps.params;
    const {user, track} = this.props.params;

    if (nextUser !== user || nextTrack !== track) {
      this.loadTrack(nextProps);
    }
  }

  loadTrack({params: {user, track}, viewStore}) {
    this.isLoading = true;

    loadTrack(user, track)
      .then(track => {
        this.track = track;
        this.isLoading = false;
        viewStore.title = `${track.user.username} - ${track.title} (Single)`;
      });
  }

  handleTagClick(q) {
    this.props.router.push({ pathname: `/search/tracks`, query: { q } });
  }

  render() {
    const { sessionStore } = this.props;
    const { track, isLoading = true } = this;

    if (isLoading) {
      return <div className='loader-wrap'><CircularProgress/></div>;
    }

    const { user } = track;

    return (
      <div className='animated fadeIn'>
        <div className='track-header'>
          <div className='track-header__row container'>
            <div className='track-header__artwork'>
              <TrackCard track={track} compact />
            </div>
            <div className='track-header__details'>
              <Text type='subheading'>Single</Text>
              <Text type='display1' gutterBottom>{track.title}</Text>
              <Text type="subheading" gutterBottom>by <Link to={`/users/${user.permalink}`} className='link link--blue'>{user.username}</Link></Text>
              <Text type='subheading' gutterBottom>
                {fromNow(track.created_at)} <span className='bullet'>&bull;</span>
                {formatDuration(track.duration)} <span className='bullet'>&bull;</span>
                {track.genre} <span className='bullet'>&bull;</span>
                {formatNumber(track.playback_count)} plays <span className='bullet'>&bull;</span>
                {formatNumber(track.favoritings_count || track.likes_count)} likes <span className='bullet'>&bull;</span>
                {formatNumber(track.reposts_count)} reposts <span className='bullet'>&bull;</span>
                {formatNumber(track.comment_count)} comments
              </Text>
              {sessionStore.isLiked(track) ?
                <Button raised primary onTouchTap={() => sessionStore.toggleLike(track)}>Liked</Button> :
                <Button raised accent onTouchTap={() => sessionStore.toggleLike(track)}>Like</Button>
              }
            </div>
          </div>
        </div>

        <div className='container'>
          {track.description &&
            <Text className='track-description'> <pre> {track.description} </pre> </Text>
          }
          {track.tag_list &&
            <div className='track-tags'>
              {getTags(track.tag_list).map((el, i) =>
                <Chip key={i} label={el} style={{ margin: 4 }} onClick={e => this.handleTagClick(el)} />)
              }
            </div>
          }

          <Comments trackId={track.id} />
        </div>
      </div >
    )
  }
}

export default Track;
