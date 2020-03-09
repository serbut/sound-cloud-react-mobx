import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {CircularProgress} from 'material-ui/Progress';
import './Playlist.less';
import DataGrid from '../DataGrid';
import {loadPlaylist} from '../../api';
import Error from '../Error';
import PlaylistHeader from './PlaylistHeader';

@observer
export default class Playlist extends Component {
  @observable playlist;
  @observable isLoading;
  @observable error;

  componentDidMount() {
    this.loadPlaylist();
  }

  componentDidUpdate(prevProps) {
    const {user: nextUser, playlist: nextPlaylist} = prevProps.params;
    const {user, playlist} = this.props.params;

    if (nextUser !== user || nextPlaylist !== playlist) {
      this.loadPlaylist();
    }
  }

  loadPlaylist() {
    const { params: { user, playlist } } = this.props;

    this.isLoading = true;

    loadPlaylist(user, playlist)
      .then(playlist => {
        this.playlist = playlist;
        this.isLoading = false;
      })
      .catch(err => {
        this.error = 'Failed to load playlist';
        this.isLoading = false;
      });
  }

  render() {
    const { playlist, isLoading, error } = this;

    if (isLoading) {
      return <div className='loader-wrap'><CircularProgress /></div>;
    }

    if (error) {
      return <Error>{error}</Error>;
    }

    if (!playlist) {
      return null;
    }

    return (
      <div>
        <PlaylistHeader playlist={playlist}></PlaylistHeader>

        <div className='container'>
          <DataGrid data={playlist.tracks} isLastPage={true} />
        </div>
      </div>
    );
  }
}
