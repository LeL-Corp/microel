import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useLanguage } from 'context/LanguageContext';
import { cld } from 'helpers/CloudinaryInstance';

import { AdvancedImage, responsive } from '@cloudinary/react';
import { lazyload, placeholder } from '@cloudinary/react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Container from 'components/Container';

import translations from 'translations/Translations';




const Hero = () => {
  const { language } = useLanguage();
 
  const heroImage = cld?.image('Assets/Homepage/hero-banner-circuito-elettrico');
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      {heroImage ? (
        <AdvancedImage
        alt={
          language === 'it'
            ? 'Immagine di sfondo della sezione Hero che rappresenta un grande circuito elettrico '
            : 'Hero section background image representing a big electric circuit'
        }
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.4,
          filter: 'hue-rotate(-37deg)',
        }}
        cldImg={heroImage}
        plugins={[responsive({ steps: [800, 1000, 1400] }), lazyload(),  placeholder({mode: 'predominant-color'})]}
      />

      ) :  null
}
      

      <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <div
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateY(50px)',
            opacity: isInView ? 1 : 0,
            transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s`,
          }}
        >
          <Container>
            <Box
              maxWidth={{
                xs: 1,
                sm: '80%',
                md: 1,
                lg: 1,
                zIndex: 1000,
                position: 'relative',
              }}
            >
              <Typography
                variant="h1"
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  lineHeight: '1.1 !important',
                  '& span': {
                    '@media (max-width: 600px)': {
                      fontSize: '18px !important',
                      fontWeight: '500',
                    },
                  },
                }}
              >
                {translations?.home?.hero?.heading[language]}
                <br></br>
                <span
                  style={{
                    fontSize: '22px',
                    color: theme.palette.text.primary,
                    lineHeight: '0.8 !important',
                  }}
                >
                  {translations?.home?.hero?.subHeading[language]}
                </span>
              </Typography>

              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                marginTop={4}
              >
                <Button
                  component={Link}
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                  to={'/about'}
                >
                  {translations?.buttons?.discover[language]}
                </Button>
                <Box
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                  width={{ xs: '100%', md: 'auto' }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    fullWidth={isMd ? false : true}
                    component={Link}
                    to={'/contacts'}
                  >
                    {translations?.buttons?.contact[language]}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </div>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{ transform: 'translate3d(20%, -50%, 0)' }}
          ></Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
          zIndex: 1000,
          position: 'relative',
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
