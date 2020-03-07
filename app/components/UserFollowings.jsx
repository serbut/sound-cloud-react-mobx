import DataLoader from '../hoc/DataLoader';
import DataGrid from './DataGrid';
import React from 'react';
import {getUserFollowingsUrl} from '../api';

const UserFollowings = ({user}) => {
  return <DataLoader
    url={getUserFollowingsUrl(user.id)}
    render={(props) =>
      <DataGrid {...props} />
    }
  />
};

export default UserFollowings;
