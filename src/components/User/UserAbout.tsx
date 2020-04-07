import { Typography } from '@material-ui/core';
import React from 'react';
import { UserWithWebProfiles } from './User';
import './UserAbout.css';

const renderDescription = (description: string | null) => {
  if (!description) {
    return '';
  }

  return (
    <div>
      <Typography variant="h5">Description</Typography>
      <pre>
        <Typography variant="body2">{description}</Typography>
      </pre>
    </div>
  );
};

const renderLinks = (links: { url: string; title: string }[]) => {
  if (!links || links.length === 0) {
    return '';
  }

  return (
    <div className="UserAbout">
      <Typography variant="h5" gutterBottom>
        Links
      </Typography>
      <ul className="UserAbout-links">
        {links.map((el, i) => (
          <li key={i}>
            <a href={el.url}>
              <Typography color="primary">{el.title}</Typography>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserAbout = ({ user }: { user: UserWithWebProfiles }) => (
  <div>
    {renderDescription(user.description)}
    <br />
    {renderLinks(user.webProfiles)}
  </div>
);

export default UserAbout;
