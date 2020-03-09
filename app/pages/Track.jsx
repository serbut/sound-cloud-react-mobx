import React from 'react';
import {observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import Chip from 'material-ui/Chip';
import Text from 'material-ui/Text';
import {CircularProgress} from 'material-ui/Progress';
import './Track.less';
import Comments from '../components/Comments';
import {getTags} from '../utils';
import {loadTrack} from '../api';
import Error from '../components/Error';
import TrackHeader from '../components/TrackHeader';

@observer
class Track extends React.Component {
  @observable track;
  @observable isLoading;
  @observable error;

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

  loadTrack({params: {user, track}}) {
    this.isLoading = true;

    loadTrack(user, track)
      .then(track => {
        this.track = track;
        this.isLoading = false;
      })
      .catch(err => {
        this.error = 'Failed to load track';
        this.isLoading = false;
      })
  }

  handleTagClick(q) {
    this.props.router.push({ pathname: `/search`, query: { q, where: 'tracks' } });
  }

  render() {
    const { track, isLoading, error } = this;

    if (isLoading) {
      return <div className='loader-wrap'><CircularProgress/></div>;
    }

    if (error) {
      return <Error>{error}</Error>
    }

    if (!track) {
      return null;
    }

    return (
      <div className='animated fadeIn'>
        <TrackHeader track={track}></TrackHeader>

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
