import {Paper, Tab, Tabs} from '@material-ui/core'
import {observer} from 'mobx-react';
import {parse, stringify} from 'query-string';
import React, {useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {getSearchTracksByTagRequest} from '../api';
import DataLoader from '../hoc/DataLoader';
import DataGrid from './DataGrid';

export const GENRES_MAP = {
  ambient: 'Ambient',
  deephouse: 'Deep House',
  electronic: 'Electronic',
  house: 'House',
  techno: 'Techno',
  trap: 'Trap',
  'hiphop': 'Hip Hop',
  dance: 'Dance',
  pop: 'Pop',
  'drum&bass': 'Drum & Bass'
};

const GENRES_LIST = [];

for (var key in GENRES_MAP) {
  GENRES_LIST.push(key);
}

const Explore = ({}) => {
  const history = useHistory();
  const location =  useLocation();
  const genre = parse(location.search).genre;
  const currentTabIndex = GENRES_LIST.indexOf(genre);
  const {url, params: requestParams} = getSearchTracksByTagRequest(genre);

  useEffect(() => {
    // TODO: somehow improve this maybe?
    if (!genre) {
      history.replace({
        path: '/explore',
        search: stringify({genre: GENRES_LIST[0]})
      });
    }
  }, []);

  const handleChange = (e, i) => {
    history.push({
      pathname: '/explore',
      search: stringify({genre: GENRES_LIST[i]})
    });
  };

  if (!genre) {
    return null;
  }

  return (
    <div>
      {currentTabIndex !== -1 &&
        <Paper square>
          <Tabs
            textColor='primary'
            indicatorColor="primary"
            value={currentTabIndex}
            onChange={handleChange}
          >
            {GENRES_LIST.map((el, i) => <Tab key={i} label={GENRES_MAP[el]} />)}
          </Tabs>
        </Paper>
      }

      <div className='container' style={{ paddingTop: 48 + 48 }}>
        <DataLoader
          url={url}
          params={requestParams}
          render={(props) =>
            <DataGrid {...props} />
          }
        />
      </div>
    </div>
  );
};

export default observer(Explore);
