import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AccountCircle, Search } from '@material-ui/icons';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppContext } from '../app-context';

import { APP_TITLE } from '../config';
import { useStyles } from './AppBarStyles';

const AppBarComponent = () => {
  const { sessionStore } = useContext(AppContext);
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [query, setQuery] = React.useState('');
  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'profile-menu';

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    sessionStore.login().then(() => history.push('/stream'));
  };

  const handleLogout = () => {
    sessionStore.logout();
    setAnchorEl(null);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (query.length >= 3) {
      history.push({
        pathname: `/search`,
        search: `?q=${query}&where=tracks`,
      });
    }
  };

  const buttonClasses = {
    root: classes.button,
    disabled: classes.buttonDisabled,
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.title}>
          {APP_TITLE}
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/explore"
          disabled={pathname === '/explore'}
          classes={buttonClasses}
        >
          Explore
        </Button>
        {sessionStore.user && (
          <div>
            <Button
              color="inherit"
              component={Link}
              to="/stream"
              disabled={pathname === '/stream'}
              classes={buttonClasses}
            >
              Stream
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={`/users/${sessionStore.user.permalink}`}
              disabled={pathname === `/users/${sessionStore.user.permalink}`}
              classes={buttonClasses}
            >
              Me
            </Button>
          </div>
        )}

        <div className={classes.grow} />

        <form className={classes.search} onSubmit={handleSearchSubmit}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearchInputChange}
          />
        </form>

        {sessionStore.isLoggedIn ? (
          <>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              id={menuId}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogin}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default observer(AppBarComponent);
