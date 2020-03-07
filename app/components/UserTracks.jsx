import DataLoader from '../hoc/DataLoader';
import DataGrid from './DataGrid';
import React from 'react';

const UserTracks = ({user}) => {
  return <DataLoader
    url={`/users/${user.id}/tracks`}
    render={(props) =>
      <DataGrid {...props} />
    }
  />
};

export default UserTracks;
