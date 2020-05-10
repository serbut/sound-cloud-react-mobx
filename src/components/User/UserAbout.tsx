import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { User } from '../../models/user';
import UserLinks from './UserLinks';

const UserAbout = ({ user }: { user: User }) => {
  return (
    <Box py={3}>
      {user.description && (
        <pre>
          <Typography variant="body2">{user.description}</Typography>
        </pre>
      )}
      <UserLinks user={user} />
    </Box>
  );
};

export default UserAbout;
