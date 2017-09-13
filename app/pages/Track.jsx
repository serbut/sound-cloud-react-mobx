import React from 'react';
import { Link } from 'react-router';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Text from 'material-ui/Text';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';

import './Track.less';
import Comments from '../components/Comments';
import TrackCard from '../components/TrackCard';
import UserCard from '../components/UserCard';
import DataLoader from '../hoc/DataLoader';
import { formatDuration, fromNow, formatNumber, getTags } from '../utils';
import { loadTrack } from '../api';

// const URL = 'https://wis.sndcdn.com/';
// const NEW_URL = 'https://w1.sndcdn.com/';

// this.waveform_url = this.waveform_url
//       .replace(URL, NEW_URL)
//       .replace('.json', '.png');

@inject('sessionStore', 'viewStore') @observer
class Track extends React.Component {
  @observable track;

  componentDidMount() {
    this.loadTrack(this.props);
  }

  componentWillReceieveProps(nextProps, nextState) {
    this.loadTrack(nextProps);
  }

  loadTrack({params: {user, track}, viewStore}) {
    loadTrack.call(this, user, track)
      .then(track => {
        this.track = track;
        viewStore.title = track.title;
        this.props.loadData(`tracks/${this.track.id}/comments`);
      });
  }

  handleTagClick(q) {
    this.props.router.push({ pathname: `/search/tracks`, query: { q } });
  }

  render() {
    const { sessionStore, data, isLoading, loadMore, isLastPage } = this.props;
    const { track } = this;

    if (!track)
      return <div className='loader-wrap'><CircularProgress /></div>

    return (
      <div className='animated fadeIn'>
        <div className='track-header'>
          <div className='track-header__row container'>
            <div className='track-header__artwork'>
              <TrackCard track={track} tracks={[track]} compact />
            </div>
            <div className='track-header__details'>
              <Text type='display1'>{track.title}</Text>
              <Text type='subheading' gutterBottom>
                {formatDuration(track.duration)} <span className='bullet'>&bull;</span>
                {fromNow(track.created_at)} <span className='bullet'>&bull;</span>
                {track.genre}
              </Text>
              <Text type='subheading'>
                {formatNumber(track.playback_count)} plays <span className='bullet'>&bull;</span>
                {formatNumber(track.favoritings_count || track.likes_count)} likes <span className='bullet'>&bull;</span>
                {formatNumber(track.reposts_count)} reposts <span className='bullet'>&bull;</span>
                {formatNumber(track.comment_count)} comments
              </Text>
            </div>
            {sessionStore.isLiked(track) ?
              <Button raised primary onTouchTap={() => sessionStore.toggleLike(track)}>Liked</Button> :
              <Button raised accent onTouchTap={() => sessionStore.toggleLike(track)}>Like</Button>
            }
          </div>
        </div>

        <div className='container' style={{ display: 'flex' }}>
          <div className='track-user'>
            <UserCard user={track.user} />
          </div>

          <div style={{flex: 1}}>
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

            <Comments comments={data} loadMore={loadMore} isLoading={isLoading} isLastPage={isLastPage} />
          </div>
        </div>
      </div >
    )
  }
}

export default DataLoader(Track);
