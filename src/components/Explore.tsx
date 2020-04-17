import { Paper, Tab, Tabs } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AppContext } from '../app-context';
import useDataLoader from '../hooks/use-data-loader';
import { Track } from '../models/track';
import DataGrid from './DataGrid';

export const GENRES_MAP: {
  [key: string]: string;
} = {
  ambient: 'Ambient',
  deephouse: 'Deep House',
  electronic: 'Electronic',
  house: 'House',
  techno: 'Techno',
  trap: 'Trap',
  hiphop: 'Hip Hop',
  dance: 'Dance',
  pop: 'Pop',
  'drum&bass': 'Drum & Bass',
};

const GENRES_LIST: string[] = [];

for (const key in GENRES_MAP) {
  GENRES_LIST.push(key);
}

const Explore = () => {
  const history = useHistory();
  const location = useLocation();
  const { api } = useContext(AppContext);
  const genre = new URLSearchParams(location.search).get('genre');
  const dataLoaderProps = useDataLoader<Track[]>(api.endpoints.tracks, {
    ...api.paginationParams,
    tags: genre,
  });

  useEffect(() => {
    // TODO: somehow improve this maybe?
    const searchParams = new URLSearchParams();
    searchParams.append('genre', GENRES_LIST[0]);

    if (!genre) {
      history.replace({
        pathname: '/explore',
        search: searchParams.toString(),
      });
    }
  });

  const handleChange = (event: React.ChangeEvent<{}>, index: number) => {
    const searchParams = new URLSearchParams();
    searchParams.append('genre', GENRES_LIST[index]);

    history.push({
      pathname: '/explore',
      search: searchParams.toString(),
    });
  };

  if (!genre) {
    return null;
  }

  const currentTabIndex = GENRES_LIST.indexOf(genre);

  return (
    <div>
      {currentTabIndex !== -1 && (
        <Paper square>
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            value={currentTabIndex}
            onChange={handleChange}
          >
            {GENRES_LIST.map((el: string, i) => (
              <Tab key={i} label={GENRES_MAP[el]} />
            ))}
          </Tabs>
        </Paper>
      )}

      <div className="container" style={{ paddingTop: 48 + 48 }}>
        <DataGrid {...dataLoaderProps} />
      </div>
    </div>
  );
};

export default observer(Explore);
