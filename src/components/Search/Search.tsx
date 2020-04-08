import { Typography } from '@material-ui/core';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppContext } from '../../app-context';

import DataLoader from '../../hoc/DataLoader';
import DataGrid from '../DataGrid';

type SearchProps = RouteComponentProps;

@observer
class Search extends Component<SearchProps> {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  @observable request: { url?: string; params?: any } = {};
  @observable query = '';
  @observable where = '';

  componentDidMount() {
    this.handlePropsChange();
  }

  componentDidUpdate(prevProps: SearchProps) {
    if (
      JSON.stringify(this.props.location.search) !==
      JSON.stringify(prevProps.location.search)
    ) {
      this.handlePropsChange();
    }
  }

  @action handlePropsChange() {
    const {
      getSearchTracksByTagRequest,
      getSearchTracksRequest,
      getSearchUsersRequest,
    } = this.context.api;
    const { search } = this.props.location;
    const searchParams = new URLSearchParams(search);
    this.query = searchParams.get('q') || '';
    this.where = searchParams.get('where') || '';

    if (this.query.charAt(0) === '#') {
      this.request = getSearchTracksByTagRequest(this.query.slice(1));
    } else if (this.where === 'tracks') {
      this.request = getSearchTracksRequest(this.query);
    } else if (this.where === 'users') {
      this.request = getSearchUsersRequest(this.query);
    }
  }

  render() {
    const isTag = this.query.charAt(0) === '#';
    const isUser = !isTag && this.where === 'users';
    const isTrack = !isTag && this.where === 'tracks';

    return (
      <div className="container">
        <Typography variant="h3" style={{ margin: '70px 0 20px 0' }}>
          Results for <span style={{ color: '#3f51b5' }}>{this.query}</span>
          {isTag && ' tag:'}
          {isUser && ' in users:'}
          {isTrack && ' in tracks:'}
        </Typography>

        <DataLoader
          url={this.request.url}
          params={this.request.params}
          render={(props: any) => <DataGrid {...props} />}
        />
      </div>
    );
  }
}

export default withRouter(Search);
