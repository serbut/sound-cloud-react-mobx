import { Typography } from '@material-ui/core';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    getSearchTracksByTagRequest,
    getSearchTracksRequest,
    getSearchUsersRequest,
} from '../../api';
import DataLoader from '../../hoc/DataLoader';
import DataGrid from '../DataGrid';

// TODO: fix search by tag
@observer
class Search extends Component {
    @observable request = {};
    @observable query = '';
    @observable where = '';

    componentDidMount() {
        this.handlePropsChange();
    }

    componentDidUpdate(prevProps) {
        if (
            JSON.stringify(this.props.location.query) !==
            JSON.stringify(prevProps.location.query)
        ) {
            this.handlePropsChange();
        }
    }

    @action handlePropsChange() {
        const { search } = this.props.location;
        const searchParams = new URLSearchParams(search);
        const query = (this.query = searchParams.get('q'));
        const where = (this.where = searchParams.get('where'));

        if (query.charAt(0) === '#') {
            this.request = getSearchTracksByTagRequest(query.slice(1));
        } else if (where === 'tracks') {
            this.request = getSearchTracksRequest(query);
        } else if (where === 'users') {
            this.request = getSearchUsersRequest(query);
        }
    }

    render() {
        const isTag = this.query.charAt(0) === '#';
        const isUser = !isTag && this.where === 'users';
        const isTrack = !isTag && this.where === 'tracks';

        return (
            <div className="container">
                <Typography variant="h3" style={{ margin: '70px 0 20px 0' }}>
                    Results for{' '}
                    <span style={{ color: '#3f51b5' }}>{this.query}</span>
                    {isTag && ' tag:'}
                    {isUser && ' in users:'}
                    {isTrack && ' in tracks:'}
                </Typography>

                <DataLoader
                    url={this.request.url}
                    params={this.request.params}
                    render={props => <DataGrid {...props} />}
                />
            </div>
        );
    }
}

export default withRouter(Search);
