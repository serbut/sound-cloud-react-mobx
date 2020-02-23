import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import DataGrid from '../components/DataGrid';
import DataLoader from '../hoc/DataLoader';
import UserAbout from "../components/UserAbout";

@inject('sessionStore') @observer
class UserContent extends Component {

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.section !== this.props.params.section)
      this.load(nextProps);
  }

  load({ params: { section } }) {
    const baseUrl = `/users/${this.props.user.id}`;
    this.props.clearData();

    switch (section) {
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
    if (params.section === 'likes' && sessionStore.isLoggedIn && user.id === sessionStore.user.id && sessionStore.userLikesIds.length)
      return data.filter(el => sessionStore.userLikesIds.includes(el.id));
    else
      return data;
  }

  render() {
    const { data, isLoading, isLastPage, loadMore, params: { section }, user } = this.props;

    if (section && section === 'about') {
      return <UserAbout user={user}></UserAbout>
    }

    return (
      <DataGrid data={this.filterData(data)} isLoading={isLoading} isLastPage={isLastPage} loadMore={loadMore} />
    );
  }
}

export default DataLoader(UserContent);
