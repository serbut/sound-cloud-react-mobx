import React, { useContext } from 'react';

import { getUserLikesUrl } from '../../api';
import { AppContext } from '../../app-context';
import DataLoader from '../../hoc/DataLoader';
import { User } from '../../models/user';
import DataGrid from '../DataGrid';

const UserLikes = ({ user }: { user: User }) => {
  const { sessionStore } = useContext(AppContext);

  const filterData = (data: any[]) => {
    if (
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
      url={getUserLikesUrl(user.id)}
      render={({ data, ...props }: { data: any[]; props: any }) => (
        // @ts-ignore
        <DataGrid data={filterData(data)} {...props} />
      )}
    />
  );
};

export default UserLikes;
