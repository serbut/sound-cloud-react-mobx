import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {CircularProgress} from 'material-ui/Progress';
import './Track.less';
import {loadTrack} from '../../api';
import Error from '../Error';
import TrackView from '../Track/TrackView';

@observer
class Track extends React.Component {
  @observable track;
  @observable isLoading;
  @observable error;

  componentDidMount() {
    this.loadTrack();
  }

  componentDidUpdate (prevProps) {
    const {user: nextUser, track: nextTrack} = prevProps.params;
    const {user, track} = this.props.params;

    if (nextUser !== user || nextTrack !== track) {
      this.loadTrack();
    }
  }

  loadTrack() {
    const { params: {user, track} } = this.props;

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
      <TrackView track={track} router={this.props.router}></TrackView>
    )
  }
}

export default Track;
