import DataLoader from '../../hoc/DataLoader';
import DataGrid from '../DataGrid';
import React from 'react';
import {getUserTracksUrl} from '../../api';

const UserTracks = ({user}) => {
  return <DataLoader
    url={getUserTracksUrl(user.id)}
    render={(props) =>
      <DataGrid {...props} />
    }
  />
};

export default UserTracks;
