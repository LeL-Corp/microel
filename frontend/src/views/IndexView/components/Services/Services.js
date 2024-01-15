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
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useLanguage } from 'context/LanguageContext';
import translations from 'translations/Translations';
import { CircularProgress } from '@mui/material';
import { cld } from 'helpers/CloudinaryInstance';


const Services = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { language } = useLanguage();
 
  const solution1 = cld?.image('Assets/Homepage/assemblaggio-schede-elettroniche-soluzione');
  const solution2 = cld?.image('Assets/Homepage/pcb-design-soluzione');
  const solution3 = cld?.image('Assets/Homepage/test-compatibilita-soluzione');

  const section2 = [
    {
      title: translations?.home?.section2?.box1?.heading[language],
      subtitle: translations?.home?.section2?.box1?.subHeading[language],
      icon: (
        <ArchitectureIcon
          sx={{ '& path': { color: theme.palette.tertiary.main } }}
        />
      ),
    },
    {
      title: translations?.home?.section2?.box2?.heading[language],
      subtitle: translations.home.section2?.box2?.subHeading[language],
      icon: (
        <PolylineIcon
          sx={{ '& path': { color: theme.palette.tertiary.main } }}
        />
      ),
    },
    {
      title: translations?.home?.section2?.box3?.heading[language],
      subtitle: translations?.home?.section2?.box3?.subHeading[language],
      icon: (
        <RocketLaunchIcon
          sx={{ '& path': { color: theme.palette.tertiary.main } }}
        />
      ),
    },
  ];
  const section3 = [
    {
      image:
      solution1,
      altIt: "Rappresentazione del processo di assemblaggio di schede elettroniche",
      altEn: "Representation of the process of assembling electronic boards",
      description: translations?.home?.section3?.box1?.subHeading[language],
      title: translations?.home?.section3?.box1?.heading[language],
    },
    {
      image:
        solution2,
      altIt: "Scheda elettronica assemblata e saldata",
      altEn: "Assembled and soldered electronic board",
      description: translations?.home?.section3?.box2?.subHeading[language],
      title: translations?.home?.section3?.box2?.heading[language],
    },
    {
      image:
        solution3,
      altIt: "Esecuzione di un test di compatibilità elettrica",
      altEn: "Execution of an electrical compatibility test",
      description: translations?.home?.section3?.box3?.subHeading[language],
      title: translations?.home?.section3?.box3?.heading[language],
    },
  ];

  const notLoaded = section3.some((item, i) => (
    !item.image));

  return (
    <Box>
      <ColumnContainer style={{ gap: '1rem' }}>
        <Box marginBottom={4}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="tertiary.main"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: '32px',
              }}
            >
              {translations?.home?.section1?.heading[language]}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400, fontSize: '22px !important' }}
              align={'center'}
            >
              {translations?.home?.section1?.subHeading[language]}
            </Typography>
          </Box>
        </Box>
        <div ref={ref}>
          <Grid container spacing={2}>
            {section2.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box width={1} height={1}>
                  <div
                    style={{
                      transform: isInView ? 'none' : 'translateX(-150px)',
                      opacity: isInView ? 1 : 0,
                      transition:
                        'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
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
                        sx={{ fontWeight: 500 }}
                        align={'center'}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        align={'center'}
                        color="text.secondary"
                        sx={{
                          display: 'block',
                          maxWidth: '80%',
                          fontSize: '16px !important',
                        }}
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
          {notLoaded ? <CircularProgress color="secondary" /> 
          :
             (
                <VerticalMinimalDesignedBlogCards
                data={section3}
                language={language}
              />
             )
          }
         
        </Container>
      </ColumnContainer>
    </Box>
  );
};

export default Services;
