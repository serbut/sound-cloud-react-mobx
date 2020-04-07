import { CircularProgress } from '@material-ui/core';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { loadTrack } from '../../api';
import { Track } from '../../models/track';
import Error from '../Error';
import TrackView from '../Track/TrackView';

type TrackProps = RouteComponentProps<{ user: string; track: string }>;

@observer
class TrackComponent extends React.Component<TrackProps> {
  @observable track: Track | undefined;
  @observable isLoading: boolean = false;
  @observable error: string | undefined;

  componentDidMount() {
    this.loadTrack();
  }

  componentDidUpdate(prevProps: TrackProps) {
    const { user: nextUser, track: nextTrack } = prevProps.match.params;
    const { user, track } = this.props.match.params;

    if (nextUser !== user || nextTrack !== track) {
      this.loadTrack();
    }
  }

  loadTrack() {
    const { user, track } = this.props.match.params;

    this.isLoading = true;

    loadTrack(user, track)
      .then((track) => {
        this.track = track;
        this.isLoading = false;
      })
      .catch(() => {
        this.error = 'Failed to load track';
        this.isLoading = false;
      });
  }

  render() {
    const { track, isLoading, error } = this;

    if (isLoading) {
      return (
        <div className="loader-wrap">
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return <Error>{error}</Error>;
    }

    if (!track) {
      return null;
    }

    return <TrackView track={track} history={this.props.history} />;
  }
}

export default withRouter(TrackComponent);
