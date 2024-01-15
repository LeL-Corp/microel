import React, { useEffect } from 'react';
import { useLanguage } from 'context/LanguageContext';
import { cld } from 'helpers/CloudinaryInstance';

import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';

import translations from 'translations/Translations';


import { AdvancedImage, responsive } from '@cloudinary/react';
import { lazyload, placeholder } from '@cloudinary/react';

const Hero = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  
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

  const aboutUsImage = cld?.image('Assets/About_us/chi-siamo');

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      height={{ xs: 400, sm: 500, md: 600 }}
      maxHeight="60vh"
      display={'flex'}
      alignItems={'center'}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      {aboutUsImage ? (
        <AdvancedImage
        height={{ xs: 400, sm: 500, md: 600 }}
        className={'jarallax-img'}
        alt={
          language === 'it'
            ? 'Microel chi siamo - il nostro team'
            : 'Microel about us - our team'
        }
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          maxHeight: '60vh',
          objectFit: 'cover',
          opacity: 0.7,
        }}
        cldImg={aboutUsImage}
        plugins={[responsive({ steps: [800, 1000, 1400] }), lazyload(),
        placeholder({mode: 'predominant-color'}) ]}
      />
      ) : null}
      

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#161c2d', 0.4),
          zIndex: 1,
        }}
      />
      <Container
        position={'relative'}
        zIndex={2}
        style={{
          // backgroundColor: theme.palette.primary.main,
          filter: 'opacity(0.9)',
          maxWidth: 'unset !important',
        }}
      >
        <Box>
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            variant="h1"
            align={'left'}
            gutterBottom
            sx={{
              fontWeight: 900,
            }}
          >
            {translations?.aboutUsPage?.hero?.heading[language]}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-duration="1000"
            component="p"
            color="text.secondary"
            align={'left'}
            sx={{
              fontWeight: 700,
              fontSize: '22px',
            }}
          ></Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
