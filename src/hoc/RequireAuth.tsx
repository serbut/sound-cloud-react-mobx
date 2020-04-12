import React from 'react';

export default function (InnerComponent: any) {
  function RequireAuth(...props: any) {
    // TODO: fix
    // componentWillMount() {
    //     if (!this.props.sessionStore.isLoggedIn)
    //         this.props.router.replace('/');
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //     if (!nextProps.sessionStore.isLoggedIn)
    //         this.props.router.replace('/');
    // }

    // this.props.sessionStore.isLoggedIn;

    return <InnerComponent {...props} />;
  }

  return RequireAuth;
}
