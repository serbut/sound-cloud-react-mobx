import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

export default function (InnerComponent) {
  @inject('sessionStore')
  @observer
  class RequireAuth extends Component {
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

    render() {
      this.props.sessionStore.isLoggedIn;

      return <InnerComponent {...this.props} />;
    }
  }

  return RequireAuth;
}
