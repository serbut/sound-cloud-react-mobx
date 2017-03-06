import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import Avatar from 'material-ui/Avatar';
import Text from 'material-ui/Text';

import './UserCard.less';
import { formatNumber, getImageUrl } from '../utils';
import { IMAGE_SIZES } from '../constants';

const UserCard = ({ user }) => (
  <div className="user-card">
    <Link to={`/${user.permalink}`} className='link'>
      <Avatar
        alt={user.username}
        src={getImageUrl(user.avatar_url, IMAGE_SIZES.t200x200)}
        className='user-card__avatar'
      />
    </Link>
    <div className="user-card__content">
      <Text type='subheading' align='center'>
        <Link to={`/${user.permalink}`} className='link'>{user.username}</Link>
      </Text>
      {user.followers_count ?
        <Text type='caption' align='center'>{formatNumber(user.followers_count)} followers</Text>
        : null}
    </div>
  </div>
)

export default observer(UserCard);
