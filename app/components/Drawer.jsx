import React from 'react';
import { observer } from 'mobx-react'
import { browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Cloud from 'material-ui/svg-icons/file/cloud';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Explore from 'material-ui/svg-icons/action/explore';


const AppDrawer = ({ viewStore, sessionStore }) => {
  return (
    <div>
      <Drawer
        docked={false}
        open={viewStore.drawerOpen}
        onRequestChange={() => viewStore.toggleDrawer()}
        >
        <AppBar title="SoundConnect" showMenuIconButton={false} />
        <MenuItem
          leftIcon={<Explore />}
          onTouchTap={e => { viewStore.toggleDrawer(); browserHistory.push('/explore'); } }>Explore</MenuItem>
        {sessionStore.isLoggedIn ? <div>
          <MenuItem
            leftIcon={<Cloud />}
            onTouchTap={e => { viewStore.toggleDrawer(); browserHistory.push('/stream'); } }>Stream</MenuItem>
          <MenuItem
            leftIcon={<Favorite />}
            onTouchTap={e => { viewStore.toggleDrawer(); browserHistory.push(`/users/${sessionStore.user.permalink}/favorites`); } }>Likes</MenuItem>
        </div> : null}
      </Drawer>
    </div>
  )
}

export default observer(AppDrawer);
