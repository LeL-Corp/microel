import React, { useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const Hero = () => {
  const theme = useTheme();
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

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 400, sm: 500, md: 600 }}
      display={'flex'}
      alignItems={'center'}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage:
            'url(https://res.cloudinary.com/dslne9y2j/image/upload/v1701453856/Assets/About_us/ek5qyis66hlqw1thiyyj.jpg)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#161c2d', 0.6),
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
            Benvenuti nel cuore della nostra azienda
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
          >
            {/* dove passione e innovazione si fondono per creare soluzioni uniche. */}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
