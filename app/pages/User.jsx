import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {CircularProgress} from 'material-ui/Progress';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import './User.less';
import {loadUser, loadUserWebProfiles} from '../api';
import Error from '../components/Error';
import UserHeader from '../components/UserHeader';

const TABS = ['tracks', 'playlists', 'likes', 'followings', 'about'];

@observer
class User extends React.Component {
  @observable user;
  @observable isLoading = false;
  @observable tabs = [];
  @observable error;

  componentDidMount() {
    this.loadUser(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.user !== this.props.params.user) {
      this.loadUser(nextProps);
    }

    this.redirectToFirstAvailableTabIfNoneIsSelected();
  }

  loadUser({ params: { user, section }, router }) {
    this.isLoading = true;

    loadUser(user)
      .then(user => {
        this.user = user;
      })
      .then(() => loadUserWebProfiles(this.user.id))
      .then(profiles => {
        this.user.webProfiles = profiles;
      })
      .then(() => {
        this.isLoading = false;
        this.tabs = this.getAvailableTabs(this.user);
        this.redirectToFirstAvailableTabIfNoneIsSelected();
      })
      .catch(err => {
        this.error = 'Failed to load user';
        this.isLoading = false;
      })
  }

  getAvailableTabs(user) {
    return TABS.filter(tab => {
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
    if (this.tabs.length > 0 && !this.tabs.find(tab => this.props.router.location.pathname.includes(tab))) {
      this.props.router.replace(`users/${this.user.permalink}/${this.tabs[0]}`);
    }
  }

  handleTabChange = (e, i) => {
    this.props.router.push(`users/${this.user.permalink}/${this.tabs[i]}`);
  };

  render() {
    const { router, children } = this.props;
    const { user, isLoading, handleTabChange, tabs, error } = this;
    const selectedTabIndex = this.tabs.findIndex(tab => router.location.pathname.includes(tab));

    if (isLoading) {
      return <div className='loader-wrap'><CircularProgress /></div>;
    }

    if (error) {
      return <Error>{error}</Error>;
    }

    if (!user) {
      return null;
    }

    return (
      <div className='animated fadeIn'>
        <div className='user-header'>

          <div className='container'>
            <UserHeader user={user}></UserHeader>

            {selectedTabIndex !== -1 && <Tabs textColor="accent" index={selectedTabIndex} onChange={handleTabChange}>
              {tabs.map((el, i) => <Tab key={i} label={el} />)}
            </Tabs>}
          </div>
        </div>

        <div className='container'>
          {children && React.cloneElement(children, {
            user
          })}
        </div>

      </div>
    )
  }
}

export default User;
