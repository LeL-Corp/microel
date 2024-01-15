import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from 'theme';
import AOS from 'aos';
import { useLanguage } from 'context/LanguageContext';

// export const useDarkMode = () => {
//   const [themeMode, setTheme] = useState('dark');
//   const [mountedComponent, setMountedComponent] = useState(false);

//   // const setMode = (mode) => {
//   //   try {
//   //     window.localStorage.setItem('themeMode', mode);
//   //   } catch {
//   //     /* do nothing */
//   //   }

//   //   setTheme(mode);
//   // };

//   // const themeToggler = () => {
//   //   themeMode === 'light' ? setMode('dark') : setMode('light');
//   // };

//   // useEffect(() => {
//   //   try {
//   //     const localTheme = window.localStorage.getItem('themeMode');
//   //     localTheme ? setTheme(localTheme) : setMode('light');
//   //   } catch {
//   //     setMode('light');
//   //   }

//   //   setMountedComponent(true);
//   // }, []);

//   return [themeMode, themeToggler, mountedComponent];
// };

export default function Page({ children }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: 'ease-in-out',
    });
  }, []);

  // const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  const { language, changeLanguage } = useLanguage();
  

  useEffect(() => {
    AOS.refresh();
  }, [language]);

  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Paper elevation={0}>
      {React.isValidElement(children) ? React.cloneElement(children, { language, changeLanguage }) : null}
      </Paper>
    </ThemeProvider>
  );
}

// Page.propTypes = {
//   children: PropTypes.node.isRequired,
// };