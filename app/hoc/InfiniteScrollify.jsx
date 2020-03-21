import React, { Component } from 'react';

export default class InfiniteScrollComponent extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 200
        ) {
            this.props.load();
        }
    };

    render() {
        return this.props.children;
    }
}
