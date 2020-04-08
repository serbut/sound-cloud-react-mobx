import React, { useContext } from 'react';

import { AppContext } from '../../app-context';
import DataLoader from '../../hoc/DataLoader';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';

const UserTracks = ({ user }: { user: User }) => {
  const { api } = useContext(AppContext);

  return (
    <DataLoader
      url={api.getUserTracksUrl(user.id)}
      render={(props: any) => <DataGrid {...props} />}
    />
  );
};

export default UserTracks;
