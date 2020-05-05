import {
  Avatar,
  Box,
  Button,
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import { ImageSize } from '../../enums';
import { User } from '../../models/user';
import { formatNumber, getImageUrl } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    background: grey[100],
  },
  img: {
    width: '100%',
    height: '100%',
  },
}));

const UserHeader = ({
  user,
  children,
}: {
  user: User;
  children: React.ReactChild;
}) => {
  const classes = useStyles();
  const { sessionStore } = useContext(AppContext);
  const isLoggedInUser = sessionStore.isAuthedUser(user);
  const isFollowing = sessionStore.isFollowing(user);

  return (
    <Box mb={3} className={classes.root}>
      <Container>
        <Box py={3}>
          <Grid container alignItems="center" spacing={3}>
            <Hidden xsDown>
              <Grid item sm={3}>
                <Avatar
                  alt={user.username}
                  src={getImageUrl(user.avatar_url, ImageSize.t500x500)}
                  className={classes.img}
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
        {children}
      </Container>
    </Box>
  );
};

export default observer(UserHeader);
