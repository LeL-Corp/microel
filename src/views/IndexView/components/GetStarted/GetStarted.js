import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const GetStarted = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <img
        anchor="anchor"
        style={{
          opacity: '0.4',
          filter: 'hue-rotate(122deg)',
          maxWidth: '8%',
          height: 'auto',
          maxHeight: '150px',
        }}
        src="https://res.cloudinary.com/dslne9y2j/image/upload/v1698184765/Assets/Homepage/pa6ro1vkeih0jehy5hqz.png"
      ></img>
      <div style={{ inset: 'unset', top: 'anchor(top)' }} id="anchor">
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Hai un'idea? Contattaci per una consulenza
        </Typography>
      </div>
      {/* <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
      >
      </Typography> */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent={'center'}
        marginTop={4}
      >
        <Button
          component={'a'}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          href={'/home'}
        >
          Contattaci
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <Button
            component={'a'}
            href={'https://thefront.maccarianagency.com/docs/introduction'}
            target={'blank'}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            Dove siamo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GetStarted;
