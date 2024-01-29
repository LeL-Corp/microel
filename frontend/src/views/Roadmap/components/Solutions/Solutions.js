import React from 'react';
import { useLanguage } from 'context/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { cld } from 'helpers/CloudinaryInstance';

import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Container, ImageList, ImageListItem } from '@mui/material';

import translations from 'translations/Translations';

import { AdvancedImage } from '@cloudinary/react';
import { lazyload, placeholder } from '@cloudinary/react';
import { responsive } from '@cloudinary/react';


const Solutions = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const { roadmapPage } = translations;
  const ref = useRef(null);


  const solution1 = cld?.image(
    'Assets/Homepage/assemblaggio-schede-elettroniche-soluzione',
  );
  const solution2 = cld?.image('Assets/Homepage/pcb-design-soluzione');
  const solution3 = cld?.image('Assets/Homepage/test-compatibilita-soluzione');

  const solutions = [
    {
      image: solution1,
      description: translations?.home?.section3?.box1?.subHeading[language],
      title: translations?.home?.section3?.box1?.heading[language],
    },
    {
      image: solution2,
      description: translations?.home?.section3?.box2?.subHeading[language],
      title: translations?.home?.section3?.box2?.heading[language],
    },
    {
      image: solution3,
      description: translations?.home?.section3?.box3?.subHeading[language],
      title: translations?.home?.section3?.box3?.heading[language],
    },
  ];
  const notLoaded = solutions.some((item) => !item.image);

  const isInView = useInView(ref, { once: false });

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/xnl5p9qyrtfftwpzeqc8',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/xnl5p9qyrtfftwpzeqc8',
      title: 'Titolo',
      description: 'Descrizione',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/qmp6kijybwlkibzxnnhv',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/qmp6kijybwlkibzxnnhv',
      title: 'Titolo',
      description: 'Descrizione',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/h8jklckpuqlqrx1ouixl',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/h8jklckpuqlqrx1ouixl',
      title: 'Titolo',
      description: 'Descrizione',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/jysxe6lnnperioec42xm',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/jysxe6lnnperioec42xm',
      title: 'Titolo',
      description: 'Descrizione',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/t5chpxzf8pbm19k8535k',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/t5chpxzf8pbm19k8535k',
      title: 'Titolo',
      description: 'Descrizione',
      rows: 1,
      cols: 2,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      <div ref={ref}>
        <Box marginBottom={8} marginTop={8}>
          <Typography
            variant="h3"
            align={'center'}
            data-aos={'fade-up'}
            gutterBottom
            sx={{
              fontWeight: 500,
              fontSize: '22px !important',
              marginTop: theme.spacing(1),
              marginBottom: '30px',
            }}
          >
            {roadmapPage.solutionsSection.heading[language]}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {solutions?.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <div
                style={{
                  transform: isInView ? 'none' : 'translateY(100px)',
                  opacity: isInView ? 1 : 0,
                  transition: `all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                    0.5 + i * 0.2
                  }s`,
                }}
              >
                <Box
                  width={1}
                  height={'270px'}
                  //   data-aos={'fade-up'}
                  //   data-aos-delay={i * 100}
                  //   data-aos-offset={100}
                  //   data-aos-duration={600}
                  component={Card}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  boxShadow={0}
                  variant={'outlined'}
                  borderRadius={2}
                  sx={{
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      boxShadow: `4px 10px 13px -2px ${theme.palette.tertiary.main}`,
                      transform: `translateY(-10px)`,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box sx={{ paddingBottom: 2 }}>
                      <ListItem
                        component="div"
                        disableGutters
                        sx={{ padding: 0 }}
                      >
                        <ListItemAvatar sx={{ marginRight: 3 }}>
                          <Avatar
                            variant={'rounded'}
                            sx={{
                              width: 100,
                              height: 100,
                              borderRadius: '50%',
                            }}
                          >
                            {notLoaded ? <img src="/placeholder/placeholder.png" alt="Placeholder" /> : (
                                <AdvancedImage
                                cldImg={item.image}
                                style={{ width: '100%', height: '100%' }}
                                alt={''}
                                plugins={[
                                  responsive({ steps: [800, 1000, 1400] }),
                                  lazyload(),
                                  placeholder({mode: 'predominant-color'})
                                ]}
                              />
                            )
                            }
                          
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          sx={{ margin: 0 }}
                          primary={
                            <Typography
                              variant={'h3'}
                              fontSize={'18px !important'}
                            >
                              {item.title}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </Box>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Box>
        <Container sx={{ marginTop: '100px' }}>
          <ImageList
            variant="quilted"
            cols={4}
            rowHeight={isMd ? 300 : 220}
            gap={isMd ? 45 : 8}
            sx={{ overflow: 'visible !important' }}
          >
            {photosToShow.map((item, i) => (
              <ImageListItem
                key={i}
                cols={isMd ? item.cols || 1 : 2}
                rows={isMd ? item.rows || 1 : 1}
                sx={{
                  overflow: 'visible',
                  transition: 'all .2s ease-in-out',
                  zIndex: 99,
                  '&:hover': {
                    transform: 'scale(1.2)',
                    zIndex: 100,
                  },
                }}
              >
                <img
                  height={'100%'}
                  width={'100%'}
                  src={item.src}
                  alt="..."
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                    cursor: 'poiner',
                    borderRadius: 8,
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>
    </Box>
  );
};

export default Solutions;
