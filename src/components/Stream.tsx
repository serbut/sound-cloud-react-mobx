import { Box, Container } from '@material-ui/core';
import React, { useContext } from 'react';
import { AppContext } from '../app-context';
import useCollectionDataLoader from '../hooks/use-collection-data-loader';
import { CollectionItem } from '../models/api';
import { Playlist } from '../models/playlist';
import { Track } from '../models/track';
import DataGrid from './DataGrid';

const Stream = () => {
  const { api } = useContext(AppContext);
  const { data, ...otherProps } = useCollectionDataLoader<CollectionItem>(
    api.endpoints.stream,
    api.paginationParams
  );

  const formatData = (data: CollectionItem[]) => {
    return data.map((i) => i.origin).filter((i): i is Track | Playlist => !!i);
  };

  return (
    <Container>
      <Box py={3}>
        <DataGrid data={formatData(data)} {...otherProps} />
      </Box>
    </Container>
  );
};

export default Stream;
