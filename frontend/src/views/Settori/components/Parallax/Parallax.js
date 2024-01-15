import React from 'react';
import { Box, Container } from '@mui/material';
import SingleSector from '../Sector/SingleSector';
import { useTheme } from '@mui/material/styles';

import { AdvancedImage, responsive } from '@cloudinary/react';
import { lazyload, placeholder } from '@cloudinary/react';

const Parallax = ({ parallaxData }) => {
  return (
    <>
      {parallaxData.map((item, index) => (
        <Box
          key={index}
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'80vh'}
          display={'flex'}
          alignItems={'center'}
        >
          <Box
            className={'jarallax-img'}
            style={{
              filter: 'brightness(40%)',
              WebkitFilter: 'brightness(35%)',
            }}
          >
            <AdvancedImage
              className={'jarallax-img'}
              cldImg={item?.imageUrl}
              alt={item.imageAlt}
              style={{
                position: 'absolute',
                objectFit: 'cover',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                filter: 'brightness(0.7)',
              }}
              plugins={[responsive({ steps: [800, 1000, 1400] }), lazyload(), placeholder({mode: 'predominant-color'})]}
            />
          </Box>
          <Container>
            <SingleSector data={item} />
          </Container>
        </Box>
      ))}
    </>
  );
};

export default Parallax;
