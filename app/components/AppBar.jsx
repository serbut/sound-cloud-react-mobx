import {
    AppBar,
    Button,
    fade,
    IconButton,
    InputBase,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { AccountCircle, Search } from '@material-ui/icons';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { APP_TITLE } from '../config';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        marginRight: theme.spacing(2),
    },
    link: {
        display: 'inline-block',
        color: 'inherit',
        textDecoration: 'none',
    },
    button: {
        '&$buttonDisabled': {
            color: '#ffffff60',
        },
    },
    buttonDisabled: {},
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));

const AppBarComponent = ({ sessionStore, router }) => {
    const classes = useStyles();
    const history = useHistory();
    const { pathname } = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [query, setQuery] = React.useState('');
    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'profile-menu';

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const hangleLogin = () => {
        sessionStore.login().then(() => history.push('/stream'));
    };

    const handleLogout = () => {
        sessionStore.logout();
        setAnchorEl(null);
    };

    const handleSearchInputChange = ev => {
        setQuery(ev.target.value);
    };

    const handleSearchSubmit = ev => {
        ev.preventDefault();

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
        <AppBar position="fixed">
            <Toolbar>
                <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.title}
                >
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
                {sessionStore.isLoggedIn && (
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
                            disabled={
                                pathname ===
                                `/users/${sessionStore.user.permalink}`
                            }
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
                    <Button color="inherit" onClick={hangleLogin}>
                        Login
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default inject('sessionStore')(observer(AppBarComponent));
