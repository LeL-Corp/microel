import React from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Container from 'components/Container';
import ColumnContainer from 'components/ColumnContainer';

import SmartToyIcon from '@mui/icons-material/SmartToy';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import FlightIcon from '@mui/icons-material/Flight';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const mock = [
  {
    logo: (
      <PrecisionManufacturingIcon
        color="secondary"
        style={{ fontSize: '48px' }}
      />
    ),
    name: 'Automazione industriale',
  },
  {
    logo: <SmartToyIcon color="secondary" style={{ fontSize: '48px' }} />,
    name: 'Domotica',
  },
  {
    logo: <WidgetsIcon color="secondary" style={{ fontSize: '48px' }} />,
    name: 'Macchinari per realizzazione Packaging',
  },
  {
    logo: (
      <SettingsSuggestIcon color="secondary" style={{ fontSize: '48px' }} />
    ),
    name: 'Macchinari per lavorazione materiali',
  },
  {
    logo: <ElectricCarIcon color="secondary" style={{ fontSize: '48px' }} />,
    name: 'Automotive',
  },
  {
    logo: <FlightIcon color="secondary" style={{ fontSize: '48px' }} />,
    name: 'Strumentazione Aeronautica',
  },
];

const Sectors = () => {
  const theme = useTheme();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <Container>
        <Grid container spacing={4}>
          <Grid item container xs={12} md={6} alignItems={'center'}>
            <Box>
              <div
                style={{
                  transform: isInView ? 'none' : 'translateX(-150px)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: '32px',
                  }}
                  gutterBottom
                  color={'#6096fc'}
                >
                  Ricerca e sviluppo costanti
                </Typography>
                <Typography variant="p" gutterBottom sx={{ fontWeight: 700 }}>
                  I settori in cui operiamo
                </Typography>
                <Typography variant="h6" component="p" color="text.secondary">
                  Il nostro team ha sviluppato un ampio know-how collaborando
                  con aziende di ogni dimensione e ambito di operatività:
                  domotica,
                </Typography>
                <Box marginTop={2}>
                  <Button
                    size={'large'}
                    variant={'outlined'}
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    Roadmap
                  </Button>
                </Box>
              </div>
            </Box>
          </Grid>
          <Grid item container md={6} xs={12} spacing={2}>
            {mock.map((item, i) => (
              <Grid item xs={6} sm={6} md={4} key={i}>
                <Box display={'block'} width={1} height={1}>
                  <Card
                    sx={{
                      backgroundColor: theme.palette.secondary.dark,
                      transform: 'translateY(0)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        '&:hover': {
                          boxShadow: `0px 10px 13px -7px rgba(37, 176, 162)`,
                        },
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 3,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        component={'div'}
                        height={100}
                        width={100}
                        alt={item.name}
                      >
                        <ColumnContainer
                          alignItems="center"
                          style={{ gap: 10 }}
                        >
                          {item.logo}
                          <Typography
                            component="p"
                            align="center"
                            sx={{
                              fontWeight: 900,
                              fontSize: 12,
                              color: 'text.dark',
                            }}
                          >
                            {item.name}
                          </Typography>
                        </ColumnContainer>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Sectors;
