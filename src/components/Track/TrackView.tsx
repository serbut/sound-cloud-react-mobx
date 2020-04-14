import { Chip, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Track } from '../../models/track';

import { getTags } from '../../utils';
import Comments from '../Comments/Comments';
import TrackHeader from './TrackHeader';
import './TrackView.css';

const TrackView = ({ track }: { track: Track }) => {
  const history = useHistory();

  const handleTagClick = (event: string) => {
    const searchParams = new URLSearchParams();
    searchParams.append('q', event);
    searchParams.append('where', 'tracks');

    history.push({
      pathname: `/search`,
      search: searchParams.toString(),
    });
  };

  return (
    <div className="animated fadeIn">
      <TrackHeader track={track} />

      <div className="container">
        {track.description && (
          <pre>
            <Typography variant="body2">{track.description}</Typography>
          </pre>
        )}
        {track.tag_list && (
          <div className="Track-tags">
            {getTags(track.tag_list).map((el, i) => (
              <Chip
                key={i}
                label={el}
                style={{ margin: 4 }}
                onClick={() => handleTagClick(el)}
              />
            ))}
          </div>
        )}

        <Comments trackId={track.id} />
      </div>
    </div>
  );
};

export default observer(TrackView);
