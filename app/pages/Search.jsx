import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Text from 'material-ui/Text';
import DataGrid from '../components/DataGrid';
import DataLoader from '../hoc/DataLoader';
import {observable} from 'mobx';

@inject('viewStore')
@observer
class Search extends Component {
  @observable request;

  componentDidMount() {
    const { viewStore, location, params} = this.props;
    viewStore.title = 'Search';
    this.handlePropsChange(location.query.q, params.type);
  }

  componentWillReceiveProps({ params: nextParams, location: nextLocation }) {
    const { location, params } = this.props;

    if (location.query.q !== nextLocation.query.q || params.type !== nextParams.type) {
      this.handlePropsChange(nextLocation.query.q, nextParams.type);
    }
  }

  handlePropsChange(query, type) {
    if (query.charAt(0) === '#') {
      this.request = {
        url: '/tracks',
        params: { tags: query.slice(1)}
      }
    } else if (type === 'tracks') {
      this.request = {
        url: '/tracks',
        params: {q: query}
      }
    } else if (type === 'users') {
      this.request = {
        url: '/users',
        params: {q: query}
      }
    }
  }

  render() {
    const { location, params } = this.props;
    const query = location.query.q;
    const isTag = query.charAt(0) === '#';
    const isUser = !isTag && params.type === 'users';
    const isTrack = !isTag && params.type === 'tracks';

    if (!this.request) {
      return null;
    }

    return (
      <div className="container">
        <Text type='display1' style={{ margin: '70px 0 20px 0' }}>
          Results for <span style={{ color: '#3f51b5' }}>{query}</span>
          {isTag && ' tag'}
          {isUser && ' in users'}
          {isTrack && ' in tracks'}
        </Text>

        <DataLoader
          url={this.request.url}
          params={this.request.params}
          render={(props) =>
            <DataGrid {...props} />
          }
        />
      </div>
    );
  }
}

export default Search;
