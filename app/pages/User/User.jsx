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
import { loadUser, loadUserWebProfiles } from '../../api';

const CAT_LIST = ['tracks', 'playlists', 'likes', 'followings', 'about'];

@inject('sessionStore', 'viewStore') @observer
class User extends React.Component {
  @observable user;
  @observable.shallow userWebProfiles = [];
  @observable isLoading = true;

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
    this.isLoading = true;

    loadUser(user)
      .then(user => {
        this.user = user;
        viewStore.title = user.username;

        loadUserWebProfiles(user.id)
          .then(profiles => this.userWebProfiles = profiles)
          .then(() => this.isLoading = false);
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
    const { sessionStore, params, children } = this.props;
    const { user, userWebProfiles, isLoading, handleChange } = this;
    let index = CAT_LIST.indexOf(params.cat);
    index = index === -1 ? 4 : index;
    const location = getUserLocation(user);

    if (isLoading) {
      return <div className='loader-wrap'><CircularProgress /></div>;
    }

    return (
      <div className='animated fadeIn'>
        <div className='user-header'>

          <div className='container'>
            <div className='user-header__row'>
              <Avatar alt={user.username} src={getImageUrl(user.avatar_url, IMAGE_SIZES.t200x200)}
                style={{ width: 184, height: 184 }}
              />
              <div className='user-header__details'>
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

            <Tabs textColor="accent" index={index} onChange={handleChange}>
              {CAT_LIST.map((el, i) =>
                <Tab key={i} label={el} />
              )}
            </Tabs>
          </div>
        </div>

        <div className='container'>
          {children && React.cloneElement(children, {
            user,
            userWebProfiles
          })}
        </div>

      </div>
    )
  }
}

export default User;
