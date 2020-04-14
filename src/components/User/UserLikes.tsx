import React, { useContext } from 'react';

import { AppContext } from '../../app-context';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';
import DataLoader from '../DataLoader';

const UserLikes = ({ user }: { user: User }) => {
  const { sessionStore, api } = useContext(AppContext);

  const filterData = (data: any[]) => {
    if (
      data &&
      sessionStore.user &&
      user.id === sessionStore.user.id &&
      sessionStore.userLikesIds.length
    ) {
      return data.filter((el) => sessionStore.userLikesIds.includes(el.id));
    } else {
      return data;
    }
  };

  return (
    <DataLoader
      url={api.getUserLikesUrl(user.id)}
      render={({ data, ...props }: { data: any[]; props: any }) => (
        // @ts-ignore
        <DataGrid data={filterData(data)} {...props} />
      )}
    />
  );
};

export default UserLikes;
