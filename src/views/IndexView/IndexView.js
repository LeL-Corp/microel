import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  GetStarted,
  Features,
  QuickStart,
  Services,
  Benefits,
  Hero,
} from './components';
import ColumnContainer from 'components/ColumnContainer';
import { WithLeftAlignedDescriptionBoxAndBoxedLogos } from 'blocks/logoGrid';
import Sectors from './components/Sectors/Sectors';

const IndexView = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <ColumnContainer>
          <Hero />
          <Services />

          {/* <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              0,
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat-x',
            position: 'relative',
          }}
        > */}
          {/* <Container>
            <Benefits />
          </Container> */}
          {/* <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            sx={{
              width: '100%',
              marginBottom: theme.spacing(-1),
            }}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box> */}
          {/* </Box> */}

          <Sectors />

          <Container sx={{ position: 'relative' }}>
            <img
              style={{
                opacity: '0.4',
                filter: 'brightness(0.9)',

                filter: 'hue-rotate(122deg)',
                position: 'absolute',
                bottom: '59px',
                left: '202px',

                maxWidth: '8%',
                height: 'auto',
                maxHeight: '60%',
              }}
              src="https://res.cloudinary.com/dslne9y2j/image/upload/v1698184765/Assets/Homepage/pa6ro1vkeih0jehy5hqz.png"
            ></img>
            <GetStarted />
          </Container>
        </ColumnContainer>
      </Main>
    </Box>
  );
};

export default IndexView;
