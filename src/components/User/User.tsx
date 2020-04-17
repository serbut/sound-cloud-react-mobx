import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../app-context';
import useDataLoader from '../../hooks/use-data-loader';
import { User } from '../../models/user';
import Error from '../Error';
import { Spinner } from '../Spinner';
import UserView from '../User/UserView';

const UserComponent = () => {
  const { api } = useContext(AppContext);
  const { user: userId } = useParams();
  const { data: user, isLoading, error } = useDataLoader<User>(
    userId && api.endpoints.user(userId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error>Failed to load user</Error>;
  }

  if (!user) {
    return null;
  }

  return <UserView user={user} />;
};

export default observer(UserComponent);
