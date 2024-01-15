import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useLanguage } from 'context/LanguageContext';
import { cld } from 'helpers/CloudinaryInstance';

import RowContainer from 'components/RowContainer';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import VerticalLinearStepper from 'components/VerticalStepper';

import translations from 'translations/Translations';

import { AdvancedImage, responsive } from '@cloudinary/react';
import { lazyload, placeholder } from '@cloudinary/react';

const RoadmapSteps = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  const isTablet = useMediaQuery('(min-width: 667px) and (max-width: 1199px)');
  const isMobile = useMediaQuery('(max-width: 800px)');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { language } = useLanguage();
  const { roadmapPage } = translations;



  const roadmapImage = cld?.image('Assets/Roadmap/roadmap-esagoni-desktop');


  return (
    <div
      ref={ref}
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          {roadmapImage ? (
            <AdvancedImage
            alt={
              language === 'it'
                ? 'Immagine di sfondo della sezione Roadmap che rappresenta esagoni in sequenza simbolo di un percorso progressivo'
                : 'Roadmap section background image representing hexagons in sequence symbol of a progressive path'
            }
            style={{
              position: 'absolute',
              top: 0,
              right: '0%',
              width: '75%',
              maxWidth: '80vw',
              height: '86%',
              objectFit: 'cover',
              opacity: 0.2,
              filter: 'hue-rotate(32deg)',
              // transform: isMobile || isTablet ? 'unset' : 'rotate(-90deg)',
            }}
            cldImg={roadmapImage}
            plugins={[responsive({ steps: [800, 1000, 1400] }), lazyload(), placeholder({mode: 'predominant-color'})]}
            />
          ) : null}
         
          <RowContainer end>
            <div>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  marginBottom: '2rem',
                  color: `#fff`,
                  textAlign: 'right',
                }}
              >
                {roadmapPage.heading[language]}
              </Typography>
             
            </div>
          </RowContainer>

          <VerticalLinearStepper />
        </Box>
      </Box>
    </div>
  );
};

export default RoadmapSteps;
