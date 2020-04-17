import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import useDataLoader from '../../hooks/use-data-loader';
import { Playlist } from '../../models/playlist';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';

const UserPlaylists = ({ user }: { user: User }) => {
  const { api } = useContext(AppContext);
  const dataLoaderProps = useDataLoader<Playlist[]>(
    api.endpoints.userPlaylists(user.id),
    {
      ...api.paginationParams,
      representation: 'compact',
    }
  );

  return <DataGrid {...dataLoaderProps} />;
};

export default UserPlaylists;
