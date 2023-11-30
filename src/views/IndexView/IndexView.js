import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  GetStarted,
  Services,
  Hero,
} from './components';
import ColumnContainer from 'components/ColumnContainer';
// import { WithLeftAlignedDescriptionBoxAndBoxedLogos } from 'blocks/logoGrid';
import Sectors from './components/Sectors/Sectors';


const IndexView = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <ColumnContainer>
          <Hero />
          <Services />
          <Sectors/>
          <Container sx={{ position: 'relative' }}>
            <GetStarted />
          </Container>
        </ColumnContainer>
      </Main>
    </Box>
  );
};

export default IndexView;
