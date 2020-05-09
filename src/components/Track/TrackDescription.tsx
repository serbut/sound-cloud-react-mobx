import { Box, Button, Collapse, Typography } from '@material-ui/core';
import React, { useState } from 'react';

export const TrackDescription = ({ body }: { body: string | null }) => {
  const [open, setOpen] = useState<boolean>(
    (body && body.length <= 500) || false
  );

  if (!body) {
    return null;
  }

  return (
    <Box py={2}>
      <Typography variant="h6" gutterBottom>
        Description
      </Typography>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography
          variant="body2"
          component="pre"
          paragraph
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {body}
        </Typography>
      </Collapse>

      <Button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'}</Button>
    </Box>
  );
};
