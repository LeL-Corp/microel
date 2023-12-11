/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Story2 = ({ data }) => {
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
              data-aos-duration="1000"
              variant={'h3'}
              gutterBottom
              color={'primary.main'}
              sx={{ fontWeight: 700 }}
            >
              {data.title}
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-duration="1000"
              component={'p'}
              sx={{ lineHeight: 1.8 }}
            >
              {data.text}
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
          <Box maxWidth={350} width={1}>
            {data.image ? (
              <Box
                component={'img'}
                src={data.image}
                width={1}
                height={1}
                sx={{
                  borderRadius: '8px',
                }}
              />
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story2;
