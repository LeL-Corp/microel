import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Welcome,
} from './components';
import Parallax from './components/Parallax/Parallax';

const Settori = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const theme = useTheme();

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
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
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  const parallaxData = [
    {
      sector: 'Automazione industriale',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1700857168/clean_img_3_hrspii.jpg',
    },
    {
      sector: 'Automotive',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1700857562/electric-car-battery-1680x904_tcm8-241935_u7qayu.png',
    },
    {
      sector: 'Cleaning',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1700857168/clean_img_3_hrspii.jpg',
    },
    {
      sector: 'Cleaning',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1700857168/clean_img_3_hrspii.jpg',
    },
    {
      sector: 'Cleaning',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1700857168/clean_img_3_hrspii.jpg',
    },
    {
      sector: 'Cleaning',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1700857168/clean_img_3_hrspii.jpg',
    },
  ];

  return (
    <Main>
      <Box
        minHeight={'60vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'main'}
        marginTop={-13}
        paddingTop={13}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <div ref={ref}>
              <Welcome />
            </div>
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('agency__portfolio-item--js-scroll')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>
      <Parallax parallaxData={parallaxData} />
    </Main>
  );
};

export default Settori;
