import React from 'react';
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

export const mock = [
  {
    logo: (
      <PrecisionManufacturingIcon
        color="primary"
        style={{ fontSize: '48px' }}
      />
    ),
    name: 'Automazione industriale',
  },
  {
    logo: <SmartToyIcon color="primary" style={{ fontSize: '48px' }} />,
    name: 'Domotica',
  },
  {
    logo: <WidgetsIcon color="primary" style={{ fontSize: '48px' }} />,
    name: 'Macchinari per realizzazione Packaging',
  },
  {
    logo: <SettingsSuggestIcon color="primary" style={{ fontSize: '48px' }} />,
    name: 'Macchinari per lavorazione materiali',
  },
  {
    logo: <ElectricCarIcon color="primary" style={{ fontSize: '48px' }} />,
    name: 'Automotive',
  },
  {
    logo: <FlightIcon color="primary" style={{ fontSize: '48px' }} />,
    name: 'Strumentazione Aeronautica',
  },
];

const Sectors = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'primary'}
            >
              Ricerca e sviluppo costanti
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              I settori in cui operiamo
            </Typography>
            <Typography variant="h6" component="p" color="text.secondary">
              Il nostro team ha sviluppato un ampio know-how collaborando con
              aziende di ogni dimensione e ambito di operatività: domotica,
            </Typography>
            <Box marginTop={2}>
              <Button
                size={'large'}
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
                Case histories
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item container spacing={2} xs={12} md={6}>
          {mock.map((item, i) => (
            <Grid item xs={4} key={i}>
              <Box display={'block'} width={1} height={1}>
                <Card
                  sx={{
                    transform: 'translateY(0)', 
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
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
                      <ColumnContainer alignItems="center" style={{ gap: 10 }}>
                        {item.logo}
                        <Typography
                          component="p"
                          align="center"
                          sx={{ fontSize: 12 }}
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
  );
};

export default Sectors;
