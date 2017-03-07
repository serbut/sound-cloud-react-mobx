import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import DataGrid from '../components/DataGrid';
import DataLoader from '../hoc/DataLoader';
import RequireAuth from '../hoc/RequireAuth';

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
    const { data, isLoading, isLastPage, loadMore } = this.props;

    return (
      <div className="container" style={{ paddingTop: 48 }}>
        <DataGrid data={this.formatData(data)} isLoading={isLoading} isLastPage={isLastPage} loadMore={loadMore} />
      </div>
    );
  }
}

export default RequireAuth(DataLoader(Stream));
