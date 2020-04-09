import { CircularProgress } from '@material-ui/core';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../app-context';

import { Playlist } from '../../models/playlist';
import DataGrid from '../DataGrid';
import Error from '../Error';
import PlaylistHeader from './PlaylistHeader';

const PlaylistComponent = () => {
  const { user: userID, playlist: playlistID } = useParams();
  const { api } = useContext(AppContext);
  const [playlist, setPlaylist] = useState<Playlist | undefined>();
  const [isLoading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    if (!userID || !playlistID) {
      return;
    }

    setError(false);
    setLoading(true);

    api
      .loadPlaylist(userID, playlistID)
      .then(action((playlist) => setPlaylist(playlist)))
      .catch(action(() => setError(true)))
      .finally(() => setLoading(false));
  }, [userID, playlistID, api]);

  if (isLoading) {
    return (
      <div className="loader-wrap">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <Error>Failed to load playlist</Error>;
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
};

export default observer(PlaylistComponent);
