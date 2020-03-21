import React from 'react';
import { observer } from 'mobx-react';
import DataGrid from './DataGrid';
import DataLoader from '../hoc/DataLoader';
import RequireAuth from '../hoc/RequireAuth';

@observer
class Stream extends React.Component {
    formatData(data) {
        return data.filter(el => el.origin).map(el => el.origin);
    }

    render() {
        return (
            <div className="container" style={{ paddingTop: 48 }}>
                <DataLoader
                    url={'me/activities/tracks/affiliated'}
                    render={({ data, ...other }) => (
                        <DataGrid data={this.formatData(data)} {...other} />
                    )}
                />
            </div>
        );
    }
}

export default RequireAuth(Stream);
