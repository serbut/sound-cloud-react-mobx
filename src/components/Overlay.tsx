import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.5)',
  },
});

const Overlay = ({ children, overlayContent, shown }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {children}
      {shown && <div className={classes.overlay}>{overlayContent}</div>}
    </div>
  );
};

export default Overlay;
