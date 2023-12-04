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

const mock = [
  {
    description: 'Ascoltiamo le tue esigenze, analizziamo le tue specificità',
    icon: <Aperture />,
  },
  {
    description:
      'Studiamo insieme ogni fase di progettazione hardware e software',
    icon: <CheckCircle style={{ fontSize: '3rem' }} />,
  },
  {
    description: 'Ti consegnamo un prodotto creato su misura per te',
    icon: <Gift style={{ fontSize: '3rem' }} />,
  },
  {
    description: "Non vediamo l'ora di scoprire la sfida che ci proporrai ",
    icon: <Star style={{ fontSize: '3rem' }} />,
  },
];

const Partners = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  const isTablet = useMediaQuery('(min-width: 667px) and (max-width: 1199px)');
  const isMobile = useMediaQuery('(max-width: 800px)');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      style={{
        backgroundSize: 'cover',

        backgroundRepeat: 'no-repeat',
        // backgroundImage: isMobile
        //   ? 'url(https://res.cloudinary.com/dslne9y2j/image/upload/v1699634339/Assets/Roadmap/spor6tm0tbelwsnnyuer.png)'
        //   : 'none',
      }}
    >
      <Box>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <img
            src={
              'https://res.cloudinary.com/dslne9y2j/image/upload/v1699633073/Assets/Roadmap/dm9vphopfgwmas7uisox.png'
            }
            style={{
              position: 'absolute',
              top: 0,
              right: '0%',
              width: '75%',
              height: '86%',
              objectFit: 'cover',
              opacity: 0.2,
              filter: 'hue-rotate(32deg)',
              transform: 'rotate(-90deg)',
            }}
          />
          <RowContainer end>
            <div
              style={{
                transform: isInView ? 'none' : 'translateX(100px)',
                opacity: isInView ? 1 : 0,
                transition: `all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  marginBottom: '2rem',
                  color: `#fff`,
                  textAlign: 'right',
                }}
              >
                La nostra Roadmap
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

export default Partners;
