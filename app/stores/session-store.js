import { observable, computed } from 'mobx';
import SC from 'soundcloud';
import Cookies from 'js-cookie';

import { COOKIE_PATH } from '../config';
import { getMeLikesIds, getMeFollowingsIds, addLike, removeLike, followUser, unfollowUser } from '../api';

const handleError = err => console.error(err);


class SessionStore {
  @observable user;
  @observable userLikesIds = [];
  @observable userFollowingsIds = [];

  constructor() {
    if (SC.isConnected())
      this.getMe();
  }

  @computed get isLoggedIn() {
    return !!this.user;
  }

  isAuthedUser(user) {
    return this.user ? this.user.id === user.id : false;
  }

  isLiked(track) {
    return this.userLikesIds.includes(track.id);
  }

  isFollowing(user) {
    return this.userFollowingsIds.includes(user.id);
  }

  login() {
    return SC.connect()
      .then(res => {
        Cookies.set(COOKIE_PATH, res.oauth_token);
        return this.getMe();
      })
      .catch(handleError);
  }

  logout() {
    Cookies.remove(COOKIE_PATH);
    this.user = null;
  }

  getMe() {
    return SC.get('/me')
      .then(user => {
        this.user = user;

        getMeLikesIds()
          .then(data => this.userLikesIds = data);

        getMeFollowingsIds()
          .then(data => this.userFollowingsIds = data);
      })
      .catch(handleError);
  }

  toggleLike(track) {
    if (!this.isLoggedIn)
      return this.login()
        .then(() => this.toggleLike(track));

    if (this.isLiked(track))
      removeLike(track.id)
        .then(() => this.userLikesIds.remove(track.id))
    else
      addLike(track.id)
        .then(() => this.userLikesIds.unshift(track.id))
  }

  toggleFollowing(user) {
    if (!this.isLoggedIn)
      return this.login()
        .then(() => this.toggleFollowing(user));

    if (this.isFollowing(user))
      unfollowUser(user.id)
        .then(() => this.userFollowingsIds.remove(user.id));
    else
      followUser(user.id)
        .then(() => this.userFollowingsIds.unshift(user.id));
  }
}

export default new SessionStore();
