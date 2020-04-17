import { Container } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import qs from 'qs';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Track } from '../../models/track';
import Comments from '../Comments/Comments';
import { TrackDescription } from './TrackDescription';
import TrackHeader from './TrackHeader';
import { TrackTags } from './TrackTags';

const TrackView = ({ track }: { track: Track }) => {
  const history = useHistory();

  const handleTagClick = (event: string) => {
    history.push({
      pathname: `/search`,
      search: qs.stringify({
        q: event,
        where: 'tracks',
      }),
    });
  };

  return (
    <div className="animated fadeIn">
      <TrackHeader track={track} />

      <Container>
        <TrackDescription body={track.description} />
        <TrackTags tags={track.tag_list} handleTagClick={handleTagClick} />
        <Comments trackId={track.id} commentsCount={track.comment_count} />
      </Container>
    </div>
  );
};

export default observer(TrackView);
