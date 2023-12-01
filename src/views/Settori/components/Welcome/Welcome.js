/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useInView } from 'framer-motion';

const Welcome = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });

  const theme = useTheme();
  const language = 'it';
  console.log('isinview', isInView);

  const GridItemHeadlineBlock = () => (
    <Box>
      <div
        style={{
          transform: isInView ? 'none' : '',
          opacity: isInView ? 1 : 0,
          transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s`,
        }}
      >
        <Typography
          variant="h1"
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
      </div>
    </Box>
  );

  return (
    <div ref={ref}>
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
    </div>
  );
};

export default Welcome;
