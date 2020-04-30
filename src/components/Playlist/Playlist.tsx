import { Container } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../app-context';
import useDataLoader from '../../hooks/use-data-loader';
import { Playlist } from '../../models/playlist';
import DataGrid from '../DataGrid';
import Error from '../Error';
import { Spinner } from '../Spinner';
import PlaylistHeader from './PlaylistHeader';

const PlaylistComponent = () => {
  const { user: userId, playlist: playlistId } = useParams();
  const { api } = useContext(AppContext);
  const { data: playlist, isLoading, error } = useDataLoader<Playlist>(
    userId && playlistId && api.endpoints.playlist(userId, playlistId)
  );

  if (isLoading) {
    return <Spinner />;
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

      <Container>
        <DataGrid
          data={playlist.tracks}
          isLastPage={true}
          isLoading={false}
          error={error}
        />
      </Container>
    </div>
  );
};

export default observer(PlaylistComponent);
