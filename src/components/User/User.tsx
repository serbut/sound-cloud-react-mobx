import { CircularProgress } from '@material-ui/core';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { loadUser, loadUserWebProfiles } from '../../api';
import { User } from '../../models/user';
import { UserWebProfile } from '../../models/user-web-profile';
import Error from '../Error';
import UserView from '../User/UserView';

type Props = RouteComponentProps<{ user: string; playlist: string }>;

export interface UserWithWebProfiles extends User {
  webProfiles: UserWebProfile[];
}

@observer
class UserComponent extends React.Component<Props> {
  @observable user: UserWithWebProfiles | undefined;
  @observable isLoading: boolean = false;
  @observable error: string | undefined;

  componentDidMount() {
    this.loadUser();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.match.params.user !== this.props.match.params.user) {
      this.loadUser();
    }
  }

  loadUser() {
    this.isLoading = true;

    loadUser(this.props.match.params.user)
      .then((user) =>
        loadUserWebProfiles((user as User).id).then((profiles) => ({
          user,
          profiles,
        }))
      )
      .then(
        action(({ user, profiles }) => {
          this.user = { ...user, webProfiles: profiles };
          this.isLoading = false;
        })
      )
      .catch(
        action((err) => {
          console.error(err);
          this.error = 'Failed to load user';
          this.isLoading = false;
        })
      );
  }

  render() {
    const { user, isLoading, error } = this;

    if (isLoading) {
      return (
        <div className="loader-wrap">
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return <Error>{error}</Error>;
    }

    if (!user) {
      return null;
    }

    return (
      <UserView
        user={user}
        history={this.props.history}
        location={this.props.location}
      />
    );
  }
}

export default withRouter(UserComponent);
