import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Contact, Headline, Partners, Stories } from './components';
import { Hero } from 'views/IndexView/components';
import { Typography } from '@mui/material';

const Customers = () => {
  const theme = useTheme();
  return (     
    <Main>
      <Container>
     
        <Partners />
      </Container>
    </Main>
  );
};

export default Customers;
