import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Inter", sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
        h1: {
          fontSize: '32px',
        },
        h2: {
          fontSize: '28px',
          '@media (max-width: 600px)': {
            fontSize: '24px',
          },
        },
        h3: {
          fontSize: '26px',
          '@media (max-width: 600px)': {
            fontSize: '18px',
          },
        },
        h4: {
          fontSize: '18px',
        },
        h5: {
          fontSize: '18px',
        },
        h6: {
          fontSize: '18px',
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      breakpoints: {
        values: {
          xs: 0, // extra-small devices (phones)
          sm: 600, // small devices (tablets)
          md: 960, // medium devices (desktops)
          lg: 1280, // large devices (large desktops)
          xl: 1920, // extra-large devices
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: { color: 'white' },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
      themeToggler,
    }),
  );

export default getTheme;
