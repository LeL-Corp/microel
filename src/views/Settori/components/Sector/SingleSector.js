/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SingleSector = () => {
  const theme = useTheme();
  const language = 'it';

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
        {language === 'it' ? 'Pulizia industriale' : 'Industrial cleaning'}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        align={'center'}
        sx={{
          color: theme.palette.common.black,
        }}
      >
        {/* {language === 'it' ?  'Schede elettroniche per le macchine di pulizia industriale' : 'Electronic boards for industrial cleaning machines'} */}
      </Typography>
    </Box>
  );
};

export default SingleSector;