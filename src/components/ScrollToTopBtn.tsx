import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardArrowUp } from '@material-ui/icons';
import debounce from 'debounce';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    bottom: 100,
    right: 64,
    zIndex: 1000,
  },
  button: {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

const ScrollToTopBtn = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.pageYOffset > window.innerHeight * 2) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }, 400);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTopClick = () => {
    window.scrollTo(0, 0);
  };

  if (isVisible)
    return (
      <div className={classes.container}>
        <IconButton
          color="secondary"
          className={classes.button}
          onClick={handleScrollToTopClick}
        >
          <KeyboardArrowUp fontSize="large" />
        </IconButton>
      </div>
    );

  return null;
};

export default ScrollToTopBtn;
