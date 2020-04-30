import { Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { KeyboardArrowUp } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
  })
);

const ScrollToTopBtn = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo(0, 0);
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ScrollToTopBtn;
