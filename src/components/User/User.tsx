import { CircularProgress } from '@material-ui/core';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { loadUser, loadUserWebProfiles } from '../../api';
import { User } from '../../models/user';
import Error from '../Error';
import UserView from '../User/UserView';

type Props = RouteComponentProps<{ user: string; playlist: string }>;

@observer
class UserComponent extends React.Component<Props> {
  @observable user: User | undefined;
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
      .then((user) => (this.user = user))
      .then(() => loadUserWebProfiles((this.user as User).id))
      .then((profiles) => ((this.user as User).webProfiles = profiles))
      .then(() => (this.isLoading = false))
      .catch(
        action(() => {
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
