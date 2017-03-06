import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import GridList from '../components/GridList';
import infiniteScrollify from '../hoc/InfiniteScrollify';
import DataLoader from '../hoc/DataLoader';
import RequireAuth from '../hoc/RequireAuth';

const InfiniteScrollGridList = infiniteScrollify(GridList);

@inject('viewStore') @observer
class Stream extends React.Component {

  componentDidMount() {
    this.props.viewStore.title = 'Your Stream';
    this.props.loadData('me/activities/tracks/affiliated');
  }

  formatData(data) {
    return data
      .filter(el => el.origin && (el.type === 'track' || el.type === 'track-repost'))
      .map(el => el.origin);
  }

  render() {
    const { data, isLoading, loadMore } = this.props;

    return (
      <div className="container" style={{ paddingTop: 48 }}>
        <InfiniteScrollGridList data={this.formatData(data)} loadMore={loadMore} isLoading={isLoading} />
      </div>
    );
  }
}

export default RequireAuth(DataLoader(Stream));
