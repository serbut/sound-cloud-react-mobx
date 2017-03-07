import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

class ScrollToTopBtn extends Component {
  state = {
    scrollToTopVisible: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 1000)
      this.setState({ scrollToTopVisible: true });
    else
      this.setState({ scrollToTopVisible: false });
  }

  handleScrollToTopClick = () => {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.state.scrollToTopVisible)
      return (
        <Button fab accent onTouchTap={this.handleScrollToTopClick} className='scroll-to-top-btn'>
          <Icon>keyboard_arrow_up</Icon>
        </Button>
      )

    return null;
  }
}

export default ScrollToTopBtn;
