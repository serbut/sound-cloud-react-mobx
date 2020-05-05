import { Box, Container, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../app-context';
import useCollectionDataLoader from '../../hooks/use-collection-data-loader';
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

  const dataLoaderProps = useCollectionDataLoader<Track | User>(request.url, {
    ...paginationParams,
    ...request.params,
  });

  return (
    <Container>
      <Box py={6}>
        <Typography variant="h2" gutterBottom>
          Results for{' '}
          <Typography variant="h2" color="primary" display="inline">
            {query}
          </Typography>
          {searchTag && ' tag:'}
          {searchUser && ' in users:'}
          {searchTrack && ' in tracks:'}
        </Typography>

        <DataGrid {...dataLoaderProps} />
      </Box>
    </Container>
  );
};

export default observer(Search);
