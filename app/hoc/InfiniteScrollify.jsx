import React, { Component } from 'react';

export default function (InnerComponent) {

  class InfiniteScrollComponent extends Component {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
        this.props.loadMore();
      }
    }

    render() {
      return <InnerComponent {...this.props} />;
    }
  }

  return InfiniteScrollComponent;
}
