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

const activeLinkStyle = {
  pointerEvents: 'none',
  opacity: 0.5
};

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

  handleSearch = q => {
    this.props.router.push({ pathname: `/search`, query: { q, where: 'tracks' } });
  };

  render() {
    const { sessionStore, viewStore } = this.props;

    return (
      <AppBar className={'app-header'}>
        <Toolbar>
          <div className='header-title'>
            <Text type="title" colorInherit style={{marginRight: 20}}>{APP_TITLE}</Text>
            <Link to='/explore' className='link' activeStyle={activeLinkStyle}>
              <Button style={{color: '#fff'}}>Explore</Button>
            </Link>
            {sessionStore.isLoggedIn &&
              <div>
                <Link to={`/stream`} className='link' activeStyle={activeLinkStyle}>
                  <Button style={{color: '#fff'}} >Stream</Button>
                </Link>
                <Link to={`/users/${sessionStore.user.permalink}`} className='link' activeStyle={activeLinkStyle}>
                  <Button style={{color: '#fff'}}>Me</Button>
                </Link>
              </div>
            }
          </div>


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
