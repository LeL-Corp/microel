/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
             I princípi che ci guidano: operosità, ricerca, innovazione
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              I nostri valori illuminano il nostro modo di lavorare e ci guidano nella scelta dei nostri partner e dei nostri clienti. 
              Collaborazione e ascolto sono alla base del nostro impegno, per garantire un servizio di qualità e un prodotto che soddisfi le esigenze del cliente.
            </Typography>
          </Box>
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
