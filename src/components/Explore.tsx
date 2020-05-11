import { Box, Container } from '@material-ui/core';
import qs from 'qs';
import React, { useContext } from 'react';
import {
  Redirect,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import { AppContext } from '../app-context';
import useCollectionDataLoader from '../hooks/use-collection-data-loader';
import { Track } from '../models/track';
import DataGrid from './DataGrid';
import { ExploreTabs } from './ExploreTabs';

export type ExploreTab = {
  value: string;
  label: string;
};

const TABS: ExploreTab[] = [
  { value: 'ambient', label: 'Ambient' },
  { value: 'deephouse', label: 'Deep House' },
  { value: 'electronic', label: 'Electronic' },
  { value: 'house', label: 'House' },
  { value: 'techno', label: 'Techno' },
  { value: 'trap', label: 'Trap' },
  { value: 'hiphop', label: 'Hip Hop' },
  { value: 'dance', label: 'Dance' },
  { value: 'pop', label: 'Pop' },
  { value: 'drumandbass', label: 'Drum & Bass' },
];

const Explore = () => {
  const history = useHistory();
  const location = useLocation();
  const { path } = useRouteMatch();
  const { api } = useContext(AppContext);
  const genre = new URLSearchParams(location.search).get('genre');
  const dataLoaderProps = useCollectionDataLoader<Track>(api.endpoints.tracks, {
    ...api.paginationParams,
    tags: genre,
  });

  const handleChange = (event: React.ChangeEvent<{}>, index: number) => {
    history.push({
      pathname: path,
      search: qs.stringify({
        genre: TABS[index].value,
      }),
    });
  };

  if (!genre) {
    return (
      <Redirect
        to={{
          pathname: path,
          search: qs.stringify({
            genre: TABS[0].value,
          }),
        }}
      />
    );
  }

  const currentTabIndex = TABS.findIndex((tab) => tab.value === genre);

  return (
    <div>
      <ExploreTabs
        tabs={TABS}
        currentTabIndex={currentTabIndex}
        handleChange={handleChange}
      />

      <Container>
        <Box py={3}>
          <DataGrid {...dataLoaderProps} />
        </Box>
      </Container>
    </div>
  );
};

export default Explore;
