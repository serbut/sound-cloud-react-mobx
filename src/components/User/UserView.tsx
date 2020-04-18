import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import { User } from '../../models/user';
import UserAbout from './UserAbout';
import UserFollowings from './UserFollowings';
import UserHeader from './UserHeader';
import UserLikes from './UserLikes';
import UserPlaylists from './UserPlaylists';
import { UserTabs } from './UserTabs';
import UserTracks from './UserTracks';

export type UserTab = { value: string; label: string };

const UserView = ({ user }: { user: User }) => {
  const history = useHistory();
  const location = useLocation();
  const { path, url } = useRouteMatch();
  const [tabs, setTabs] = useState<UserTab[]>([]);

  useEffect(() => {
    const tabs: UserTab[] = [];

    if (user.track_count > 0) {
      tabs.push({ value: '/tracks', label: `${user.track_count} tracks` });
    }
    if (user.playlist_count > 0) {
      tabs.push({
        value: '/playlists',
        label: `${user.playlist_count} playlists`,
      });
    }
    if (user.public_favorites_count > 0) {
      tabs.push({
        value: '/likes',
        label: `${user.public_favorites_count} likes`,
      });
    }
    if (user.followings_count > 0) {
      tabs.push({
        value: '/followings',
        label: `${user.followings_count} followings`,
      });
    }
    if (user.description) {
      tabs.push({ value: '/about', label: 'About' });
    }

    setTabs(tabs);
  }, [
    user.track_count,
    user.playlist_count,
    user.public_favorites_count,
    user.followings_count,
    user.description,
  ]);

  const handleTabChange = (event: React.ChangeEvent<{}>, index: number) => {
    history.push(url + tabs[index].value);
  };

  const selectedTabIndex = tabs.findIndex((tab) =>
    new RegExp(`^${url}${tab.value}$`).test(location.pathname)
  );

  return (
    <div className="animated fadeIn">
      <Box mb={3} style={{ backgroundColor: '#eeeeee99' }}>
        <Container>
          <UserHeader user={user} />
          <UserTabs
            tabs={tabs}
            selectedTabIndex={selectedTabIndex}
            handleTabChange={handleTabChange}
          />
        </Container>
      </Box>

      <Container>
        <Switch>
          <Route
            path={`${path}/tracks`}
            render={() => <UserTracks user={user} />}
          />
          <Route
            path={`${path}/playlists`}
            render={() => <UserPlaylists user={user} />}
          />
          <Route
            path={`${path}/likes`}
            render={() => <UserLikes user={user} />}
          />
          <Route
            path={`${path}/followings`}
            render={() => <UserFollowings user={user} />}
          />
          <Route
            path={`${path}/about`}
            component={() => <UserAbout user={user} />}
          />
          {tabs[0] && <Redirect from={path} to={path + tabs[0].value} />}
        </Switch>
      </Container>
    </div>
  );
};

export default observer(UserView);
