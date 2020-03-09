import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Text from 'material-ui/Text';
import DataGrid from '../components/DataGrid';
import DataLoader from '../hoc/DataLoader';
import {observable} from 'mobx';
import {getSearchTracksByTagRequest, getSearchTracksRequest, getSearchUsersRequest} from '../api';

@observer
class Search extends Component {
  @observable request;

  componentDidMount() {
    this.handlePropsChange();
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.location.query) !== JSON.stringify(prevProps.location.query)) {
      this.handlePropsChange();
    }
  }

  handlePropsChange() {
    const { query: { q: query, where } } = this.props.location;

    if (query.charAt(0) === '#') {
      this.request = getSearchTracksByTagRequest(query.slice(1));
    } else if (where === 'tracks') {
      this.request = getSearchTracksRequest(query);
    } else if (where === 'users') {
      this.request = getSearchUsersRequest(query);
    }
  }

  render() {
    const { location } = this.props;
    const query = location.query.q;
    const isTag = query.charAt(0) === '#';
    const isUser = !isTag && location.query.where === 'users';
    const isTrack = !isTag && location.query.where === 'tracks';

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
