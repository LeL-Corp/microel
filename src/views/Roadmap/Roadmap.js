import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Partners, Solutions } from './components';
import translations from 'translations/Translations';
import { useLanguage } from 'context/LanguageContext';

const Roadmap = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  return (
    <Main>
      <Helmet
        title={translations.metaTags.roadmapPage.title[language]}
        meta={[
          {
            name: 'description',
            content: translations.metaTags.roadmapPage.description[language],
          },
          {
            name: 'keywords',
            content: translations.metaTags.roadmapPage.keywords[language],
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
          {
            property: 'og:title',
            content: translations.metaTags.openGraphTitle[language],
          },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:description',
            content: translations.metaTags.openGraphDescription[language],
          },
          {
            property: 'og:image',
            content:
              'https://res.cloudinary.com/dslne9y2j/image/upload/v1697838605/Assets/Transpared-bg/logoonly_spfzrg.png',
          },
        ]}
        link={[
          {
            rel: 'canonical',
            href: 'https://www.microel.it/areas/',
          },
          {
            rel: 'alternate',
            href: 'https://www.microel.it/areas/',
            hreflang: 'x-default',
          },
        ]}
      ></Helmet>
      <Container>
        <Partners />
        <Container>
          <Solutions />
        </Container>
      </Container>
    </Main>
  );
};

export default Roadmap;
