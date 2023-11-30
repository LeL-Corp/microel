import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {  Partners } from './components';

const Roadmap = () => {
  const theme = useTheme();
  return (     
    <Main>
      <Container>
        <Partners />
      </Container>
    </Main>
  );
};

export default Roadmap;
