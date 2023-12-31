import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useInView } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Welcome } from './components';
import Parallax from './components/Parallax/Parallax';
import translations from 'translations/Translations';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useLanguage } from 'context/LanguageContext';

const Settori = () => {
  const { language, changeLanguage } = useLanguage();
  const { areasPage } = translations;

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  const parallaxData =
    language === 'it' ? areasPage.parallaxDataIt : areasPage.parallaxDataEn;

  return (
    <Main>
      <Helmet
        title={translations.metaTags.areasPage.title[language]}
        meta={[
          {
            name: 'description',
            content: translations.metaTags.areasPage.description[language],
          },
          {
            name: 'keywords',
            content: translations.metaTags.areasPage.keywords[language],
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
          {
            property: 'og:title',
            content: translations.metaTags.openGraphTitle[language],
          },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:description',
            content: translations.metaTags.openGraphDescription[language],
          },
          {
            property: 'og:image',
            content:
              'https://res.cloudinary.com/dslne9y2j/image/upload/v1697838605/Assets/Transpared-bg/logoonly_spfzrg.png',
          },
        ]}
        link={[
          {
            rel: 'canonical',
            href: 'https://www.microel.it/areas/',
          },
          {
            rel: 'alternate',
            href: 'https://www.microel.it/areas/',
            hreflang: 'x-default',
          },
        ]}
      ></Helmet>
      <Box
        minHeight={isMobile ? '40vh' : '90vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'main'}
        marginTop={-13}
        paddingTop={13}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Welcome />
            <Box marginTop={4} id="agency__portfolio-item--js-scroll">
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('agency__portfolio-item--js-scroll')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>
      <Parallax parallaxData={parallaxData} />
      <Box ref={ref} sx={{ paddingTop: '50px' }}>
        <Typography
          variant="h2"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 900,
            color: theme.palette.common.white,
            textTransform: 'uppercase',
            paddingTop: '100px',

            transform: isInView ? 'none' : 'translateY(50px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          {areasPage.callToAction.header[language]}
        </Typography>
        <Typography
          // variant="h6"
          component="p"
          color="text.primary"
          align={'center'}
          sx={{
            fontSize: '1.3rem',
            color: theme.palette.common.white,
            paddingLeft: '5%',
            paddingRight: '5%',
            paddingTop: '20px',
            textAlign: 'center',
            paddingBottom: '60px',

            transform: isInView ? 'none' : 'translateY(50px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          {areasPage.callToAction.paragraph[language]}
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent={'center'}
        marginTop={2}
        marginBottom={12}
        sx={{ paddingBottom: '50px' }}
      >
        <Button
          component={Link}
          to={'/contacts'}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
        >
          {translations.buttons.contact[language]}
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <Button
            component={Link}
            to={'/contacts'}
            target={'blank'}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            {translations.buttons.where[language]}
          </Button>
        </Box>
      </Box>
    </Main>
  );
};

export default Settori;
