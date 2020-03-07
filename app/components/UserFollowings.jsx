import DataLoader from '../hoc/DataLoader';
import DataGrid from './DataGrid';
import React from 'react';

const UserFollowings = ({user}) => {
  return <DataLoader
    url={`/users/${user.id}/followings`}
    render={(props) =>
      <DataGrid {...props} />
    }
  />
};

export default UserFollowings;
