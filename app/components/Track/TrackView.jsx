import React from 'react';
import TrackHeader from './TrackHeader';
import Text from 'material-ui/Text';
import {getTags} from '../../utils';
import Chip from 'material-ui/Chip';
import Comments from '../Comments/Comments';
import {observer} from 'mobx-react';

const TrackView = ({ track, router }) => {
  const handleTagClick = (q) => {
    router.push({ pathname: `/search`, query: { q, where: 'tracks' } });
  };

  return <div className='animated fadeIn'>
    <TrackHeader track={track}></TrackHeader>

    <div className='container'>
      {track.description &&
      <Text className='track-description'> <pre> {track.description} </pre> </Text>
      }
      {track.tag_list &&
      <div className='track-tags'>
        {getTags(track.tag_list).map((el, i) =>
          <Chip key={i} label={el} style={{ margin: 4 }} onClick={e => handleTagClick(el)} />)
        }
      </div>
      }

      <Comments trackId={track.id} />
    </div>
  </div>
};

export default observer(TrackView);
