import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Text from 'material-ui/Text';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Avatar from 'material-ui/Avatar';

import './User.less';

import { formatNumber, getImageUrl, getUserLocation } from '../../utils';
import { IMAGE_SIZES } from '../../constants';
import { loadUser, loadUserWebProfiles, loadUserVisuals } from '../../api';

const CAT_LIST = ['tracks', 'playlists', 'likes', 'followings', 'about'];

@inject('sessionStore', 'viewStore') @observer
class User extends React.Component {
  @observable user;
  @observable.shallow userWebProfiles = [];
  @observable profilesLoaded;
  @observable visuals;  // sizes: original, t1240x260

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    this.props.viewStore.appbarTransparent = true;
    this.loadUser(this.props);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    this.props.viewStore.appbarTransparent = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.user !== this.props.params.user)
      this.loadUser(nextProps);
  }

  loadUser({ params: {user}, viewStore }) {
    this.user = null;
    this.userWebProfiles = [];
    this.profilesLoaded = false;
    this.visuals = null;

    loadUser(user)
      .then(user => {
        this.user = user;
        viewStore.title = user.username;

        loadUserWebProfiles(user.id)
          .then(profiles => {
            this.userWebProfiles = profiles;
            this.profilesLoaded = true;
          });

        loadUserVisuals(user.id)
          .then(visuals => this.visuals = visuals);
      });
  }

  onScroll = () => {
    const { viewStore } = this.props;

    if (scrollY > 20)
      viewStore.appbarTransparent = false;
    else
      viewStore.appbarTransparent = true;
  };

  handleChange = (e, i) => {
    this.props.router.push(`/${this.user.permalink}/${CAT_LIST[i]}`);
  };

  render() {
    const { sessionStore, params } = this.props;
    const { user, userWebProfiles, profilesLoaded } = this;
    let index = CAT_LIST.indexOf(params.cat);
    index = index === -1 ? 4 : index;

    if (!user || !profilesLoaded)
      return <div className='loader-wrap'><CircularProgress /></div>;

    return (
      <div className='animated fadeIn'>
        <div className='user-header'>

          {false && this.visuals && this.visuals.enabled ?
            <img src={this.visuals.visuals[0].visual_url} className='user-header__visual' /> : null}

          <div className='container'>
            <div className='user-header__row'>
              <Avatar alt={user.username} src={getImageUrl(user.avatar_url, IMAGE_SIZES.t200x200)}
                style={{ width: 184, height: 184 }}
              />
              <div className='user-header__details'>
                <Text type='display1' gutterBottom>{user.username}</Text>
                <Text type='headline' gutterBottom>{getUserLocation(user)}</Text>
                <Text type='subheading' gutterBottom>{formatNumber(user.followers_count)} followers</Text>
                {sessionStore.isAuthedUser(user) ? null :
                  sessionStore.isFollowing(user) ?
                    <Button raised primary onTouchTap={() => sessionStore.toggleFollowing(user)}>Unfollow</Button> :
                    <Button raised accent onTouchTap={() => sessionStore.toggleFollowing(user)}>Follow</Button>
                }
              </div>
            </div>

            <Tabs textColor="accent" index={index} onChange={this.handleChange}>
              {CAT_LIST.map((el, i) =>
                <Tab key={i} label={el} />
              )}
            </Tabs>
          </div>
        </div>

        <div className='container'>
          {this.props.children && React.cloneElement(this.props.children, {
            user: this.user,
            userWebProfiles: this.userWebProfiles
          })}
        </div>

      </div>
    )
  }
}

export default User;
