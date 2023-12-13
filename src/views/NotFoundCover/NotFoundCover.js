import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import Main from 'layouts/Main';
import Container from 'components/Container';

const NotFoundCover = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        sx={{
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <Container
          paddingX={6}
          paddingY={0}
          maxWidth={{ sm: 1, md: 1236 }}
          height={1}
        >
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            position={'relative'}
          >
            <Box
              width={1}
              order={{ xs: 2, md: 1 }}
              display={'flex'}
              alignItems={'center'}
            >
              <Container>
                <Box>
                  <Typography
                    variant="h1"
                    component={'h1'}
                    align={isMd ? 'left' : 'center'}
                    sx={{ fontWeight: 700 }}
                  >
                    404
                  </Typography>
                  <Typography
                    variant="h2"
                    color="text.secondary"
                    align={isMd ? 'left' : 'center'}
                    paddingTop={2}
                  >
                    Oops! Pagina non trovata.
                  </Typography>
                  <Box
                    marginTop={4}
                    display={'flex'}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                  >
                    <Button
                      component={Link}
                      variant="contained"
                      color="primary"
                      size="large"
                      to={'/'}
                    >
                      Torna alla home
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box
              sx={{
                flex: { xs: '0 0 100%', md: '0 0 50%' },
                position: 'relative',
                maxWidth: { xs: '100%', md: '50%' },
                order: { xs: 1, md: 2 },
                minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' },
              }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50vw' },
                  height: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      overflow: 'hidden',
                      left: '0%',
                      width: 1,
                      height: 1,
                      position: { xs: 'relative', md: 'absolute' },
                      clipPath: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                      shapeOutside: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: 'auto', md: 1 },
                        '& img': {
                          objectFit: 'cover',
                        },
                      }}
                    >
                      <Box
                        component={'img'}
                        loading="lazy"
                        src={
                          'https://res.cloudinary.com/dslne9y2j/image/upload/v1698410231/Assets/Homepage/tkd5azizmnc7x1nnqd7d.jpg'
                        }
                        display={{
                          sm: 'none',
                          xs: 'none',
                          md: 'block',
                          lg: 'block',
                          xl: 'block',
                        }}
                        height={{ xs: 'auto', md: 1 }}
                        maxHeight={{ xs: 300, md: 1 }}
                        width={1}
                        maxWidth={1}
                        sx={{
                          filter: 'hue-rotate(-37deg)',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default NotFoundCover;
