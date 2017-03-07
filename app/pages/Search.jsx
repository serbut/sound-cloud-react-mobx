import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { browserHistory } from 'react-router';
import Text from 'material-ui/Text';

import DataGrid from '../components/DataGrid';
import DataLoader from '../hoc/DataLoader';

@inject('viewStore') @observer
class Search extends Component {

  componentWillMount() {
    const { viewStore, location, params} = this.props;
    viewStore.title = 'Search';
    this.loadData(location.query.q, params.cat);
  }

  componentWillReceiveProps({ params: { cat }, location: { query: {q} } }, nextState) {
    if (this.props.params.cat !== cat || this.props.location.query.q !== q)
      this.loadData(q, cat);
  }

  loadData(q, cat) {
    if (q.charAt(0) === '#')
      return this.props.loadData('/tracks', { tags: q.slice(1) });
    if (cat === 'tracks')
      return this.props.loadData('/tracks', { q });
    if (cat === 'people')
      return this.props.loadData('/users', { q });
  }

  render() {
    const { params: { cat }, location: { query: {q} }, data, isLoading, isLastPage, loadMore} = this.props;
    const hash = q.charAt(0) === '#';

    return (
      <div className="container">
        <Text type='display2' style={{ padding: '70px 0' }}>Results for <span style={{ color: '#3f51b5' }}>{q}</span></Text>
        <DataGrid data={data} isLoading={isLoading} isLastPage={isLastPage} loadMore={loadMore} />
      </div>
    );
  }
}

export default DataLoader(Search);
