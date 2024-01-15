import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useLanguage } from 'context/LanguageContext';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Main from 'layouts/Main';
import Container from 'components/Container';

import translations from 'translations/Translations';


const NotFoundCover = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { language } = useLanguage();

  return (
    <Main>
      <Helmet
        title={translations?.metaTags?.notFoundPage.title[language]}
        meta={[
          {
            name: 'description',
            content: translations?.metaTags?.notFoundPage.description[language],
          },
          {
            name: 'keywords',
            content: translations?.metaTags?.notFoundPage.keywords[language],
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
          {
            property: 'og:title',
            content: translations?.metaTags?.openGraphTitle[language],
          },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:description',
            content: translations?.metaTags?.openGraphDescription[language],
          },
          {
            property: 'og:image',
            content:
              'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Logo/microel-logo',
          },
        ]}
        link={[
          {
            rel: 'canonical',
            href: 'https://www.microel.it/not-found/',
          },
          {
            rel: 'alternate',
            href: 'https://www.microel.it/not-found/',
            hreflang: 'x-default',
          },
        ]}
      ></Helmet>
      <Box
        sx={{
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <Container
          paddingX={6}
          paddingY={0}
          maxWidth={{ sm: 1, md: 1236 }}
          height={1}
        >
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            position={'relative'}
          >
            <Box
              width={1}
              order={{ xs: 2, md: 1 }}
              display={'flex'}
              alignItems={'center'}
            >
              <Container>
                <Box>
                  <Typography
                    variant="h1"
                    component={'h1'}
                    align={isMd ? 'left' : 'center'}
                    sx={{ fontWeight: 700 }}
                  >
                    404
                  </Typography>
                  <Typography
                    variant="h2"
                    color="text.secondary"
                    align={isMd ? 'left' : 'center'}
                    paddingTop={2}
                  >
                    {translations?.notFoundPage[language]}
                  </Typography>
                  <Box
                    marginTop={4}
                    display={'flex'}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                  >
                    <Button
                      component={Link}
                      variant="contained"
                      color="primary"
                      size="large"
                      to={'/'}
                    >
                      {translations?.buttons?.backHome[language]}
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box
              sx={{
                flex: { xs: '0 0 100%', md: '0 0 50%' },
                position: 'relative',
                maxWidth: { xs: '100%', md: '50%' },
                order: { xs: 1, md: 2 },
                minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' },
              }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50vw' },
                  height: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      overflow: 'hidden',
                      left: '0%',
                      width: 1,
                      height: 1,
                      position: { xs: 'relative', md: 'absolute' },
                      clipPath: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                      shapeOutside: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: 'auto', md: 1 },
                        '& img': {
                          objectFit: 'cover',
                        },
                      }}
                    >
                      <Box
                        component={'img'}
                        loading="lazy"
                        src={
                          'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Homepage/hero-banner-circuito-elettrico'
                        }
                        display={{
                          sm: 'none',
                          xs: 'none',
                          md: 'block',
                          lg: 'block',
                          xl: 'block',
                        }}
                        height={{ xs: 'auto', md: 1 }}
                        maxHeight={{ xs: 300, md: 1 }}
                        width={1}
                        maxWidth={1}
                        sx={{
                          filter: 'hue-rotate(-37deg)',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default NotFoundCover;
