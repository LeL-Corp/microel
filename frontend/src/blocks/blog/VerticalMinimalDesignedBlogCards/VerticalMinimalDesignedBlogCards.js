import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import Container from 'components/Container';
import { MotionConfig } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import translations from 'translations/Translations';
import { Link } from 'react-router-dom';

import { AdvancedImage, responsive } from '@cloudinary/react';
import { lazyload } from '@cloudinary/react';
import ColumnContainer from 'components/ColumnContainer';

const VerticalMinimalDesignedBlogCards = ({ data, language }) => {
  const theme = useTheme();
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  console.log('cards image', data);
  return (
    <Container>
      <div ref={ref}>
        <Grid container spacing={4}>
          {data.map((item, i) => (
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
                  display={'block'}
                  width={1}
                  height={1}
                  sx={{
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: `translateY(-10px)`,
                    },
                  }}
                >
                  <Box
                    component={Card}
                    width={1}
                    height={1}
                    boxShadow={12}
                    display={'flex'}
                    flexDirection={'column'}
                    sx={{
                      height: { xs: '450px', sm: '400px', md: '500px' },
                      position: 'relative',
                      backgroundColor: theme.palette.primary.light,
                      backgroundImage: 'none',
                      transition: 'all .2s ease-in-out',
                      '&:hover': {
                        boxShadow: `4px 10px 13px -2px ${theme.palette.tertiary.main}`,
                      },
                    }}
                  >
                    <ColumnContainer style={{ height: '270px' }}>
                      {item.image ? (
                          <AdvancedImage
                          style={{ objectFit: 'cover', height: '100%' }}
                          alt={
                            language === 'it'
                              ? item.altIt
                              : item.altEn
                          }
                          cldImg={item.image}
                          plugins={[
                            responsive({ steps: [800, 1000, 1400] }),
                            lazyload(),
                          ]}
                        />
                      ) : (
                       <img src="/placeholder/placeholder.png" alt="Placeholder" />
                       )} 
                    
                    </ColumnContainer>
                    <Box
                      component={CardContent}
                      sx={{ minHeight: isMobile ? 'none' : '240px' }}
                      position={'relative'}
                    >
                      <Typography
                        color="text.primary"
                        variant={'h4'}
                        gutterBottom
                        sx={{ fontWeight: 700, marginBottom: 4 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                    <Box flexGrow={1} />
                  </Box>
                </Box>
              </div>
            </Grid>
          ))}
          <Grid item container justifyContent={'center'} xs={12}>
            <Button
              fullWidth
              component={Link}
              to="/roadmap"
              variant={'outlined'}
              size={'large'}
              sx={{
                height: 54,
                maxWidth: 400,
                justifyContent: 'space-between',
              }}
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
              {translations?.buttons?.roadmap[language]}
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default VerticalMinimalDesignedBlogCards;
