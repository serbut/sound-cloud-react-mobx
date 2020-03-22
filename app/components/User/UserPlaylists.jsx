import React from 'react';

import { getUserPlaylistsUrl, USER_PLAYLISTS_PARAMS } from '../../api';
import DataLoader from '../../hoc/DataLoader';
import DataGrid from '../DataGrid';

const UserPlaylists = ({ user }) => {
  return (
    <DataLoader
      url={getUserPlaylistsUrl(user.id)}
      params={USER_PLAYLISTS_PARAMS}
      render={props => <DataGrid {...props} />}
    />
  );
};

export default UserPlaylists;
