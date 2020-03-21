import React, { Component } from 'react';
import {IconButton} from '@material-ui/core';
import {KeyboardArrowUp} from '@material-ui/icons';

class ScrollToTopBtn extends Component {
  state = {
    scrollToTopVisible: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 1000) {
      this.setState({scrollToTopVisible: true});
    } else {
      this.setState({scrollToTopVisible: false});
    }
  };

  handleScrollToTopClick = () => {
    window.scrollTo(0, 0);
  };

  render() {
    if (this.state.scrollToTopVisible)
      return (
        <div className='scroll-to-top-btn'>
          <IconButton color='primary' onClick={this.handleScrollToTopClick}>
            <KeyboardArrowUp/>
          </IconButton>
        </div>
      );

    return null;
  }
}

export default ScrollToTopBtn;
