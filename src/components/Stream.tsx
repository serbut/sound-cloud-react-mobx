import { observer } from 'mobx-react';
import React from 'react';
import { CollectionItem, STREAM_URL } from '../api';

import DataLoader from '../hoc/DataLoader';
import RequireAuth from '../hoc/RequireAuth';
import DataGrid from './DataGrid';

@observer
class Stream extends React.Component {
  formatData(data: CollectionItem[]) {
    return data.filter((i) => i.origin).map((i: any) => i.origin);
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: 48 }}>
        <DataLoader
          url={STREAM_URL}
          render={({ data, ...other }: { data: any; ohter: any }) => (
            // @ts-ignore
            <DataGrid data={this.formatData(data)} {...other} />
          )}
        />
      </div>
    );
  }
}

export default RequireAuth(Stream);
