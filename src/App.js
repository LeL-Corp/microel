import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';
import { LanguageProvider } from 'context/LanguageContext';
import { useLanguage } from 'context/LanguageContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const App = () => {
 
  return (
    <LanguageProvider>
      <HelmetTags />
      <Page>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Page>
    </LanguageProvider>
  );
};

export default App;

const HelmetTags = () => {
  const { language } = useLanguage();
  return (
    <Helmet>
      <html lang={language} />
      <meta charSet="utf-8" />
      <title>
        Microel | Progettazione e produzione schede ed apparecchiature
        elettroniche customizzate per l'automazione industriale.
      </title>
      <meta
        name="description"
        content="Microel è un'azienda specializzata nella progettazione e produzione di schede ed apparecchiature elettroniche personalizzate"
      />

      <meta
        name="keywords"
        content="Microel,  progettazione, produzione, customizzazione, personalizzazione, schede elettroniche, dedicata, elettronica, automazione, sbroglio, saldatura, assemblaggio, elettronica industriale"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};
