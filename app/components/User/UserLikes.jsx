import DataLoader from "../../hoc/DataLoader";
import DataGrid from "../DataGrid";
import React from "react";
import { inject } from "mobx-react";
import { getUserLikesUrl } from "../../api";

let UserLikes = ({ user, sessionStore }) => {
  const filterData = data => {
    if (
      sessionStore.isLoggedIn &&
      user.id === sessionStore.user.id &&
      sessionStore.userLikesIds.length
    ) {
      return data.filter(el => sessionStore.userLikesIds.includes(el.id));
    } else {
      return data;
    }
  };

  return (
    <DataLoader
      url={getUserLikesUrl(user.id)}
      render={({ data, ...props }) => (
        <DataGrid data={filterData(data)} {...props} />
      )}
    />
  );
};

UserLikes = inject("sessionStore")(UserLikes);

export default UserLikes;
