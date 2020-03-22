import { Paper, Tab, Tabs } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { getSearchTracksByTagRequest } from '../api';
import DataLoader from '../hoc/DataLoader';
import DataGrid from './DataGrid';

export const GENRES_MAP = {
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

const GENRES_LIST = [];

for (const key in GENRES_MAP) {
  GENRES_LIST.push(key);
}

const Explore = () => {
  const history = useHistory();
  const location = useLocation();
  const genre = new URLSearchParams(location.search).get('genre');
  const currentTabIndex = GENRES_LIST.indexOf(genre);
  const { url, params: requestParams } = getSearchTracksByTagRequest(genre);

  useEffect(() => {
    // TODO: somehow improve this maybe?
    const searchParams = new URLSearchParams();
    searchParams.append('genre', GENRES_LIST[0]);

    if (!genre) {
      history.replace({
        path: '/explore',
        search: searchParams.toString(),
      });
    }
  }, []);

  const handleChange = (e, i) => {
    const searchParams = new URLSearchParams();
    searchParams.append('genre', GENRES_LIST[i]);

    history.push({
      pathname: '/explore',
      search: searchParams.toString(),
    });
  };

  if (!genre) {
    return null;
  }

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
            {GENRES_LIST.map((el, i) => (
              <Tab key={i} label={GENRES_MAP[el]} />
            ))}
          </Tabs>
        </Paper>
      )}

      <div className="container" style={{ paddingTop: 48 + 48 }}>
        <DataLoader
          url={url}
          params={requestParams}
          render={props => <DataGrid {...props} />}
        />
      </div>
    </div>
  );
};

export default observer(Explore);
