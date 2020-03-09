import React from 'react';
import {Link} from 'react-router';
import {inject, observer} from 'mobx-react';
import {Card, CardContent, CardMedia} from 'material-ui/Card';
import Text from 'material-ui/Text';
import IconButton from 'material-ui/IconButton';
import {formatNumber, fromNow, getImageUrl, isPreview} from '../../utils';
import {IMAGE_SIZES} from '../../constants';
import './TrackCard.less';

const TrackCard = ({ track, compact, playerStore, tracks = [track] }) =>
  <Card className={'track-card' + (!compact && playerStore.isSelected(track) ? ' active' : '')}>
    <CardMedia className='track-card__media'>
      <img src={getImageUrl(track.artwork_url, IMAGE_SIZES.t500x500, track.title)} alt={track.title} />
      <div className='track-card__overlay'>
        <IconButton iconClassName='track-card__play'
          onTouchTap={() => playerStore.playTrack(track, tracks.slice())}>
          {(playerStore.isSelected(track) === 'isPlaying') ? 'pause' : 'play_arrow'}
        </IconButton>
      </div>
      {isPreview(track) ?
        <div className="track-card__overlay2">
          <Text colorInherit>Preview</Text>
        </div>
        : null
      }
    </CardMedia>

    {!compact &&
      <CardContent>
        <Text type='subheading' noWrap title={track.title}>
          <Link to={`users/${track.user.permalink}/tracks/${track.permalink}`} className='link'>{track.title}</Link>
        </Text>
        <Text type='body1' secondary noWrap gutterBottom>
          <Link to={`users/${track.user.permalink}`} className='link'>{track.user.username}</Link>
        </Text>
        <Text type='caption'>
          {formatNumber(track.likes_count || track.favoritings_count) + ' likes'}
          <span className='bullet'>&bull;</span>
          {fromNow(track.created_at)}
        </Text>
      </CardContent>
    }
  </Card>;

export default inject('playerStore')(observer(TrackCard));
