import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

const PageNotFound = () => (
  <Container>
    <Box py={6}>
      <Typography variant="h1" align="center">
        Page not found
      </Typography>
    </Box>
  </Container>
);

export default PageNotFound;
