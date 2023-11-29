import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import { NavItem } from './components';
import ItalianFlagIcon from 'components/icon/italianFlag.icon';
import UsaFlagIcon from 'components/icon/usaFlag.icon';

import { useLanguage } from 'context/LanguageContext';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const { changeLanguage } = useLanguage();
  const { language } = useLanguage();
  console.log('language', language);
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

  const { toggleLanguage } = useLanguage();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 200, md: 300 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://res.cloudinary.com/dlj7vy34l/image/upload/v1697837157/Progetto_senza_titolo__2_-removebg-preview_vtmhn8.png'
              : 'https://res.cloudinary.com/dlj7vy34l/image/upload/v1697837157/Progetto_senza_titolo__2_-removebg-preview_vtmhn8.png'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <Link underline="hover" color={'text.header'} href="/">
            Home
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link underline="hover" color={'text.header'} href="/about">
            Chi siamo
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link underline="hover" color={'text.header'} href="/Settori">
            Settori
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link underline="hover" color={'text.header'} href="/customers">
            Roadmap
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link underline="hover" color={'text.header'} href="/contacts">
            Contatti
          </Link>
        </Box>
        <Box marginLeft={2}>
          <Button onClick={() => changeLanguage('en')}>lingua</Button>
          {/* <ItalianFlagIcon /> */}
          {/* <UsaFlagIcon /> */}
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
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
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
