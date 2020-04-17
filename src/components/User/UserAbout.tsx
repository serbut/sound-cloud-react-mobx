import { Typography } from '@material-ui/core';
import React from 'react';
import { User } from '../../models/user';
import './UserAbout.css';

// TODO: Create new component
// const renderLinks = (links: { url: string; title: string }[]) => {
//   if (!links || links.length === 0) {
//     return '';
//   }
//
//   return (
//     <div className="UserAbout">
//       <Typography variant="h5" gutterBottom>
//         Links
//       </Typography>
//       <ul className="UserAbout-links">
//         {links.map((el, i) => (
//           <li key={i}>
//             <a href={el.url}>
//               <Typography color="primary">{el.title}</Typography>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const UserAbout = ({ user }: { user: User }) => {
  if (!user.description) {
    return null;
  }

  return (
    <div className="UserAbout">
      <Typography variant="h5">Description</Typography>
      <pre>
        <Typography variant="body2">{user.description}</Typography>
      </pre>
    </div>
  );
};

export default UserAbout;
