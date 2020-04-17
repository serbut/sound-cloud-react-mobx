import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../app-context';
import useDataLoader from '../../hooks/use-data-loader';
import { Track } from '../../models/track';
import Error from '../Error';
import { Spinner } from '../Spinner';
import TrackView from '../Track/TrackView';

const TrackComponent = () => {
  const { api } = useContext(AppContext);
  const { user: userId, track: trackId } = useParams();
  const { data: track, isLoading, error } = useDataLoader<Track>(
    userId && trackId && api.endpoints.track(userId, trackId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error>Failed to load track</Error>;
  }

  if (track) {
    return <TrackView track={track} />;
  }

  return null;
};

export default observer(TrackComponent);
