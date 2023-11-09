import React from 'react';
import { rgbToHex, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ColumnContainer from 'components/ColumnContainer';
import RowContainer from 'components/RowContainer';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SearchIcon from '@mui/icons-material/Search';
import InterestsIcon from '@mui/icons-material/Interests';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import { Aperture, Gift, Star, CheckCircle } from 'react-feather';

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

  return (
    <div
      style={{
        backgroundSize: 'cover',

        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: isMobile
          ? 'url(https://res.cloudinary.com/dslne9y2j/image/upload/v1699560581/Assets/Roadmap/s1yzd3xrqb2s5weqxum6.png)'
          : 'none',
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            marginBottom: '2rem',
            color: `${theme.palette.primary.main}`,
          }}
        >
          La nostra Roadmap
        </Typography>
        {isDesktop ? (
          <Grid sx={{ height: '70vh' }} container spacing={0}>
            {mock.map((item, index) => (
              <Grid item key={index} xs={3} direction={'row'}>
                <ColumnContainer
                  minGap
                  alignItems="center"
                  style={{
                    height: '100%',
                    justifyContent: index % 2 !== 0 ? 'flex-start' : 'center',
                  }}
                >
                  <ColumnContainer
                    minGap
                    alignItems="center"
                    center
                    style={{ position: 'relative' }}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      transform="rotate(90,8,8)"
                    >
                      <g>
                        <g>
                          <motion.path
                            d="M485.291,129.408l-224-128c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-3.328,1.899-5.376,5.44-5.376,9.259v234.667
                    c0,3.819,2.048,7.36,5.376,9.259l224,128c1.643,0.939,3.456,1.408,5.291,1.408s3.648-0.469,5.291-1.408l224-128
                    c3.328-1.899,5.376-5.44,5.376-9.259V138.667C490.667,134.848,488.619,131.307,485.291,129.408z"
                            fill="transparent"
                            stroke-width={4}
                            stroke={`${theme.palette.primary.main}`}
                            initial={{ pathLength: 0, pathOffset: 1 }}
                            animate={{ pathLength: 1, pathOffset: 0 }}
                            transition={{ duration: 3 }}
                          />
                        </g>
                      </g>
                    </svg>
                    <ColumnContainer
                      alignItems="center"
                      noGap
                      style={{
                        position: 'absolute',
                        top: '30%',
                        left: '25%',
                        width: '60%',
                      }}
                    >
                      {item?.icon}
                      <motion.Typography
                        variant={'h5'}
                        fontWeight={700}
                        style={{
                          textAlign: 'center',
                          left: '25%',
                        }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 4, delay: index * 0.5 }}
                      >
                        {item.description}
                      </motion.Typography>
                    </ColumnContainer>
                  </ColumnContainer>
                </ColumnContainer>
              </Grid>
            ))}
          </Grid>
        ) : isMobile ? (
          <Grid container spacing={0}>
            <ColumnContainer>
              {mock.map((item, index) => (
                <Grid item key={index} xs={12} direction={'column'}>
                  <ColumnContainer
                    alignItems="center"
                    style={{
                      height: '100%',
                      justifyContent: 'center',
                    }}
                  >
                    <ColumnContainer alignItems="center" center>
                      <motion.div
                        style={{ width: '100%' }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 3, delay: index * 0.5 }}
                      >
                        <RowContainer
                          start
                          style={{
                            borderRadius: '9px',
                            backgroundColor:
                              index % 2 !== 0
                                ? 'rgba(81, 104, 148, 0.4)'
                                : 'rgba(37, 176, 162, 0.4)', //theme palette primary main but ion rgba qith opacity value
                            transition: '0.7s',
                            minHeight: '100px',

                            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                            backdropFilter: 'blur( 7px )',
                            WebkitBackdropFilter: 'blur(7px)',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                            borderRadius: '10px',
                          }}
                        >
                          <RowContainer padding="20px">
                            {' '}
                            {item?.icon}
                          </RowContainer>
                          <Typography
                            variant={'h5'}
                            fontWeight={700}
                            style={{
                              textAlign: 'left',
                            }}
                          >
                            {item.description}
                          </Typography>
                        </RowContainer>
                      </motion.div>
                    </ColumnContainer>
                  </ColumnContainer>
                </Grid>
              ))}
            </ColumnContainer>
          </Grid>
        ) : null}
      </Box>
    </div>
  );
};

export default Partners;
