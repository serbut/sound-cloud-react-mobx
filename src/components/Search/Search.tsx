import { Container, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../app-context';
import useDataLoader from '../../hooks/use-data-loader';
import { Track } from '../../models/track';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';

const Search = () => {
  const {
    api: { endpoints, paginationParams },
  } = useContext(AppContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  const where = searchParams.get('where') || '';
  const searchTag = query?.charAt(0) === '#';
  const searchUser = !searchTag && where === 'users';
  const searchTrack = !searchTag && where === 'tracks';
  const request = searchTag
    ? { url: endpoints.tracks, params: { tags: query.slice(1) } }
    : searchUser
    ? { url: endpoints.users, params: { q: query } }
    : searchTrack
    ? { url: endpoints.tracks, params: { q: query } }
    : {};

  const dataLoaderProps = useDataLoader<(Track | User)[]>(request.url, {
    ...paginationParams,
    ...request.params,
  });

  return (
    <Container>
      <Typography variant="h3" style={{ margin: '70px 0 20px 0' }}>
        Results for <span style={{ color: '#3f51b5' }}>{query}</span>
        {searchTag && ' tag:'}
        {searchUser && ' in users:'}
        {searchTrack && ' in tracks:'}
      </Typography>

      <DataGrid {...dataLoaderProps} />
    </Container>
  );
};

export default observer(Search);
