import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from 'context/LanguageContext';
import { cld } from 'helpers/CloudinaryInstance';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import translations from 'translations/Translations';

import { AdvancedImage, responsive } from '@cloudinary/react';
import { lazyload, placeholder } from '@cloudinary/react';


const GetStarted = ({ withImage = true }) => {
  const { language } = useLanguage();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const ref = useRef();
  const isInView = useInView(ref, { once: false });


  const ideaImage = cld?.image('Assets/Homepage/idea-lampadina');

  return (
    <Box>
      {withImage && ideaImage ? (

        <AdvancedImage
          alt={
            language === 'it'
              ? "Lampadina che rappresenta un'idea"
              : 'Light bulb representing an idea'
          }
          style={{
            opacity: '0.4',
            filter: 'hue-rotate(131deg)',
            maxWidth: '8%',
            height: 'auto',
            maxHeight: '150px',
          }}
          cldImg={ideaImage}
          plugins={[responsive({ steps: [800, 1000, 1400] }), lazyload(), placeholder({mode: 'predominant-color'})]}
        />
      ) : null}

      <div
        ref={ref}
        style={{
          inset: 'unset',
          top: 'anchor(top)',
          transform: isInView ? 'none' : 'translateY(-50px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        id="anchor"
      >
        <Typography
          variant="h5"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 500,
            fontSize: '26px !important',
          }}
        >
          {translations?.home?.section5?.heading[language]}
        </Typography>
      </div>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent={'center'}
        marginTop={4}
      >
        <Button
          component={Link}
          to={'/contacts'}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
        >
          {translations?.buttons?.contact[language]}
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <Button
            component={Link}
            to={'/contacts'}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            {translations?.buttons?.where[language]}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GetStarted;
