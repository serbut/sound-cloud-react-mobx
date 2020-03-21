import DataLoader from "../../hoc/DataLoader";
import DataGrid from "../DataGrid";
import React from "react";
import {
  getUserPlaylistsParams,
  getUserPlaylistsUrl,
  USER_PLAYLISTS_PARAMS
} from "../../api";

const UserPlaylists = ({ user }) => {
  return (
    <DataLoader
      url={getUserPlaylistsUrl(user.id)}
      params={USER_PLAYLISTS_PARAMS}
      render={props => <DataGrid {...props} />}
    />
  );
};

export default UserPlaylists;
