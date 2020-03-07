import React from 'react';
import {observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import Button from 'material-ui/Button';
import {CircularProgress} from 'material-ui/Progress';
import Text from 'material-ui/Text';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Avatar from 'material-ui/Avatar';
import './User.less';
import {formatNumber, getImageUrl, getUserLocation} from '../utils';
import {IMAGE_SIZES} from '../constants';
import {loadUser, loadUserWebProfiles} from '../api';
import Error from '../components/Error';

const TABS = ['tracks', 'playlists', 'likes', 'followings', 'about'];

@inject('sessionStore', 'viewStore') @observer
class User extends React.Component {
  @observable user;
  @observable isLoading = false;
  @observable tabs = [];
  @observable error;

  componentDidMount() {
    this.loadUser(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.user !== this.props.params.user)
      this.loadUser(nextProps);
  }

  loadUser({ params: { user, section }, viewStore, router }) {
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

        viewStore.title = this.user.username;
        this.tabs = this.getTabs(this.user);

        if (!this.tabs.find(tab => router.location.pathname.includes(tab))) {
          this.props.router.replace(`users/${this.user.permalink}/${this.tabs[0]}`);
        }
      })
      .catch(err => {
        this.error = 'Failed to load user';
        this.isLoading = false;
      })
  }

  getTabs(user) {
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

  handleTabChange = (e, i) => {
    this.props.router.push(`users/${this.user.permalink}/${this.tabs[i]}`);
  };

  render() {
    const { sessionStore, router, children } = this.props;
    const { user, isLoading, handleTabChange, tabs, error } = this;
    const selectedTabIndex = this.tabs.findIndex(tab => router.location.pathname.includes(tab));
    const location = getUserLocation(user);

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
            <div className='user-header__row'>
              <Avatar alt={user.username} src={getImageUrl(user.avatar_url, IMAGE_SIZES.t500x500)}
                style={{ width: 250, height: 250 }}
              />
              <div className='user-header__details'>
                <Text type='subheading'>Artist</Text>
                <Text type='display1' gutterBottom>{user.username}</Text>
                <Text type='subheading' gutterBottom>{formatNumber(user.followers_count)} followers</Text>
                <Text type='body1' gutterBottom>
                  {user.followings_count} followings <span className='bullet'>&bull;</span>
                  {user.playlist_count} playlists <span className='bullet'>&bull;</span>
                  {user.public_favorites_count} likes <span className='bullet'>&bull;</span>
                  {user.reposts_count} reposts <span className='bullet'>&bull;</span>
                  {user.track_count} tracks
                </Text>
                {location && <Text type='body1' gutterBottom>from {location}</Text>}
                {sessionStore.isAuthedUser(user) ? null :
                  sessionStore.isFollowing(user) ?
                    <Button raised primary onTouchTap={() => sessionStore.toggleFollowing(user)}>Unfollow</Button> :
                    <Button raised accent onTouchTap={() => sessionStore.toggleFollowing(user)}>Follow</Button>
                }
              </div>
            </div>

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
