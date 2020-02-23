import React from 'react';
import {Link} from 'react-router';
import {inject, observer} from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import {Menu, MenuItem} from 'material-ui/Menu';
import './AppBar.less';
import SearchWidget from './SearchWidget';
import {APP_TITLE} from '../config';

@inject('sessionStore', 'viewStore') @observer
export default class MyAppBar extends React.Component {
  state = {
    anchorEl: undefined,
    open: false
  };

  handleRequestOpen = (event) => this.setState({ open: true, anchorEl: event.currentTarget });

  handleRequestClose = () => this.setState({ open: false });

  handleLoginClick = e => {
    this.props.sessionStore.login()
      .then(() => this.props.router.push('/stream'))
  };

  handleLogoutClick = e => {
    this.handleRequestClose();
    this.props.sessionStore.logout();
  };

  handleProfileClick = e => {
    const { router, sessionStore } = this.props;
    this.handleRequestClose();
    router.push(`/${sessionStore.user.permalink}`);
  };

  handleLikesClick = e => {
    const { router, sessionStore } = this.props;
    this.handleRequestClose();
    router.push(`/${sessionStore.user.permalink}/likes`);
  };

  handleStreamClick = e => {
    this.handleRequestClose();
    this.props.router.push('/stream');
  };

  handleSearch = q => {
    this.props.router.push({ pathname: `/search/tracks`, query: { q } });
  };

  render() {
    const { sessionStore, viewStore } = this.props;

    return (
      <AppBar className={'app-header'}>
        <Toolbar>
          {/*<IconButton contrast onTouchTap={() => viewStore.toggleDrawer()}>menu</IconButton>*/}
          <Text type="title" colorInherit className='header-title'>
            <Link to='/' className='link'>{APP_TITLE}</Link>
            <span className='title-separator'>-</span> <span>{viewStore.title}</span>
          </Text>

          <SearchWidget handleSearch={this.handleSearch}/>

          {sessionStore.isLoggedIn ?
            <div>
              <IconButton contrast aria-owns="simple-menu" aria-haspopup="true"
                onClick={this.handleRequestOpen}>more_vert_icon</IconButton>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
              >
                <MenuItem onClick={this.handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={this.handleStreamClick}>Stream</MenuItem>
                <MenuItem onClick={this.handleLikesClick}>Likes</MenuItem>
                <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
              </Menu>
            </div>
            :
            <Button contrast onTouchTap={this.handleLoginClick}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    );
  }
}
