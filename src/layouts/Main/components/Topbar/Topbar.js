import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { NavItem } from './components';
import ItalianFlagIcon from 'components/icon/italianFlag.icon';
import UsaFlagIcon from 'components/icon/usaFlag.icon';
import { useLanguage } from 'context/LanguageContext';
import translations from 'translations/Translations';
import NavigationLink from 'components/NavigationLink';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const { changeLanguage, language } = useLanguage();
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <header>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={1}
      >
        <Box
          display={'flex'}
          component={Link}
          to="/"
          title="Microel srl"
          width={{ xs: 200, md: 300 }}
        >
          <Box
            component={'img'}
            src={
              'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Logo/microel-logo'
            }
            alt="Microel srl logo"
            height={1}
            width={1}
          />
        </Box>
        <nav>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' } }}
            alignItems={'center'}
          >
            <Box>
              <NavigationLink dark to="/">
                {translations.navigation.home[language]}
              </NavigationLink>
            </Box>
            <Box marginLeft={4}>
              <NavigationLink dark to="/about">
                {translations.navigation.about[language]}
              </NavigationLink>
            </Box>
            <Box marginLeft={4}>
              <NavigationLink dark to="/areas">
                {translations.navigation.areas[language]}
              </NavigationLink>
            </Box>
            <Box marginLeft={4}>
              <NavigationLink dark to="/roadmap">
                {translations.navigation.roadmap[language]}
              </NavigationLink>
            </Box>
            <Box marginLeft={4}>
              <NavigationLink dark to="/contacts">
                {translations.navigation.contacts[language]}
              </NavigationLink>
            </Box>
            <Box marginLeft={2}>
              <Button
                onClick={() => changeLanguage(language === 'en' ? 'it' : 'en')}
              >
                {language === 'it' ? <ItalianFlagIcon /> : <UsaFlagIcon />}
              </Button>
            </Box>
          </Box>
        </nav>
        <Box
          sx={{ display: { xs: 'block', md: 'none' } }}
          alignItems={'center'}
        >
          <Button
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
              padding: 1,
              borderColor: alpha(theme.palette.divider, 0.2),
            }}
          >
            <MenuIcon />
          </Button>
        </Box>
      </Box>
    </header>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
