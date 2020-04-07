import React from 'react';

import { getUserTracksUrl } from '../../api';
import DataLoader from '../../hoc/DataLoader';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';

const UserTracks = ({ user }: { user: User }) => {
  return (
    <DataLoader
      url={getUserTracksUrl(user.id)}
      render={(props: any) => <DataGrid {...props} />}
    />
  );
};

export default UserTracks;
