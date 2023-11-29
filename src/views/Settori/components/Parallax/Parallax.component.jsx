import React from 'react';
import { Box, Container } from '@mui/material';
import SingleParallaxComponent from '../Single_sector/SingleParallax.component';
import { useTheme } from '@mui/material/styles';

const ParallaxComponent = ({ parallaxData }) => {
  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: 'brightness(0.7)',
  });
  return (
    <>
      {parallaxData.map((item, index) => (
        <Box
          key={index}
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'50vh'}
          display={'flex'}
          alignItems={'center'}
        >
          <Box
            className={'jarallax-img'}
            sx={styles(item.imageUrl)}
            style={{
              filter: 'brightness(80%)',
              WebkitFilter: 'brightness(50%)',
            }}
          />
          <Container>
            <SingleParallaxComponent />
          </Container>
        </Box>
      ))}
    </>
  );
};

export default ParallaxComponent;
