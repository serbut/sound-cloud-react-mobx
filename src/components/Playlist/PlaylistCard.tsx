import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { PlaylistPlay } from '@material-ui/icons';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ImageSize } from '../../enums';
import { Playlist } from '../../models/playlist';
import { fromNow, getImageUrl } from '../../utils';
import './PlaylistCard.css';

const PlaylistCard = ({ playlist }: { playlist: Playlist }) => {
  const link = `/users/${playlist.user.permalink}/playlists/${playlist.permalink}`;

  return (
    <Card className="PlaylistCard">
      <CardMedia className="PlaylistCard-media">
        <Link to={link}>
          <img
            src={getImageUrl(playlist.artwork_url, ImageSize.t500x500)}
            alt={playlist.title}
          />
          <div className="PlaylistCard-overlay">
            <Typography
              variant="subtitle1"
              color="inherit"
              style={{ marginRight: 4 }}
            >
              {playlist.track_count}
            </Typography>
            <PlaylistPlay />
          </div>
        </Link>
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle2" noWrap title={playlist.title}>
          <Link to={link}>{playlist.title}</Link>
        </Typography>
        <Typography variant="body2" noWrap>
          <Link to={`/users/${playlist.user.permalink}`}>
            {playlist.user.username}
          </Link>
        </Typography>
        <Typography variant="caption">
          {fromNow(playlist.created_at)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(PlaylistCard);
