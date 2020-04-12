import React, { useEffect } from 'react';

const Callback = () => {
  useEffect(() => {
    window.setTimeout(window.opener.SC.connectCallback, 1);
  }, []);

  return (
    <div>
      <p>This page should close soon.</p>
    </div>
  );
};

export default Callback;
