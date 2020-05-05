import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    margin: '0 5px',
  },
});

export const Bullet = () => {
  const classes = useStyles();

  return <span className={classes.root}>&bull;</span>;
};
