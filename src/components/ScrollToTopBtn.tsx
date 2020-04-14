import { IconButton } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './ScrollToTopBtn.css';

const ScrollToTopBtn = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1000) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTopClick = () => {
    window.scrollTo(0, 0);
  };

  if (isVisible)
    return (
      <div className="ScrollToTopBtn">
        <IconButton color="primary" onClick={handleScrollToTopClick}>
          <KeyboardArrowUp />
        </IconButton>
      </div>
    );

  return null;
};

export default ScrollToTopBtn;
