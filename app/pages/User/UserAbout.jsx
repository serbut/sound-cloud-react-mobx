import React from 'react';
import Text from 'material-ui/Text';

const UserAbout = ({user, userWebProfiles}) =>
  <div>
    <Text type='headline' gutterBottom>Statistics</Text>
    <Text style={{ marginBottom: 24 }}>
      {user.followings_count} followings <span className='bullet'>&bull;</span>
      {user.playlist_count} playlists <span className='bullet'>&bull;</span>
      {user.public_favorites_count} likes <span className='bullet'>&bull;</span>
      {user.reposts_count} reposts <span className='bullet'>&bull;</span>
      {user.track_count} tracks
      </Text>

    <Text type='headline' gutterBottom>Description</Text>
    <Text style={{ marginBottom: 24 }}><pre>{user.description}</pre></Text>

    <Text type='headline' gutterBottom>Links</Text>
    <ul className='user-links'>
      {userWebProfiles.map((el, i) =>
        <li key={i}><a href={el.url} target='_blank' className='link link--blue'>{el.title}</a></li>
      )}
    </ul>
  </div>

export default UserAbout;
