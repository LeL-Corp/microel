/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useLanguage } from 'context/LanguageContext';
import translations from 'translations/Translations';

import NavItem from './components/NavItem';
import { Link } from 'react-router-dom';
import ItalianFlagIcon from 'components/icon/italianFlag.icon';
import UsaFlagIcon from 'components/icon/usaFlag.icon';
import ColumnContainer from 'components/ColumnContainer';
import RowContainer from 'components/RowContainer';
import { Typography } from '@mui/material';
import NavigationLink from 'components/NavigationLink';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const { language, changeLanguage } = useLanguage();

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Microel"
          width={{ xs: 200, md: 220 }}
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
      </Box>
      <nav>
        <Box
          padding={'30px'}
          paddingLeft={'20px'}
          paddingBottom="8px"
          flexDirection={'column'}
          gap={'16px'}
        >
          <ColumnContainer halfGap>
            <Box paddingBottom={'20px'}>
              <NavigationLink dark to="/">
                {translations?.navigation?.home[language]}
              </NavigationLink>
            </Box>
            <Box paddingBottom={'20px'}>
              <NavigationLink dark to="/about">
                {translations?.navigation?.about[language]}
              </NavigationLink>
            </Box>
            <Box paddingBottom={'20px'}>
              <NavigationLink dark to="/areas">
                {translations?.navigation?.areas[language]}
              </NavigationLink>
            </Box>
            <Box paddingBottom={'20px'}>
              <NavigationLink dark to="/roadmap">
                {translations?.navigation?.roadmap[language]}
              </NavigationLink>
            </Box>
          </ColumnContainer>
        </Box>
      </nav>
      <Button
        size={'large'}
        variant="outlined"
        color={'primary'}
        fullWidth
        onClick={() => changeLanguage(language === 'en' ? 'it' : 'en')}
      >
        <RowContainer>
          <Typography variant="body1" color={'#fff'}>
            {language === 'it' ? 'Lingua:' : 'Language:'}
          </Typography>
          {language === 'it' ? <ItalianFlagIcon /> : <UsaFlagIcon />}
        </RowContainer>
      </Button>
      <Box marginTop={2}>
        <Button
          variant="contained"
          size="large"
          color={'primary'}
          fullWidth
          component={Link}
          to="/contacts"
        >
          {translations?.buttons?.contact[language]}
        </Button>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
