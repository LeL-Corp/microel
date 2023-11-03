import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RowContainer from 'components/RowContainer';
import Avatar from '@mui/material/Avatar';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={'row'}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="Microel srl"
            width={200}
            margin={'0'}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://res.cloudinary.com/dlj7vy34l/image/upload/v1697837157/Progetto_senza_titolo__2_-removebg-preview_vtmhn8.png'
                  : 'https://res.cloudinary.com/dlj7vy34l/image/upload/v1697837157/Progetto_senza_titolo__2_-removebg-preview_vtmhn8.png'
              }
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <RowContainer>
              <Box
                component={Avatar}
                width={44}
                height={44}
                bgcolor={alpha(theme.palette.primary.main, 0.1)}
                color={theme.palette.primary.main}
                sx={{ cursor: 'pointer' }}
              >
                <LinkedInIcon fontSize='large' />
              </Box>
              <Box
                component={Avatar}
                width={44}
                height={44}
                bgcolor={alpha(theme.palette.primary.main, 0.1)}
                color={theme.palette.primary.main}
                sx={{ cursor: 'pointer' }}
              >
                <YouTubeIcon fontSize='large' />
              </Box>
            </RowContainer>
          </Box>
        </Box>
      </Grid>
      <Box
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        width={1}
        padding={'20px'}
        paddingBottom={'0'}
        gap={'12px'}
      >
        <Typography
          align={'left'}
          variant={'subtitle2'}
          component={'address'}
          sx={{ fontStyle: 'normal' }}
          color="text.secondary"
        >
          Microel srl
          <br></br>
          Via Mortara 192/194
          <br></br>
          27038 ROBBIO (PV)
          <br></br>
          <a
            style={{ color: '#AEB0B4', textDecoration: 'none' }}
            href={'tel:+390384 670602'}
          >
            <Typography variant={'p'}>Tel: 0384 670602</Typography>
          </a>
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        width={1}
        flexDirection={'row'}
        flexWrap={'wrap'}
        padding={'20px'}
        paddingTop={"30px"}
        gap={'12px'}
      >
        <Box display="flex" flexDirection={'column'} width={'fit-content'}>
          <Typography
            color={'primary.main'}
            fontSize={'14px'}
            variant={'h6'}
            component={Link}
            to="/"
          >
            Soluzioni
          </Typography>
        </Box>

        <Box display="flex" flexDirection={'column'} width={'fit-content'}>
          <Typography
            color={'primary.main'}
            fontSize={'14px'}
            variant={'h6'}
            component={Link}
            to="/"
          >
            Chi siamo
          </Typography>
        </Box>

        <Box display="flex" flexDirection={'column'} width={'fit-content'}>
          <Typography
            color={'primary.main'}
            fontSize={'14px'}
            variant={'h6'}
            component={Link}
            to="/"
          >
            Roadmap
          </Typography>
        </Box>

        <Box display="flex" flexDirection={'column'} width={'fit-content'}>
          <Typography
            color={'primary.main'}
            fontSize={'14px'}
            variant={'h6'}
            component={Link}
            to="/contacts"
          >
            Contatti
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
      >
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
          paddingTop={'0'}
        >
          &copy; Microel srl, 2023. All rights reserved
        </Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
