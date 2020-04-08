import { observer } from 'mobx-react';
import React from 'react';
import { AppContext } from '../app-context';

import DataLoader from '../hoc/DataLoader';
import RequireAuth from '../hoc/RequireAuth';
import { CollectionItem } from '../models/api';
import DataGrid from './DataGrid';

@observer
class Stream extends React.Component {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;

  formatData(data: CollectionItem[]) {
    return data.filter((i) => i.origin).map((i: any) => i.origin);
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: 48 }}>
        <DataLoader
          url={this.context.api.STREAM_URL}
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
