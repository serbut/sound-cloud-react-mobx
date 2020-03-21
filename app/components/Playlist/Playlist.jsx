import { CircularProgress } from '@material-ui/core';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loadPlaylist } from '../../api';
import DataGrid from '../DataGrid';
import Error from '../Error';
import './Playlist.less';
import PlaylistHeader from './PlaylistHeader';

@observer
class Playlist extends Component {
    @observable playlist;
    @observable isLoading;
    @observable error;

    componentDidMount() {
        this.loadPlaylist();
    }

    componentDidUpdate(prevProps) {
        const {
            user: nextUser,
            playlist: nextPlaylist,
        } = prevProps.match.params;
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

        loadPlaylist(user, playlist)
            .then(
                action(playlist => {
                    this.playlist = playlist;
                    this.isLoading = false;
                })
            )
            .catch(
                action(err => {
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
                <PlaylistHeader playlist={playlist}></PlaylistHeader>

                <div className="container">
                    <DataGrid data={playlist.tracks} isLastPage={true} />
                </div>
            </div>
        );
    }
}

export default withRouter(Playlist);
