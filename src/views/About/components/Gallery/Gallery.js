import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Gallery = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/xnl5p9qyrtfftwpzeqc8',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/xnl5p9qyrtfftwpzeqc8',
      rows: 2,
      cols: 1,
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/qmp6kijybwlkibzxnnhv',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/qmp6kijybwlkibzxnnhv',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/h8jklckpuqlqrx1ouixl',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/h8jklckpuqlqrx1ouixl',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/jysxe6lnnperioec42xm',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/jysxe6lnnperioec42xm',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/t5chpxzf8pbm19k8535k',
      source:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/t5chpxzf8pbm19k8535k',
      rows: 1,
      cols: 2,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          Gallery
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Uno sguardo al nostro lavoro:
        </Typography>
        <Typography variant="h6" align={'center'} color={'text.secondary'}>
          I nostri team curano tutti i dettagli, dal design, alla produzione,
          alla manutenzione.
        </Typography>
      </Box>
      <Box>
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
      </Box>
    </Box>
  );
};

export default Gallery;
