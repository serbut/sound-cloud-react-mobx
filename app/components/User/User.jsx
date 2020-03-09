import React from 'react';
import {action, observable} from 'mobx';
import {observer} from 'mobx-react';
import {CircularProgress} from 'material-ui/Progress';
import './User.less';
import {loadUser, loadUserWebProfiles} from '../../api';
import Error from '../Error';
import UserView from '../User/UserView';

@observer
class User extends React.Component {
  @observable user;
  @observable isLoading = false;
  @observable error;

  componentDidMount() {
    this.loadUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.user !== this.props.params.user) {
      this.loadUser();
    }
  }

  loadUser() {
    this.isLoading = true;

    loadUser(this.props.params.user)
      .then(user => this.user = user)
      .then(() => loadUserWebProfiles(this.user.id))
      .then(profiles => this.user.webProfiles = profiles)
      .then(() => this.isLoading = false)
      .catch(action(err => {
        this.error = 'Failed to load user';
        this.isLoading = false;
      }));
  }

  render() {
    const { user, isLoading, error } = this;

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
      <UserView user={user} router={this.props.router} children={this.props.children}></UserView>
    )
  }
}

export default User;
