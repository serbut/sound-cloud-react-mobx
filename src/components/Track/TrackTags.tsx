import { Box, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { getTags } from '../../utils';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
  },
}));

export const TrackTags = ({
  tags,
  handleTagClick,
}: {
  tags: string;
  handleTagClick: (event: string) => void;
}) => {
  const classes = useStyles();
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
          className={classes.chip}
          onClick={() => handleTagClick(tag)}
        />
      ))}
    </Box>
  );
};
