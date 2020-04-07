import React from 'react';

import { getUserFollowingsUrl } from '../../api';
import DataLoader from '../../hoc/DataLoader';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';

const UserFollowings = ({ user }: { user: User }) => {
  return (
    <DataLoader
      url={getUserFollowingsUrl(user.id)}
      render={(props: any) => <DataGrid {...props} />}
    />
  );
};

export default UserFollowings;
