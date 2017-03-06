import React from 'react';
import { Link } from 'react-router';
import { Card, CardMedia, CardContent } from 'material-ui/Card';
import Text from 'material-ui/Text';
import Icon from 'material-ui/Icon';

import './PlaylistCard.less';
import { formatDuration, fromNow, formatNumber, getImageUrl } from '../utils';
import { IMAGE_SIZES } from '../constants';

const PlaylistCard = ({ playlist }) => {
  return (
    <Card className='playlist-card'>
      <CardMedia>
        <img src={getImageUrl(playlist.artwork_url, IMAGE_SIZES.t200x200)} alt={playlist.title} width='200' height='200' />
        <div className="playlist-card__overlay">
          <Text type='subheading' colorInherit style={{marginRight: 4}}>{playlist.track_count}</Text>
          <Icon>playlist_play</Icon>
        </div>
      </CardMedia>
      <CardContent>
        <Text type="subheading" noWrap title={playlist.title}>
          <Link to={`/${playlist.user.permalink}/playlists/${playlist.permalink}`} className='link'>{playlist.title}</Link>
        </Text>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;