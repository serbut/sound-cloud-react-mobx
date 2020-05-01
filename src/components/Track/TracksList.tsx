import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Pause, VolumeUp } from '@material-ui/icons';
import React, { useContext } from 'react';
import { AppContext } from '../../app-context';
import { Track } from '../../models/track';
import { getImageUrl } from '../../utils';

const TracksList = ({ tracks }: { tracks: Track[] }) => {
  const { playerStore } = useContext(AppContext);
  const { isSelected, isPlaying } = playerStore;

  return (
    <List>
      {tracks.map((track: Track, i: number) => (
        <ListItem
          key={track.permalink + i}
          button
          divider
          dense
          data-track-id={track.id}
          onClick={() => playerStore.playTrack(track)}
        >
          {isSelected(track) ? (
            <ListItemIcon>{isPlaying ? <VolumeUp /> : <Pause />}</ListItemIcon>
          ) : (
            <ListItemAvatar>
              <Avatar src={getImageUrl(track.artwork_url)} />
            </ListItemAvatar>
          )}
          <ListItemText primary={track.title} secondary={track.user.username} />
        </ListItem>
      ))}
    </List>
  );
};

export default TracksList;
