import { Typography } from '@material-ui/core';
import React from 'react';

const renderDescription = (description) => {
  if (!description) {
    return '';
  }

  return (
    <div>
      <Typography variant="h5">Description</Typography>
      <pre>
        <Typography>{description}</Typography>
      </pre>
    </div>
  );
};

const renderLinks = (links) => {
  if (!links || links.length === 0) {
    return '';
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Links
      </Typography>
      <ul className="user-links">
        {links.map((el, i) => (
          <li key={i}>
            <a href={el.url} className="link link--blue">
              {el.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserAbout = ({ user }) => (
  <div>
    {renderDescription(user.description)}
    <br />
    {renderLinks(user.webProfiles)}
  </div>
);

export default UserAbout;
