import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { CircularProgress } from 'material-ui/Progress';
import Text from 'material-ui/Text';

import './Playlist.less';
import UserCard from '../components/UserCard';
import DataGrid from '../components/DataGrid';
import { loadPlaylist } from '../api';
import { formatDuration, fromNow, getImageUrl } from '../utils';
import { IMAGE_SIZES } from '../constants';

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
        viewStore.title = playlist.title;
      });
  }

  render() {
    const { playlist } = this;

    if (!playlist) {
      return <div className='loader-wrap'><CircularProgress /></div>;
    }

    return (
      <div>
        <div className='playlist-header'>
          <div className='container playlist-header__row'>
            <img src={getImageUrl(playlist.artwork_url, IMAGE_SIZES.t200x200)}
              alt="playlsit.title" width='184' height= '184' />
            <div className='playlist-header__details'>
              <Text type='display1'>{playlist.title}</Text>
              <Text type='subheading' gutterBottom>
                {playlist.track_count} tracks <span className='bullet'>&bull;</span>
                {formatDuration(playlist.duration)} <span className='bullet'>&bull;</span>
                {fromNow(playlist.created_at)} <span className='bullet'>&bull;</span>
                {playlist.genre}
              </Text>
            </div>
            <div className='playlist-user'>
              <UserCard user={playlist.user} />
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
