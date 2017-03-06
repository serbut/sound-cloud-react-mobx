import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Layout from 'material-ui/Layout';
import { CircularProgress } from 'material-ui/Progress';
import Text from 'material-ui/Text';

import './GridList.less';
import TrackCard from './TrackCard';
import PlaylistCard from './PlaylistCard';
import UserCard from './UserCard';

const GridList = ({ data, isLoading, loadMore }) => {
  if (!data.length && !isLoading) {
    return <Text type='display2' align='center'>Nothing to show :(</Text>
  }

  return (
    <div>
      <Layout container>
        {data.map(item =>
          <div key={item.id} className="layout-item animated fadeIn">
            {item.kind === 'user' ? <UserCard user={item} /> :
              item.kind === 'playlist' ? <PlaylistCard playlist={item} /> :
                item.kind === 'track' ? <TrackCard track={item} tracks={data} />
                  : null}
          </div>
        )}
      </Layout>

      {isLoading ? <div className="loader-wrap"><CircularProgress /></div> : null}
    </div>
  )
}

export default (observer(GridList));
