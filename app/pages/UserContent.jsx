import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import DataGrid from '../components/DataGrid';
import DataLoader from '../hoc/DataLoader';
import UserAbout from "../components/UserAbout";
import {observable} from 'mobx';

@inject('sessionStore')
@observer
class UserContent extends Component {
  @observable request;

  componentDidMount() {
    this.handlePropsChange(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.section !== this.props.params.section)
      this.handlePropsChange(nextProps);
  }

  handlePropsChange({ params: { section } }) {
    const baseUrl = `/users/${this.props.user.id}`;

    switch (section) {
      case 'tracks':
        this.request = {url: `${baseUrl}/tracks`};
        break;
      case 'playlists':
        this.request = {url: `${baseUrl}/playlists`, params: { representation: `compact` }};
        break;
      case 'likes':
        this.request = {url: `${baseUrl}/favorites`};
        break;
      case 'followings':
        this.request = {url: `${baseUrl}/followings`};
        break;
      default:
        this.request = null;
        break;
    }
  }

  filterData(data) {
    const { params, sessionStore, user } = this.props;

    if (params.section === 'likes'
      && sessionStore.isLoggedIn
      && user.id === sessionStore.user.id
      && sessionStore.userLikesIds.length
    ) {
      return data.filter(el => sessionStore.userLikesIds.includes(el.id));
    } else {
      return data;
    }
  }

  render() {
    const { params: { section }, user } = this.props;

    if (section && section === 'about') {
      return <UserAbout user={user}></UserAbout>
    }

    if (!this.request) {
      return null;
    }

    return (
      <DataLoader
        url={this.request.url}
        params={this.request.params}
        render={({ data, ...props }) =>
          <DataGrid data={this.filterData(data)} {...props} />
        }
      />
    );
  }
}

export default UserContent;
