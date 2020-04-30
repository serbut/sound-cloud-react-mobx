import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import useCollectionDataLoader from '../../hooks/use-collection-data-loader';
import { Track } from '../../models/track';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';

const UserTracks = ({ user }: { user: User }) => {
  const { api } = useContext(AppContext);
  const dataLoaderProps = useCollectionDataLoader<Track>(
    api.endpoints.userTracks(user.id),
    api.paginationParams
  );

  return <DataGrid {...dataLoaderProps} />;
};

export default UserTracks;
