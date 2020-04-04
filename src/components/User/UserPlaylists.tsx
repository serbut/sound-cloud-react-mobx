import React from 'react';

import { getUserPlaylistsUrl, USER_PLAYLISTS_PARAMS } from '../../api';
import DataLoader from '../../hoc/DataLoader';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';

const UserPlaylists = ({ user }: { user: User }) => {
  return (
    <DataLoader
      url={getUserPlaylistsUrl(user.id)}
      params={USER_PLAYLISTS_PARAMS}
      render={(props: any) => <DataGrid {...props} />}
    />
  );
};

export default UserPlaylists;
