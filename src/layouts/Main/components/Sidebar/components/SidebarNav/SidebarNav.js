/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';
import { Link } from '@mui/material';

const SidebarNav = ({ pages }) => {
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
              mode === 'light'
                ? 'https://res.cloudinary.com/dlj7vy34l/image/upload/v1697837157/Progetto_senza_titolo__2_-removebg-preview_vtmhn8.png'
                : 'https://res.cloudinary.com/dlj7vy34l/image/upload/v1697837157/Progetto_senza_titolo__2_-removebg-preview_vtmhn8.png'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box padding={'30px'} paddingLeft={"20px"} flexDirection={'column'} gap={'16px'}>
        <Box paddingBottom={'20px'}>
          <Link
            underline="hover"
            color={"#fff"}
            href="/"
          >
            Chi siamo
          </Link>
        </Box>
        <Box paddingBottom={'20px'}>
          <Link
            underline="hover"
            color={"#fff"}
            href="/"
          >
            Soluzioni
          </Link>
        </Box>
        <Box paddingBottom={'20px'}>
          <Link
            underline="hover"
            color={"#fff"}
            href="/"
          >
            Case History
          </Link>
        </Box>

        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            color={"primary"}
            fullWidth
            component={Link}
            href="/contacts"
          >
            Contatti
          </Button>
         
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
