import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../app-context';
import { Track } from '../../models/track';
import Error from '../Error';
import { Spinner } from '../Spinner';
import TrackView from '../Track/TrackView';

const TrackComponent = () => {
  const { api } = useContext(AppContext);
  const { user: userID, track: trackID } = useParams();
  const [track, setTrack] = useState<Track | undefined>();
  const [isLoading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    if (!userID || !trackID) {
      return;
    }

    setError(false);
    setLoading(true);

    api
      .loadTrack(userID, trackID)
      .then((track) => setTrack(track))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [userID, trackID, api]);

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
