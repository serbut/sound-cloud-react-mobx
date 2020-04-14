import { Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../app-context';
import DataGrid from '../DataGrid';
import DataLoader from '../DataLoader';

const Search = () => {
  const {
    api: {
      getSearchTracksByTagRequest,
      getSearchTracksRequest,
      getSearchUsersRequest,
    },
  } = useContext(AppContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  const where = searchParams.get('where') || '';
  const searchTag = query?.charAt(0) === '#';
  const searchUser = !searchTag && where === 'users';
  const searchTrack = !searchTag && where === 'tracks';
  const request = searchTag
    ? getSearchTracksByTagRequest(query.slice(1))
    : searchUser
    ? getSearchUsersRequest(query)
    : searchTrack
    ? getSearchTracksRequest(query)
    : null;

  if (!request) {
    return null;
  }

  return (
    <div className="container">
      <Typography variant="h3" style={{ margin: '70px 0 20px 0' }}>
        Results for <span style={{ color: '#3f51b5' }}>{query}</span>
        {searchTag && ' tag:'}
        {searchUser && ' in users:'}
        {searchTrack && ' in tracks:'}
      </Typography>

      <DataLoader
        url={request.url}
        params={request.params}
        render={(props: any) => <DataGrid {...props} />}
      />
    </div>
  );
};

export default observer(Search);
