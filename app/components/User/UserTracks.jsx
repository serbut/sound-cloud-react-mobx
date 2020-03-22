import React from 'react';

import { getUserTracksUrl } from '../../api';
import DataLoader from '../../hoc/DataLoader';
import DataGrid from '../DataGrid';

const UserTracks = ({ user }) => {
  return (
    <DataLoader
      url={getUserTracksUrl(user.id)}
      render={props => <DataGrid {...props} />}
    />
  );
};

export default UserTracks;
