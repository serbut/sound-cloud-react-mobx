import { Box, Chip, Typography } from '@material-ui/core';
import React from 'react';
import { getTags } from '../../utils';

export const TrackTags = ({
  tags,
  handleTagClick,
}: {
  tags: string;
  handleTagClick: (event: string) => void;
}) => {
  if (!tags) {
    return null;
  }

  return (
    <Box py={2}>
      <Typography variant="h6" gutterBottom>
        Tags
      </Typography>

      {getTags(tags).map((tag, i) => (
        <Chip
          key={i}
          label={tag}
          style={{ margin: 4 }}
          onClick={() => handleTagClick(tag)}
        />
      ))}
    </Box>
  );
};
