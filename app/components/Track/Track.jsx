import {CircularProgress} from '@material-ui/core';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import React from 'react';
import {withRouter} from 'react-router-dom';
import {loadTrack} from '../../api';
import Error from '../Error';
import TrackView from '../Track/TrackView';
import './Track.less';

@observer
class Track extends React.Component {
  @observable track;
  @observable isLoading;
  @observable error;

  componentDidMount() {
    this.loadTrack();
  }

  componentDidUpdate (prevProps) {
    const {user: nextUser, track: nextTrack} = prevProps.match.params;
    const {user, track} = this.props.match.params;

    if (nextUser !== user || nextTrack !== track) {
      this.loadTrack();
    }
  }

  loadTrack() {
    const { user, track } = this.props.match.params;

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
      <TrackView track={track} history={this.props.history}></TrackView>
    )
  }
}

export default withRouter(Track);
