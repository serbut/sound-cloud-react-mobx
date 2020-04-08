import React, { useContext } from 'react';

import { AppContext } from '../../app-context';
import DataLoader from '../../hoc/DataLoader';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';

const UserFollowings = ({ user }: { user: User }) => {
  const { api } = useContext(AppContext);

  return (
    <DataLoader
      url={api.getUserFollowingsUrl(user.id)}
      render={(props: any) => <DataGrid {...props} />}
    />
  );
};

export default UserFollowings;
