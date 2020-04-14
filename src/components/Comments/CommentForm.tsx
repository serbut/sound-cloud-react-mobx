import { TextField } from '@material-ui/core';
import React, { useState } from 'react';

const CommentForm = ({
  addComment,
}: {
  addComment: (value: string) => void;
}) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value) {
      setError('Please enter something.');
      return;
    }

    if (value.length < 3) {
      setError('Please enter minimum 3 symbols.');
      return;
    }

    addComment(value);

    setValue('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        error={!!error}
        label="Enter comment text"
        value={value}
        onChange={handleInputChange}
        fullWidth
        helperText={error}
      />
    </form>
  );
};

export default CommentForm;
