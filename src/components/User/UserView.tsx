import { Tab, Tabs } from '@material-ui/core';
import { History, Location } from 'history';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { UserWithWebProfiles } from './User';

import UserAbout from './UserAbout';
import UserFollowings from './UserFollowings';
import UserHeader from './UserHeader';
import UserLikes from './UserLikes';
import UserPlaylists from './UserPlaylists';
import UserTracks from './UserTracks';
import './UserView.css';

// TODO: move tabs to UserTabs component
@observer
class UserView extends Component<{
  user: UserWithWebProfiles;
  history: History;
  location: Location;
}> {
  @observable tabs: string[] = [];

  componentDidMount() {
    this.getAvailableTabs();
    this.redirectToFirstAvailableTabIfNoneIsSelected();
  }

  getAvailableTabs() {
    const TABS = ['tracks', 'playlists', 'likes', 'followings', 'about'];
    const { user } = this.props;

    this.tabs = TABS.filter((tab) => {
      switch (tab) {
        case 'tracks':
          return user.track_count > 0;
        case 'playlists':
          return user.playlist_count > 0;
        case 'likes':
          return user.public_favorites_count > 0;
        case 'followings':
          return user.followings_count > 0;
        case 'about':
          return user.description || user.webProfiles.length > 0;
        default:
          return true;
      }
    });
  }

  redirectToFirstAvailableTabIfNoneIsSelected() {
    const { history, location } = this.props;

    if (this.tabs.length === 0) {
      return;
    }

    if (
      /^.*\/(tracks|playlists|likes|followings|about)$/.test(location.pathname)
    ) {
      return;
    }

    history.replace(`/users/${this.props.user.permalink}/${this.tabs[0]}`);
  }

  handleTabChange = (event: React.ChangeEvent<{}>, index: number) => {
    this.props.history.push(
      `/users/${this.props.user.permalink}/${this.tabs[index]}`
    );
  };

  render() {
    const { user, location } = this.props;
    const selectedTabIndex = this.tabs.findIndex((tab) =>
      location.pathname.includes(tab)
    );

    return (
      <div className="User animated fadeIn">
        <div className="User-header">
          <div className="container">
            <UserHeader user={user} />

            {selectedTabIndex !== -1 && (
              <Tabs value={selectedTabIndex} onChange={this.handleTabChange}>
                {this.tabs.map((el, i) => (
                  <Tab key={i} label={el} />
                ))}
              </Tabs>
            )}
          </div>
        </div>

        <div className="container">
          <Route
            path="/users/:user/tracks"
            render={() => <UserTracks user={user} />}
          />
          <Route
            path="/users/:user/playlists"
            render={() => <UserPlaylists user={user} />}
          />
          <Route
            path="/users/:user/likes"
            render={() => <UserLikes user={user} />}
          />
          <Route
            path="/users/:user/followings"
            render={() => <UserFollowings user={user} />}
          />
          <Route
            path="/users/:user/about"
            component={() => <UserAbout user={user} />}
          />
        </div>
      </div>
    );
  }
}

export default UserView;
