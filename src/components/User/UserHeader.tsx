import { Avatar, Box, Button, Typography } from '@material-ui/core';
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
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: '0 auto',
    marginBottom: theme.spacing(4),
    boxShadow: `0px 3px 1px -2px rgba(0,0,0,0.2), 
    0px 2px 2px 0px rgba(0,0,0,0.14), 
    0px 1px 5px 0px rgba(0,0,0,0.12)`,
  },
  followers: {
    marginBottom: theme.spacing(2),
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
          <Avatar
            alt={user.username}
            src={getImageUrl(user.avatar_url, ImageSize.t500x500)}
            className={classes.avatar}
          />

          <Typography variant="h4" gutterBottom>
            {user.username}
          </Typography>
          <Typography variant="body1" className={classes.followers}>
            {formatNumber(user.followers_count)} followers
          </Typography>
          {!isLoggedInUser && (
            <Button
              variant="contained"
              color={isFollowing ? 'default' : 'secondary'}
              onClick={() => sessionStore.toggleFollowing(user)}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </Button>
          )}
        </Box>
        {children}
      </Container>
    </Box>
  );
};

export default observer(UserHeader);
