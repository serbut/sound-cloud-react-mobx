import {
  Avatar,
  Box,
  Button,
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import { ImageSize } from '../../enums';
import { User } from '../../models/user';
import { formatNumber, getImageUrl } from '../../utils';

const UserHeader = ({ user }: { user: User }) => {
  const { sessionStore } = useContext(AppContext);
  const isLoggedInUser = sessionStore.isAuthedUser(user);
  const isFollowing = sessionStore.isFollowing(user);

  return (
    <Box py={3}>
      <Grid container alignItems="center" spacing={3}>
        <Hidden xsDown>
          <Grid item sm={3}>
            <Avatar
              alt={user.username}
              src={getImageUrl(user.avatar_url, ImageSize.t500x500)}
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        </Hidden>

        <Grid item xs>
          <Typography variant="h5">Artist</Typography>
          <Typography variant="h4" gutterBottom>
            {user.username}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {formatNumber(user.followers_count)} followers
          </Typography>
          {!isLoggedInUser && (
            <Button
              variant="contained"
              color={isFollowing ? 'default' : 'primary'}
              onClick={() => sessionStore.toggleFollowing(user)}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default observer(UserHeader);
