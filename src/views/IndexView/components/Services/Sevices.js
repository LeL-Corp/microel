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
import ColumnContainer from 'components/ColumnContainer';
import Container from 'components/Container';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

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
    image:
      'https://res.cloudinary.com/dslne9y2j/image/upload/v1698410282/Assets/Homepage/uyjrbuat9euvtq4epuhz.jpg',
    description:
      'Servizi di progettazione e sbroglio di circuiti stampati. Sviluppiamo rapidamente i prototipi mediante la tecnica della microfresatura.',
    title: 'PCB Design',
  },
  {
    image:
      'https://res.cloudinary.com/dslne9y2j/image/upload/v1698410290/Assets/Homepage/azrjakab6byjv8vhxitd.jpg',
    description:
      'La linea di montaggio SMD è composta da un telaio serigrafico automatico, pick & place da 15000 componenti/ora e forno a rifusione a 8 zone',
    title: 'Assemblaggio e saldatura schede elettroniche',
  },
  {
    image:
      'https://res.cloudinary.com/dslne9y2j/image/upload/v1698410299/Assets/Homepage/vyj1sipbfeyo8twaxh6k.jpg',
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box>
      <ColumnContainer style={{ gap: '1rem' }}>
        <Box marginBottom={4}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: '32px',
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
              Le soluzioni <b>dedicate</b> sono il nostro prodotto{' '}
              <b>standard</b>
            </Typography>
          </Box>
        </Box>
        <div ref={ref}>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box width={1} height={1}>
                  <div
                    style={{
                      transform: isInView ? 'none' : 'translateX(-150px)',
                      opacity: isInView ? 1 : 0,
                      transition:
                        'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
                    }}
                  >
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
                        bgcolor={alpha(theme.palette.secondary.dark, 0.8)}
                        color={theme.palette.primary.main}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        variant={'h3'}
                        gutterBottom
                        sx={{ fontWeight: 500, fontSize: '18px !important' }}
                        align={'center'}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        align={'center'}
                        color="text.secondary"
                        sx={{ display: 'block', maxWidth: '80%' }}
                      >
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
        <Container>
          <VerticalMinimalDesignedBlogCards data={cards} />
        </Container>
      </ColumnContainer>
    </Box>
  );
};

export default Services;
