/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Welcome = () => {
  const theme = useTheme();
  const language = 'it';

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h3"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
        }}
      >
        {language === 'it'
          ? 'Le soluzioni dedicate sono il nostro prodotto standard'
          : 'Dedicated solutions are our standard product'}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        align={'center'}
        sx={{
          fontWeight: 400,
        }}
      >
        {language === 'it'
          ? 'Condividi le tue idee, il tuo budget e i tuoi tempi con noi'
          : 'Share your ideas, budget, and timeline with us,'}
        <br />
        {language === 'it'
          ? 'e ti connetteremo con le soluzioni che soddisfano le tue esigenze specifiche.'
          : 'and we’ll connect you solutions that match your specific needs.'}
      </Typography>
    </Box>
  );


  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
