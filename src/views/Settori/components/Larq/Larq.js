/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Larq = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h1"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: 'uppercase',
        }}
      >
        Automotive
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        align={'center'}
        sx={{
          color: theme.palette.common.white,
        }}
      >
      </Typography>
    </Box>
  );
};

export default Larq;
