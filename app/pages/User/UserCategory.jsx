import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import GridList from '../../components/GridList';
import infiniteScrollify from '../../hoc/InfiniteScrollify';
import DataLoader from '../../hoc/DataLoader';

const InfiniteScrollGridList = infiniteScrollify(GridList);

@inject('sessionStore') @observer
class UserCategory extends Component {

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.cat !== this.props.params.cat)
      this.load(nextProps);
  }

  load({params: {cat}}) {
    const baseUrl = `/users/${this.props.user.id}`;
    this.props.clearData();

    switch (cat) {
      case 'tracks':
        this.props.loadData(`${baseUrl}/tracks`);
        break;
      case 'playlists':
        this.props.loadData(`${baseUrl}/playlists`, { representation: `compact` });
        break;
      case 'likes':
        this.props.loadData(`${baseUrl}/favorites`);
        break;
      case 'followings':
        this.props.loadData(`${baseUrl}/followings`);
      default:
        break;
    }
  }

  filterData(data) {
    const { params, sessionStore, user } = this.props;
    if (params.cat === 'likes' && sessionStore.isLoggedIn && user.id === sessionStore.user.id && sessionStore.userLikesIds.length)
      return data.filter(el => sessionStore.userLikesIds.includes(el.id));
    else
      return data;
  }

  render() {
    const { params, data, isLoading, loadMore } = this.props;

    return (
      <InfiniteScrollGridList data={this.filterData(data)} loadMore={loadMore} isLoading={isLoading} />
    );
  }
}

export default DataLoader(UserCategory);
