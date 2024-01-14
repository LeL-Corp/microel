import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RowContainer from 'components/RowContainer';
import Avatar from '@mui/material/Avatar';
import translations from 'translations/Translations';
import { useLanguage } from 'context/LanguageContext';
import ItalianFlagIcon from 'components/icon/italianFlag.icon';
import UsaFlagIcon from 'components/icon/usaFlag.icon';
import ColumnContainer from 'components/ColumnContainer';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const { language, changeLanguage } = useLanguage();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
            component={Link}
            to="/"
            title="Microel srl"
            width={250}
            margin={'0'}
          >
            <Box
              component={'img'}
              src={
                'https://res.cloudinary.com/dlj7vy34l/image/upload/v1697837157/Progetto_senza_titolo__2_-removebg-preview_vtmhn8.png'
              }
              height={1}
              width={1}
            />
          </Box>

          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <RowContainer>
              <Typography variant="body1" color={'#fff'}>
                {isMobile
                  ? translations.navigation.discoverMoreMobile[language]
                  : translations.navigation.discoverMore[language]}
              </Typography>{' '}
              <Box
                component={'a'}
                href={'https://it.linkedin.com/company/flybox-avionics'}
                target="_blank"
              >
                <Box
                  component={Avatar}
                  width={44}
                  height={44}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                  sx={{ cursor: 'pointer' }}
                >
                  <LinkedInIcon fontSize="large" />
                </Box>
              </Box>
              <Box
                component={'a'}
                href={'https://www.youtube.com/@flyboxavionics2801'}
                target={'_blank'}
              >
                <Box
                  component={Avatar}
                  width={44}
                  height={44}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                  sx={{ cursor: 'pointer', marginRight: '20px' }}
                >
                  <YouTubeIcon fontSize="large" />
                </Box>
              </Box>
            </RowContainer>
          </Box>
        </Box>
      </Grid>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={1}
        padding={'20px'}
        paddingBottom={'0'}
        gap={'12px'}
        marginTop={'50px'}
      >
        <Typography
          align={'left'}
          variant={'body1'}
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
          <a style={{ textDecoration: 'none' }} href={'tel:+390384 670602'}>
            <Typography variant="body1" color={'#fff'}>
              Tel: 0384 670602
            </Typography>
          </a>
        </Typography>
        <Button
          size={'large'}
          variant="outlined"
          color={'primary'}
          onClick={() => changeLanguage(language === 'en' ? 'it' : 'en')}
          sx={{ marginRight: '20px' }}
        >
          <RowContainer>
            <Typography variant="body1" color={'#fff'}>
              {language === 'it' ? 'Lingua:' : 'Language:'}
            </Typography>
            {language === 'it' ? <ItalianFlagIcon /> : <UsaFlagIcon />}
          </RowContainer>
        </Button>
      </Box>
      <ColumnContainer>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={1}
          flexDirection={'row'}
          flexWrap={'wrap'}
          padding={'20px'}
          paddingTop={'30px'}
          paddingBottom={'0'}
          gap={'12px'}
          component={'nav'}
        >
          <Box display="flex" flexDirection={'column'} width={'fit-content'}>
            <Typography
              color={'primary.main'}
              fontSize={'14px'}
              variant={'h6'}
              component={Link}
              to="/"
            >
              {translations.navigation.home[language]}
            </Typography>
          </Box>

          <Box display="flex" flexDirection={'column'} width={'fit-content'}>
            <Typography
              color={'primary.main'}
              fontSize={'14px'}
              variant={'h6'}
              component={Link}
              to="/about"
            >
              {translations.navigation.about[language]}
            </Typography>
          </Box>
          <Box display="flex" flexDirection={'column'} width={'fit-content'}>
            <Typography
              color={'primary.main'}
              fontSize={'14px'}
              variant={'h6'}
              component={Link}
              to="/areas"
            >
              {translations.navigation.areas[language]}
            </Typography>
          </Box>

          <Box display="flex" flexDirection={'column'} width={'fit-content'}>
            <Typography
              color={'primary.main'}
              fontSize={'14px'}
              variant={'h6'}
              component={Link}
              to="/roadmap"
            >
              {translations.navigation.roadmap[language]}
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
              {translations.navigation.contacts[language]}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          width={'100%'}
          gap={'12px'}
        >
          <Box display="flex" flexDirection={'column'} width={'fit-content'}>
            <Typography
              color={'text.secondary'}
              fontSize={'13px !important'}
              variant={'h6'}
              component={Link}
              to="/cookies-policy"
            >
              Cookie Policy
            </Typography>
          </Box>
          <Box display="flex" flexDirection={'column'} width={'fit-content'}>
            <Typography
              color={'text.secondary'}
              fontSize={'13px !important'}
              variant={'h6'}
              component={Link}
              to="/privacy-policy"
            >
              Privacy Policy
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
            &copy; Microel srl, 2024. All rights reserved
          </Typography>
        </Box>
      </ColumnContainer>
    </Grid>
  );
};

export default Footer;
