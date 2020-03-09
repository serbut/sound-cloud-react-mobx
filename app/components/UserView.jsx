import React, {Component} from 'react';
import UserHeader from './UserHeader';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
export default class UserView extends Component {
  @observable tabs = [];

  componentDidMount() {
    this.getAvailableTabs();
    this.redirectToFirstAvailableTabIfNoneIsSelected();
  }

  getAvailableTabs() {
    const TABS = ['tracks', 'playlists', 'likes', 'followings', 'about'];
    const { user } = this.props;

    this.tabs = TABS.filter(tab => {
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
    const { router } = this.props;

    if (this.tabs.length === 0) {
      return;
    }

    if (/^.*\/(tracks|playlists|likes|followings|about)$/.test(router.location.pathname)) {
      return;
    }

    router.replace(`users/${this.props.user.permalink}/${this.tabs[0]}`);
  }

  handleTabChange = (e, i) => {
    this.props.router.push(`users/${this.props.user.permalink}/${this.tabs[i]}`);
  };

  render() {
    const { user, children, router } = this.props;
    const selectedTabIndex = this.tabs.findIndex(tab => router.location.pathname.includes(tab));

    return <div className='animated fadeIn'>
      <div className='user-header'>

        <div className='container'>
          <UserHeader user={user}></UserHeader>

          {selectedTabIndex !== -1 &&
            <Tabs textColor="accent" index={selectedTabIndex} onChange={this.handleTabChange}>
              {this.tabs.map((el, i) => <Tab key={i} label={el} />)}
            </Tabs>
          }
        </div>
      </div>

      <div className='container'>
        {children && React.cloneElement(children, {
          user
        })}
      </div>

    </div>
  }
}
