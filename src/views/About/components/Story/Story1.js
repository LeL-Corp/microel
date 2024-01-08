/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import { AdvancedImage, responsive } from '@cloudinary/react';
import { lazyload } from '@cloudinary/react';

const Story1 = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? data.direction : 'column'}>
        <Grid
          item
          container
          justifyContent={'center'}
          alignItems={'center'}
          xs={12}
          md={6}
        >
          <Box>
            <Typography
              data-aos="fade-up"
              variant={'h2'}
              gutterBottom
              color={'primary.main'}
              sx={{ fontWeight: 700 }}
            >
              {data.title}
            </Typography>
            <Typography
              data-aos="fade-up"
              component={'p'}
              sx={{ lineHeight: 1.8 }}
            >
              {data.text}{' '}
              <a
                style={{ color: '#fff' }}
                href="https://www.flyboxavionics.it/index.html"
              >
                Flybox Avionics
              </a>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box width={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            {data.image ? (
              <AdvancedImage
                alt={data.imageAlt}
                style={{
                  borderRadius: '8px',
                  maxWidth: '300px',
                }}
                cldImg={data.image}
                plugins={[lazyload()]}
              />
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story1;
