import DataLoader from '../hoc/DataLoader';
import DataGrid from './DataGrid';
import React from 'react';
import {inject} from 'mobx-react';

let UserLikes = ({user, sessionStore}) => {
  const filterData = (data) => {
    if (sessionStore.isLoggedIn
      && user.id === sessionStore.user.id
      && sessionStore.userLikesIds.length
    ) {
      return data.filter(el => sessionStore.userLikesIds.includes(el.id));
    } else {
      return data;
    }
  };

  return <DataLoader
    url={`/users/${user.id}/favorites`}
    render={({data, ...props}) =>
      <DataGrid data={filterData(data)} {...props} />
    }
  />
};

UserLikes = inject('sessionStore')(UserLikes);

export default UserLikes;
