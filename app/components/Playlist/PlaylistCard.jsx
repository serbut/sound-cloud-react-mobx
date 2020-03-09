import React from 'react';
import {Link} from 'react-router';
import {Card, CardContent, CardMedia} from 'material-ui/Card';
import Text from 'material-ui/Text';
import Icon from 'material-ui/Icon';
import './PlaylistCard.less';
import {getImageUrl} from '../../utils';
import {IMAGE_SIZES} from '../../constants';

const PlaylistCard = ({ playlist }) => {
  const link = `users/${playlist.user.permalink}/playlists/${playlist.permalink}`;

  return (
    <Card className='playlist-card'>
      <CardMedia className='playlist-card__media'>
        <Link to={link}>
          <img src={getImageUrl(playlist.artwork_url, IMAGE_SIZES.t500x500)} alt={playlist.title} />
          <div className="playlist-card__overlay">
            <Text type='subheading' colorInherit style={{ marginRight: 4 }}>{playlist.track_count}</Text>
            <Icon>playlist_play</Icon>
          </div>
        </Link>
      </CardMedia>
      <CardContent>
        <Text type="subheading" noWrap title={playlist.title}>
          <Link to={link} className='link'>{playlist.title}</Link>
        </Text>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
