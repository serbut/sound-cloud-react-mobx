import React, { useContext } from 'react';

import { AppContext } from '../../app-context';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';
import DataLoader from '../DataLoader';

const UserPlaylists = ({ user }: { user: User }) => {
  const { api } = useContext(AppContext);

  return (
    <DataLoader
      url={api.getUserPlaylistsUrl(user.id)}
      params={api.USER_PLAYLISTS_PARAMS}
      render={(props: any) => <DataGrid {...props} />}
    />
  );
};

export default UserPlaylists;
