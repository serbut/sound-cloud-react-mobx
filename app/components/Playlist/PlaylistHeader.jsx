import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_SIZES } from "../../constants";
import { formatDuration, fromNow, getImageUrl } from "../../utils";

const PlaylistHeader = ({ playlist }) => {
  const { user } = playlist;

  return (
    <div className="playlist-header">
      <div className="container playlist-header__row">
        <img
          src={getImageUrl(playlist.artwork_url, IMAGE_SIZES.t500x500)}
          alt="playlsit.title"
          width={250}
          height={250}
        />
        <div className="playlist-header__details">
          <Typography variant="h5">Playlist</Typography>
          <Typography variant="h4" gutterBottom>
            {playlist.title}
          </Typography>
          <Typography variant="subtitle1">
            by{" "}
            <Link to={`/users/${user.permalink}`} className="link link--blue">
              {user.username}
            </Link>
          </Typography>
          <Typography variant="body1">
            {fromNow(playlist.created_at)}{" "}
            <span className="bullet">&bull;</span>
            {playlist.track_count} tracks, &nbsp;
            {formatDuration(playlist.duration)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PlaylistHeader;
