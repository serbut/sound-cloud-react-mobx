import DataLoader from '../hoc/DataLoader';
import DataGrid from './DataGrid';
import React from 'react';

const UserPlaylists = ({user}) => {
  return <DataLoader
    url={`/users/${user.id}/playlists`}
    params={{representation: `compact`}}
    render={(props) =>
      <DataGrid {...props} />
    }
  />
};

export default UserPlaylists;
