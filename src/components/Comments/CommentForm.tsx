import { TextField } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

// TODO: add validation
const CommentForm = ({
  addComment,
}: {
  addComment: (value: string) => void;
}) => {
  const [value, setValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value) {
      return;
    }

    addComment(value);

    setValue('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        label="Enter comment text"
        value={value}
        onChange={handleInputChange}
        fullWidth
      />
    </form>
  );
};

export default observer(CommentForm);
