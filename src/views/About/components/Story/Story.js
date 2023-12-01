/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Story = ({ data }) => {
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
              data-aos="fade-left"
              data-aos-duration="1000"
              variant={'h3'}
              gutterBottom
              color={'primary.main'}
              sx={{ fontWeight: 700 }}
            >
              {data.title}
            </Typography>
            <Typography
              data-aos="fade-left"
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
          <Box maxWidth={390} width={1}>
            {data.image ? (
 <Box
 component={'img'}
 src={data.image}
 width={1}
 height={1}
 sx={{
   filter:
     theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
 }}
/>

            ) : null}
            </Box>
           
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
