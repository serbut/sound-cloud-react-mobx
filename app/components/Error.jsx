import React from 'react';
import {Button, Typography} from '@material-ui/core';

const Error = ({children}) => {
  const handleClick = () => {
    location.reload();
  };

  return <div>
    <Typography variant='h2' color='error' gutterBottom>{children}</Typography>
    <Button onClick={handleClick}>Reload page</Button>
  </div>
};

export default Error;
