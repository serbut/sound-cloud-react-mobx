import { CircularProgress } from '@material-ui/core';
import React from 'react';
import './Spinner.css';

export const Spinner = () => {
  return (
    <div className="Spinner">
      <CircularProgress />
    </div>
  );
};
