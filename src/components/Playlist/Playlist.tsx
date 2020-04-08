import { CircularProgress } from '@material-ui/core';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppContext } from '../../app-context';

import { Playlist } from '../../models/playlist';
import DataGrid from '../DataGrid';
import Error from '../Error';
import PlaylistHeader from './PlaylistHeader';

type Props = RouteComponentProps<{ user: string; playlist: string }>;

@observer
class PlaylistComponent extends Component<Props> {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  @observable playlist: Playlist | undefined;
  @observable isLoading: boolean = false;
  @observable error: string | undefined;

  componentDidMount() {
    this.loadPlaylist();
  }

  componentDidUpdate(prevProps: Props) {
    const { user: nextUser, playlist: nextPlaylist } = prevProps.match.params;
    const { user, playlist } = this.props.match.params;

    if (nextUser !== user || nextPlaylist !== playlist) {
      this.loadPlaylist();
    }
  }

  loadPlaylist() {
    const {
      params: { user, playlist },
    } = this.props.match;

    this.isLoading = true;

    this.context.api
      .loadPlaylist(user, playlist)
      .then(
        action((playlist) => {
          this.playlist = playlist;
          this.isLoading = false;
        })
      )
      .catch(
        action(() => {
          this.error = 'Failed to load playlist';
          this.isLoading = false;
        })
      );
  }

  render() {
    const { playlist, isLoading, error } = this;

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

    if (!playlist) {
      return null;
    }

    return (
      <div>
        <PlaylistHeader playlist={playlist} />

        <div className="container">
          <DataGrid data={playlist.tracks} isLastPage={true} />
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistComponent);
