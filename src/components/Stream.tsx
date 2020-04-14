import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../app-context';
import { CollectionItem } from '../models/api';
import DataGrid from './DataGrid';

import DataLoader from './DataLoader';
import RequireAuth from './RequireAuth';

const Stream = () => {
  const { api } = useContext(AppContext);

  const formatData = (data: CollectionItem[]) => {
    if (!data) {
      return;
    }
    return data.filter((i) => i.origin).map((i: any) => i.origin);
  };

  return (
    <div className="container" style={{ paddingTop: 48 }}>
      <DataLoader
        url={api.STREAM_URL}
        render={({ data, ...other }: { data: any; other: any }) => (
          // @ts-ignore
          <DataGrid data={formatData(data)} {...other} />
        )}
      />
    </div>
  );
};

export default RequireAuth(observer(Stream));
