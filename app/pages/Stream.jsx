import React from 'react';
import {inject, observer} from 'mobx-react';
import DataGrid from '../components/DataGrid';
import DataLoader from '../hoc/DataLoader';
import RequireAuth from '../hoc/RequireAuth';

@inject('viewStore')
@observer
class Stream extends React.Component {

  componentDidMount() {
    this.props.viewStore.title = 'Your Stream';
  }

  filterData(data) {
    return data
      .filter(el => el.hasOwnProperty('origin') && el.origin)
      .filter(el => el.type === 'track' || el.type === 'track-repost')
      .map(el => el.origin);
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: 48 }}>
        <DataLoader
          url={'me/activities/tracks/affiliated'}
          render={(props) =>
            <DataGrid {...props} />
          }
        />
      </div>
    );
  }
}

export default RequireAuth(Stream);
