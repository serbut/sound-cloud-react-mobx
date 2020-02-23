import React from 'react';
import Text from 'material-ui/Text';

const renderDescription = (description) => {
    if (!description) {
        return '';
    }

    return <div>
        <Text type='headline' gutterBottom>Description</Text>
        <Text style={{marginBottom: 24}}>
            <pre>{description}</pre>
        </Text>
    </div>
};

const renderLinks = (links) => {
    if (!links || links.length === 0) {
        return '';
    }

    return <div>
        <Text type='headline' gutterBottom>Links</Text>
        <ul className='user-links'>
            {links.map((el, i) =>
                <li key={i}><a href={el.url} target='_blank' className='link link--blue'>{el.title}</a></li>
            )}
        </ul>
    </div>
};

const UserAbout = ({user}) =>
  <div>
    {renderDescription(user.description)}
    {renderLinks(user.webProfiles)}
  </div>;

export default UserAbout;
