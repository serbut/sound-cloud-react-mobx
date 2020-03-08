import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {CircularProgress} from 'material-ui/Progress';
import './Playlist.less';
import DataGrid from '../components/DataGrid';
import {loadPlaylist} from '../api';
import Error from '../components/Error';
import PlaylistHeader from '../components/PlaylistHeader';

@observer
export default class Playlist extends Component {
  @observable playlist;
  @observable isLoading;
  @observable error;

  componentDidMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const {user: nextUser, playlist: nextPlaylist} = nextProps.params;
    const {user, playlist} = this.props.params;

    if (nextUser !== user || nextPlaylist !== playlist) {
      this.loadData(nextProps);
    }
  }

  loadData({params: { user, playlist } }) {
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
