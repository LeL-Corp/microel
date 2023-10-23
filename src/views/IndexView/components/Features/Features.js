/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ColumnContainer from 'components/ColumnContainer';

const mock = [
  {
    title: 200,
    subtitle: '200 + schede elettroniche realizzate.',
    suffix: '+',
  },
  {
    title: 20,
    subtitle: '20 + settori di operatività.',
    suffix: '+',
  },
  {
    title: 10,
    subtitle: '+ 10 eventi internazionali a cui abbiamo partecipato',
    suffix: '+',
  },
];

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box sx={{ marginTop: 10 }}>
      <ColumnContainer>
        <Grid
          container
          spacing={4}
          direction={isMd ? 'row-reverse' : 'column-reverse'}
        >
          <Grid item xs={12} md={6}>
            <Box marginBottom={4}>
              <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
                PCB design
              </Typography>
              <Typography
                variant={'h6'}
                component={'p'}
                color={'text.secondary'}
              >
                Servizi di progettazione e sbroglio di circuiti stampati.
                Sviluppiamo rapidamente i prototipi mediante la tecnica della
                microfresatura.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            xs={12}
            md={6}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Box component={Card} boxShadow={4} height={1} width={1}>
              <Box
                component={CardMedia}
                height={1}
                width={1}
                minHeight={300}
                // image={team}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
          <Grid item xs={12} md={6}>
            <Box marginBottom={4}>
              <Typography
                sx={{ fontWeight: 700 }}
                variant={'h4'}
                gutterBottom
              ></Typography>
              <Typography
                variant={'h6'}
                component={'p'}
                color={'text.secondary'}
              >
                Il nostro team ha sviluppato un ampio know-how in ambito di
                automazione industriale operando in svariati settori, per
                aziende di ogni dimensione.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            xs={12}
            md={6}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Box component={Card} boxShadow={4} height={1} width={1}>
              <Box
                component={CardMedia}
                height={1}
                width={1}
                minHeight={300}
                // image={team}
              />
            </Box>
          </Grid>
        </Grid>
      </ColumnContainer>
    </Box>
  );
};

export default Features;

{
  /* <Grid container spacing={2}> */
}
{
  /* {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'primary'} gutterBottom>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      duration={2}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))} */
}
{
  /* </Grid> */
}
