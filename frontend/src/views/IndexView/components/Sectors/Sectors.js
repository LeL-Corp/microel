import React from 'react';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useLanguage } from 'context/LanguageContext';
import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from 'components/Container';
import ColumnContainer from 'components/ColumnContainer';

import translations from 'translations/Translations';

const Sectors = () => {
  const theme = useTheme();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const { language } = useLanguage();
  const navigate = useNavigate();
 

  const experiences =
    language === 'it'
      ? translations?.home?.section4?.experiencesIt
      : translations?.home?.section4?.experiencesEn;

  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          <Grid item container xs={12} md={6} alignItems={'center'}>
            <Box>
              <div
                ref={ref}
                style={{
                  transform: isInView ? 'none' : 'translateX(-150px)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
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
                  {translations?.home?.section4?.heading[language]}
                </Typography>
                <Typography variant="p" gutterBottom sx={{ fontWeight: 700 }}>
                  {translations?.home?.section4?.subHeading[language]}
                </Typography>
                <Typography variant="h6" component="p" color="text.secondary">
                  {translations?.home?.section4?.paragraph[language]}
                </Typography>
                <Box marginTop={2}>
                  <Button
                    component={Link}
                    to={'/areas'}
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
                    {translations?.buttons?.solutions[language]}
                  </Button>
                </Box>
              </div>
            </Box>
          </Grid>
          <Grid item container md={6} xs={12} spacing={2}>
            {experiences.map((item, i) => (
              <Grid item xs={6} sm={6} md={4} key={i}>
                <Box display={'block'} width={1} height={1}>
                  <motion.div
                    onClick={() => {
                      navigate('/areas');
                    }}
                    key={i}
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: i * 0.1,
                      duration: 1,
                      ease: 'easeInOut',
                    }}
                    style={{ margin: 0.5, cursor: 'pointer' }}
                  >
                    <Card
                      sx={{
                        backgroundColor: theme.palette.tertiary.main,
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
                                fontSize: 13,
                                color: 'text.dark',
                              }}
                            >
                              {item.name}
                            </Typography>
                          </ColumnContainer>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
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
