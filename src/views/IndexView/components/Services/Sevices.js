/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import PolylineIcon from '@mui/icons-material/Polyline';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { VerticalMinimalDesignedBlogCards } from 'blocks/blog';
import industry from '../../../../industry.jpg';
import aero from '../../../../aero.jpeg';
import packaging from '../../../../pack.jpg';
import micro from '../../../../micro.jpg';
import mech from '../../../../mechanic.jpg';
import test from '../../../../test.jpg';
import ColumnContainer from 'components/ColumnContainer';

const mock = [
  {
    title: 'Design',
    subtitle:
      'Offriamo ad ogni cliente un servizio completo di progettazione hardware e software della scheda elettronica.',
    icon: <ArchitectureIcon />,
  },
  {
    title: 'Progettazione',
    subtitle:
      "Tutte le fasi di sviluppo sono interamente gestite all'interno dell'azienda, garantendo flessibilità ed efficienza nella realizzazione di prodotti personalizzati.",
    icon: <PolylineIcon />,
  },
  {
    title: 'Delivery',
    subtitle:
      'Supporto e attenzione costante anche dopo la consegna del prodotto.',
    icon: <RocketLaunchIcon />,
  },
];
const cards = [
  {
    image: micro,
    description:
      'Servizi di progettazione e sbroglio di circuiti stampati. Sviluppiamo rapidamente i prototipi mediante la tecnica della microfresatura.',
    title: 'PCB Design',
  },
  {
    image: mech,
    description:
      'La linea di montaggio SMD è composta da un telaio serigrafico automatico, pick & place da 15000 componenti/ora e forno a rifusione a 8 zone',
    title: 'Assemblaggio e saldatura schede elettroniche',
  },
  {
    image: test,
    description:
      'Camera climatica per prove ambientali e camera prove EMC per i testi di compatibilità elettromagnetica ',
    title: 'Test di compatibilità',
    author: {
      name: 'Chary Smith',
      avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    },
    date: '22 Nov',
  },
];

const Services = () => {
  const theme = useTheme();
  return (
    <Box>
      <ColumnContainer style={{ gap: '5rem' }}>
        <Box marginBottom={4}>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Elettronica dedicata per esigenze specifiche.
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
              align={'center'}
            >
              Studiamo insieme ogni fase di{' '}
              <b>progettazione hardware e software</b> della scheda elettronica
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box width={1} height={1}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Box
                    component={Avatar}
                    width={60}
                    height={60}
                    marginBottom={2}
                    bgcolor={alpha(theme.palette.primary.main, 0.1)}
                    color={theme.palette.primary.main}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                    align={'center'}
                  >
                    {item.title}
                  </Typography>
                  <Typography align={'center'} color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <VerticalMinimalDesignedBlogCards data={cards} />
      </ColumnContainer>
    </Box>
  );
};

export default Services;
