import React from 'react';
import { useState } from 'react';
import { useLanguage } from 'context/LanguageContext';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/material';

import translations from 'translations/Translations';


const Gallery = () => {
  const theme = useTheme();
  const { language } = useLanguage();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/xnl5p9qyrtfftwpzeqc8',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/xnl5p9qyrtfftwpzeqc8',
      title: 'Titolo',
      description: 'Descrizione',
      
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/qmp6kijybwlkibzxnnhv',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/qmp6kijybwlkibzxnnhv',
      title: 'Titolo',
      description: 'Descrizione',
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/h8jklckpuqlqrx1ouixl',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/h8jklckpuqlqrx1ouixl',
      title: 'Titolo',
      description: 'Descrizione',
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/jysxe6lnnperioec42xm',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/jysxe6lnnperioec42xm',
      title: 'Titolo',
      description: 'Descrizione',
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/t5chpxzf8pbm19k8535k',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/t5chpxzf8pbm19k8535k',
      title: 'Titolo',
      description: 'Descrizione',
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderOpts = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <Box
        component={'span'}
        sx={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          bgcolor: i === currentSlide ? 'primary.main' : 'grey.500',
          display: 'inline-block',
          mx: 1,
        }}
      />
    )
    
    
  };
  return (
    <Container sx={{ padding: '60px 0px 100px' }}>
      <Box marginBottom={4}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          Gallery
        </Typography>
        <Typography
          variant="h3"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          {translations?.aboutUsPage?.gallerySection?.heading[language]}
        </Typography>
        <Typography
          component="p"
          align={'center'}
          color={'text.secondary'}
          sx={{ textAlign: 'center' }}
        >
          {translations?.aboutUsPage?.gallerySection?.subheading[language]}
        </Typography>
      </Box>
      {/* <Box>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 45 : 8}
        >
          {photosToShow.map((item, i) => (
            <ImageListItem
              key={i}
              cols={isMd ? item.cols || 1 : 2}
              rows={isMd ? item.rows || 1 : 1}
            >
              <img
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                loading="lazy"
                style={{
                  objectFit: 'cover',
                
                  cursor: 'poiner',
                  borderRadius: 8,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box> */}

      <Slider {...sliderOpts}>
        {photosToShow.map((item, i) => (
          <Box key={i} padding={{ xs: 1, md: 1.5, lg: 1.5 }}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                zIndex: 99,
                '&:hover': {
                  '& img': {
                    transform: 'scale(1.2)',
                   
                  },
                  '& .portfolio-main-item': {
                    bottom: 0,
                  },
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  image={item.src}
                  sx={{
                    cursor: 'move',
                    cursor: 'grab',
                    cursor: '-moz-grab',
                    cursor: '-webkit-grab',
                    position: 'relative',
                    height: { xs: 240, sm: 340, md: 280 },
                    overflow: 'hidden',
                  }}
                ></CardMedia>
                <Box
                  position={'absolute'}
                  bottom={'-100%'}
                  left={0}
                  right={0}
                  padding={4}
                  bgcolor={'tertiary.main'}
                  className={'portfolio-main-item'}
                  sx={{ transition: 'bottom 0.3s ease 0s' }}
                >
                  <Typography variant={'h6'} fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Gallery;
