import { computed, IObservableArray, observable } from 'mobx';

import {
  addLike,
  endpoints,
  followUser,
  getMyFollowingsIds,
  getMyLikesIds,
  load,
  login,
  removeLike,
  stopFollowingUser,
} from '../api';
import { StorageKey } from '../enums';
import { Track } from '../models/track';
import { User } from '../models/user';
import { RootStore } from './root-store';

export class SessionStore {
  @observable user: User | null = null;
  @observable userLikesIds: number[] = observable.array();
  @observable userFollowingsIds: number[] = observable.array();

  constructor(private rootStore: RootStore) {
    if (localStorage.getItem(StorageKey.Token)) {
      this.user = JSON.parse(
        window.localStorage.getItem(StorageKey.User) || 'null'
      );
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
    return login()
      .then((token) => {
        localStorage.setItem(StorageKey.Token, token);
        return this.getMe();
      })
      .catch(() => {
        // TODO: add error handler
      });
  }

  logout() {
    localStorage.removeItem(StorageKey.Token);
    localStorage.removeItem(StorageKey.User);
    this.user = null;
  }

  getMe() {
    return load<User>(endpoints.me)
      .then((user) => {
        this.user = user;
        localStorage.setItem(StorageKey.User, JSON.stringify(user));
      })
      .then(() => getMyLikesIds())
      .then((userLikesIds) => (this.userLikesIds = userLikesIds))
      .then(() => getMyFollowingsIds())
      .then((userFollowingsIds) => (this.userFollowingsIds = userFollowingsIds))
      .catch(() => {
        // TODO: add error handler
      });
  }

  toggleLike(track: Track): Promise<any> {
    if (!this.isLoggedIn) {
      return this.login().then(() => this.toggleLike(track));
    }

    if (this.isLiked(track)) {
      return removeLike(track.id)
        .then(() => (this.userLikesIds as IObservableArray).remove(track.id))
        .catch(() => {
          // TODO: add error handling
        });
    } else {
      return addLike(track.id)
        .then(() => this.userLikesIds.unshift(track.id))
        .catch(() => {
          // TODO: add error handling
        });
    }
  }

  toggleFollowing(user: User): Promise<any> {
    if (!this.isLoggedIn) {
      return this.login().then(() => this.toggleFollowing(user));
    }

    if (this.isFollowing(user)) {
      return stopFollowingUser(user.id)
        .then(() =>
          (this.userFollowingsIds as IObservableArray).remove(user.id)
        )
        .catch(() => {
          // TODO: add error handling
        });
    } else {
      return followUser(user.id)
        .then(() => this.userFollowingsIds.unshift(user.id))
        .catch(() => {
          // TODO: add error handling
        });
    }
  }
}
