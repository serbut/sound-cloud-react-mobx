import React, {Component} from 'react';
import {observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import {CircularProgress} from 'material-ui/Progress';
import Text from 'material-ui/Text';
import './Playlist.less';
import DataGrid from '../components/DataGrid';
import {loadPlaylist} from '../api';
import {formatDuration, fromNow, getImageUrl} from '../utils';
import {IMAGE_SIZES} from '../constants';
import {Link} from "react-router";

@inject('sessionStore', 'viewStore', 'playerStore') @observer
export default class Playlist extends Component {
  @observable playlist;

  componentDidMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.loadData(nextProps);
  }

  loadData({params: { user, playlist }, viewStore }) {
    loadPlaylist(user, playlist)
      .then(playlist => {
        this.playlist = playlist;
        viewStore.title = `${playlist.user.username} - ${playlist.title}`;
      });
  }

  render() {
    const { playlist } = this;

    if (!playlist) {
      return <div className='loader-wrap'><CircularProgress /></div>;
    }

    const { user } = playlist;

    return (
      <div>
        <div className='playlist-header'>
          <div className='container playlist-header__row'>
            <img src={getImageUrl(playlist.artwork_url, IMAGE_SIZES.t200x200)}
              alt="playlsit.title" width='184' height= '184' />
            <div className='playlist-header__details'>
              <Text type="headline">PLAYLIST</Text>
              <Text type='display1' gutterBottom>{playlist.title}</Text>
              <Text type="subheading" gutterBottom>by <Link to={`/${user.permalink}`} className='link link--blue'>{user.username}</Link></Text>
              <Text type='subheading'>
                {fromNow(playlist.created_at)} <span className='bullet'>&bull;</span>
                {playlist.track_count} tracks, &nbsp;
                {formatDuration(playlist.duration)} <span className='bullet'>&bull;</span>
                {playlist.genre}
              </Text>
            </div>
          </div>
        </div>

        <div className='container'>
          <DataGrid data={playlist.tracks} isLastPage={true} />
        </div>
      </div>
    );
  }
}
