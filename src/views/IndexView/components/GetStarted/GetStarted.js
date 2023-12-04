import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from 'context/LanguageContext';
import translations from 'translations/Translations';

const GetStarted = ({ withImage = true }) => {
  const { language } = useLanguage();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const ref = useRef();
  const isInView = useInView(ref, { once: false });

  return (
    <Box>
      {withImage ? (
        <img
          anchor="anchor"
          style={{
            opacity: '0.4',
            filter: 'hue-rotate(131deg)',
            maxWidth: '8%',
            height: 'auto',
            maxHeight: '150px',
          }}
          src="https://res.cloudinary.com/dslne9y2j/image/upload/v1698184765/Assets/Homepage/pa6ro1vkeih0jehy5hqz.png"
        ></img>
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
            fontWeight: 700,
            fontSize: '26px',
          }}
        >
          {translations.home.section5.heading[language]}
        </Typography>
      </div>
      {/* <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
      >
      </Typography> */}
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
    </Box>
  );
};

export default GetStarted;
