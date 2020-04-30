import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { Playlist } from '../models/playlist';
import { Track } from '../models/track';
import { User } from '../models/user';
import PlaylistCard from './Playlist/PlaylistCard';
import TrackCard from './Track/TrackCard';
import UserCard from './User/UserCard';

const renderCard = (item: Track | User | Playlist, data: any[]) => {
  switch (item.kind) {
    case 'track':
      return <TrackCard track={item} tracks={data} />;
    case 'user':
      return <UserCard user={item} />;
    case 'playlist':
      return <PlaylistCard playlist={item} />;
    default:
      return null;
  }
};

export const DataGridRow = ({
  data,
}: {
  data: (Track | User | Playlist | null)[];
}) => {
  return (
    <Box px={1}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs key={index} zeroMinWidth className="animated fadeIn">
            {item ? renderCard(item, data) : <div>Loading...</div>}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
