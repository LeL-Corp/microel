/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SingleSector = ({ data }) => {
  const theme = useTheme();
  const language = 'it';

  return (
    <Box>
      <Typography
        variant="h2"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: 'uppercase',
        }}
      >
        {data.sector}
      </Typography>
      <Typography
        // variant="h6"
        component="p"
        color="text.primary"
        align={'center'}
        sx={{
          fontSize: '1.3rem',
          color: theme.palette.common.white,
          paddingLeft: '5%',
          paddingRight: '5%',
          paddingTop:'20px',
          textAlign: 'center',
        }}
      >
        {data.description}
      </Typography>
    </Box>
  );
};

export default SingleSector;
