import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { endpoints } from '../../api';
import { AppContext } from '../../app-context';
import { User } from '../../models/user';
import { UserWebProfile } from '../../models/user-web-profile';
import Error from '../Error';
import { Spinner } from '../Spinner';
import UserView from '../User/UserView';

export interface UserWithWebProfiles extends User {
  webProfiles: UserWebProfile[];
}

const UserComponent = () => {
  const { api } = useContext(AppContext);
  const { user: userID } = useParams();
  const [user, setUser] = useState<UserWithWebProfiles | undefined>();
  const [isLoading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    if (!userID) {
      return;
    }

    setError(false);
    setLoading(true);

    api
      .load<User>(endpoints.user(userID))
      .then((user) =>
        api
          .load<UserWebProfile[]>(endpoints.userWebProfiles(user.id))
          .then((profiles) => ({
            user,
            profiles,
          }))
      )
      .then(
        action(({ user, profiles }) =>
          setUser({ ...user, webProfiles: profiles })
        )
      )
      .catch(
        action((err) => {
          console.error(err);
          setError(true);
        })
      )
      .finally(() => setLoading(false));
  }, [userID, api]);

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
