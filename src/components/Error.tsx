import { Button, Typography } from '@material-ui/core';
import React from 'react';

const Error = ({ children }: { children: React.Component | string }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <Typography variant="h2" color="error" gutterBottom>
        {children}
      </Typography>
      <Button onClick={handleClick}>Reload page</Button>
    </div>
  );
};

export default Error;
