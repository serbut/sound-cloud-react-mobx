import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import useCollectionDataLoader from '../../hooks/use-collection-data-loader';
import { Playlist } from '../../models/playlist';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';

const UserPlaylists = ({ user }: { user: User }) => {
  const { api } = useContext(AppContext);
  const dataLoaderProps = useCollectionDataLoader<Playlist>(
    api.endpoints.userPlaylists(user.id),
    {
      ...api.paginationParams,
      representation: 'compact',
    }
  );

  return <DataGrid {...dataLoaderProps} />;
};

export default UserPlaylists;
