import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';
import { LanguageProvider } from 'context/LanguageContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const App = () => {
  return (
    <LanguageProvider>
      <Page>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Page>
    </LanguageProvider>
  );
};

export default App;
