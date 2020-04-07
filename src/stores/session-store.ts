import { computed, IObservableArray, observable } from 'mobx';
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
import { Track } from '../models/track';
import { User } from '../models/user';

export class SessionStore {
  @observable user: User | null = null;
  @observable userLikesIds: IObservableArray<number> = observable.array();
  @observable userFollowingsIds: IObservableArray<number> = observable.array();

  constructor() {
    if (localStorage.getItem(TOKEN_KEY)) {
      this.user = JSON.parse(window.localStorage.getItem(USER_KEY) || 'null');
      this.getMe();
    }
  }

  @computed get isLoggedIn() {
    return !!this.user;
  }

  isAuthedUser(user: User) {
    return this.user ? this.user.id === user.id : false;
  }

  isLiked(track: Track) {
    return this.userLikesIds.includes(track.id);
  }

  isFollowing(user: User) {
    return this.userFollowingsIds.includes(user.id);
  }

  login() {
    return SC.connect()
      .then((res: any) => {
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
      .then((user: User) => {
        this.user = user;
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      })
      .then(() => getMeLikesIds())
      .then((userLikesIds: any) => (this.userLikesIds = userLikesIds))
      .then(() => getMeFollowingsIds())
      .then(
        (userFollowingsIds: any) => (this.userFollowingsIds = userFollowingsIds)
      )
      .catch(() => {
        // TODO: add error handler
      });
  }

  toggleLike(track: Track) {
    if (!this.isLoggedIn) {
      return this.login().then(() => this.toggleLike(track));
    }

    if (this.isLiked(track)) {
      removeLike(track.id).then(() => this.userLikesIds.remove(track.id));
    } else {
      addLike(track.id).then(() => this.userLikesIds.unshift(track.id));
    }
  }

  toggleFollowing(user: User) {
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
