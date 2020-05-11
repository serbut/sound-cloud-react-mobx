import { action, autorun, computed, IObservableArray, observable } from 'mobx';
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
  @observable user: User | null = this.getUserFromStorage();
  @observable userLikesIds: number[] = observable.array();
  @observable userFollowingsIds: number[] = observable.array();

  constructor(private rootStore: RootStore) {
    if (this.isLoggedIn) {
      this.getMe();
    }

    autorun(() => {
      if (this.user) {
        localStorage.setItem(StorageKey.User, JSON.stringify(this.user));
      } else {
        localStorage.removeItem(StorageKey.User);
        localStorage.removeItem(StorageKey.Token);
      }
    });
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
      .catch((err) => {
        console.error(err);
        // TODO: add error handler
      });
  }

  @action logout() {
    this.user = null;
  }

  getMe() {
    return Promise.all([
      load<User>(endpoints.me),
      getMyLikesIds(),
      getMyFollowingsIds(),
    ])
      .then(
        action(([user, userLikesIds, userFollowingsIds]) => {
          this.user = user;
          this.userLikesIds = userLikesIds;
          this.userFollowingsIds = userFollowingsIds;
        })
      )
      .catch((err) => {
        console.error(err);
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
        .catch((err) => {
          console.error(err);
          // TODO: add error handling
        });
    } else {
      return addLike(track.id)
        .then(() => this.userLikesIds.unshift(track.id))
        .catch((err) => {
          console.error(err);
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
        .catch((err) => {
          console.error(err);
          // TODO: add error handling
        });
    } else {
      return followUser(user.id)
        .then(() => this.userFollowingsIds.unshift(user.id))
        .catch((err) => {
          console.error(err);
          // TODO: add error handling
        });
    }
  }

  private getUserFromStorage(): User | null {
    const user = localStorage.getItem(StorageKey.User);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
}
