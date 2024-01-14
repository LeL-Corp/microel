import React from 'react';
import { rgbToHex, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ColumnContainer from 'components/ColumnContainer';
import RowContainer from 'components/RowContainer';
import { alpha, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SearchIcon from '@mui/icons-material/Search';
import InterestsIcon from '@mui/icons-material/Interests';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import { Aperture, Gift, Star, CheckCircle } from 'react-feather';
import VerticalLinearStepper from 'components/VerticalStepper';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useLanguage } from 'context/LanguageContext';
import translations from 'translations/Translations';

//cloudinary images optimization
import { cld } from 'helpers/cloudinary/CloudinaryInstance';
import { AdvancedImage, responsive } from '@cloudinary/react';
import { lazyload } from '@cloudinary/react';

const RoadmapSteps = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  const isTablet = useMediaQuery('(min-width: 667px) and (max-width: 1199px)');
  const isMobile = useMediaQuery('(max-width: 800px)');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { language } = useLanguage();
  const { roadmapPage } = translations;

  // Create a CloudinaryImage instance
  const roadmapImage = cld.image('Assets/Roadmap/roadmap-esagoni-desktop');
  const roadmapImageMobile = cld.image('Assets/Roadmap/roadmap-esagoni-mobile');

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
            plugins={[responsive({ steps: [800, 1000, 1400] }), lazyload()]}
          />
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
              {/* <Typography
                variant="h2"
                sx={{
                  lineHeight: '2.5rem',
                  fontWeight: 400,
                  marginBottom: '2rem',
                  color: `#fff`,
                  textAlign: 'right',
                }}
              >
                Passione, dedizione, esperienza:<br></br>il tuo successo è il
                nostro <u>obiettivo</u>.
              </Typography> */}
            </div>
          </RowContainer>

          <VerticalLinearStepper />
        </Box>
      </Box>
    </div>
  );
};

export default RoadmapSteps;
