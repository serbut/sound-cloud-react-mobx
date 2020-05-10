import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import useDataLoader from '../../hooks/use-data-loader';
import { User } from '../../models/user';
import { UserWebProfile } from '../../models/user-web-profile';
import Error from '../Error';
import { Spinner } from '../Spinner';

const useStyles = makeStyles({
  list: {
    listStyle: 'none',
    padding: 0,
  },
});

const UserLinks = ({ user }: { user: User }) => {
  const classes = useStyles();
  const { api } = useContext(AppContext);
  const { data, isLoading, error } = useDataLoader<UserWebProfile[]>(
    api.endpoints.userWebProfiles(user.id)
  );

  if (!data || data.length === 0) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error>Can't load user web profiles</Error>;
  }

  return (
    <ul className={classes.list}>
      {data.map((el, i) => (
        <li key={i}>
          <a href={el.url}>
            <Typography color="primary">{el.title}</Typography>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UserLinks;
