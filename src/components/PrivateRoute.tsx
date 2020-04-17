import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AppContext } from '../app-context';

export const PrivateRoute = observer(
  ({
    children,
    ...rest
  }: {
    children: React.ReactChild;
    [key: string]: any;
  }) => {
    const {
      sessionStore: { isLoggedIn },
    } = useContext(AppContext);

    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
);
