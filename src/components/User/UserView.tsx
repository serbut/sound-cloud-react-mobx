import { Tab, Tabs } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { User } from '../../models/user';
import UserAbout from './UserAbout';
import UserFollowings from './UserFollowings';
import UserHeader from './UserHeader';
import UserLikes from './UserLikes';
import UserPlaylists from './UserPlaylists';
import UserTracks from './UserTracks';
import './UserView.css';

// TODO: move tabs to UserTabs component
const UserView = ({ user }: { user: User }) => {
  const history = useHistory();
  const location = useLocation();
  const [tabs, setTabs] = useState<string[]>([]);

  useEffect(() => {
    const tabs = [];

    if (user.track_count > 0) {
      tabs.push('tracks');
    }
    if (user.playlist_count > 0) {
      tabs.push('playlists');
    }
    if (user.public_favorites_count > 0) {
      tabs.push('likes');
    }
    if (user.followings_count > 0) {
      tabs.push('followings');
    }
    if (user.description) {
      tabs.push('about');
    }

    setTabs(tabs);
  }, [
    user.track_count,
    user.playlist_count,
    user.public_favorites_count,
    user.followings_count,
    user.description,
  ]);

  useEffect(() => {
    if (tabs.length === 0) {
      return;
    }

    if (
      /^.*\/(tracks|playlists|likes|followings|about)$/.test(location.pathname)
    ) {
      return;
    }

    history.replace(`/users/${user.permalink}/${tabs[0]}`);
  }, [tabs, history, location.pathname, user.permalink]);

  const handleTabChange = (event: React.ChangeEvent<{}>, index: number) => {
    const tab = tabs && tabs[index];

    if (tab) {
      tab && history.push(`/users/${user.permalink}/${tab}`);
    }
  };

  const selectedTabIndex = tabs.findIndex((tab) =>
    location.pathname.includes(tab)
  );

  return (
    <div className="User animated fadeIn">
      <div className="User-header">
        <div className="container">
          <UserHeader user={user} />

          {selectedTabIndex !== -1 && (
            <Tabs value={selectedTabIndex} onChange={handleTabChange}>
              {tabs.map((el, i) => (
                <Tab key={i} label={el} />
              ))}
            </Tabs>
          )}
        </div>
      </div>

      <div className="container">
        <Route
          path="/users/:user/tracks"
          render={() => <UserTracks user={user} />}
        />
        <Route
          path="/users/:user/playlists"
          render={() => <UserPlaylists user={user} />}
        />
        <Route
          path="/users/:user/likes"
          render={() => <UserLikes user={user} />}
        />
        <Route
          path="/users/:user/followings"
          render={() => <UserFollowings user={user} />}
        />
        <Route
          path="/users/:user/about"
          component={() => <UserAbout user={user} />}
        />
      </div>
    </div>
  );
};

export default observer(UserView);
