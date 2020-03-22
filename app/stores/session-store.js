import { computed, observable } from 'mobx';
import SC from 'soundcloud';

import {
  addLike,
  followUser,
  getMeFollowingsIds,
  getMeLikesIds,
  removeLike,
  unfollowUser,
} from '../api';
import { TOKEN_KEY, USER_KEY } from '../config';

class SessionStore {
  @observable user;
  @observable userLikesIds = [];
  @observable userFollowingsIds = [];

  constructor() {
    if (localStorage.getItem(TOKEN_KEY)) {
      this.user = JSON.parse(localStorage.getItem(USER_KEY));
      this.getMe();
    }
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
        localStorage.setItem(TOKEN_KEY, res.oauth_token);

        return this.getMe();
      })
      .catch(() => {
        // TODO: add error handler
      });
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.user = null;
  }

  getMe() {
    return SC.get('/me')
      .then(user => {
        this.user = user;
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      })
      .then(() => getMeLikesIds())
      .then(userLikesIds => (this.userLikesIds = userLikesIds))
      .then(() => getMeFollowingsIds())
      .then(userFollowingsIds => (this.userFollowingsIds = userFollowingsIds))
      .catch(() => {
        // TODO: add error handler
      });
  }

  toggleLike(track) {
    if (!this.isLoggedIn) {
      return this.login().then(() => this.toggleLike(track));
    }

    if (this.isLiked(track)) {
      removeLike(track.id).then(() => this.userLikesIds.remove(track.id));
    } else {
      addLike(track.id).then(() => this.userLikesIds.unshift(track.id));
    }
  }

  toggleFollowing(user) {
    if (!this.isLoggedIn) {
      return this.login().then(() => this.toggleFollowing(user));
    }

    if (this.isFollowing(user)) {
      unfollowUser(user.id).then(() => this.userFollowingsIds.remove(user.id));
    } else {
      followUser(user.id).then(() => this.userFollowingsIds.unshift(user.id));
    }
  }
}

export default new SessionStore();
