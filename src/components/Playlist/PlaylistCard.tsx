import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { PlaylistPlay } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import { IMAGE_SIZES } from '../../constants';
import { Playlist } from '../../models/playlist';
import { getImageUrl } from '../../utils';
import './PlaylistCard.css';

const PlaylistCard = ({ playlist }: { playlist: Playlist }) => {
  const link = `/users/${playlist.user.permalink}/playlists/${playlist.permalink}`;

  return (
    <Card className="PlaylistCard">
      <CardMedia className="PlaylistCard-media">
        <Link to={link}>
          <img
            src={getImageUrl(playlist.artwork_url, IMAGE_SIZES.t500x500)}
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
        <Typography variant="subtitle1" noWrap title={playlist.title}>
          <Link to={link}>{playlist.title}</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
