import React from 'react';
import { Helmet } from 'react-helmet';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { GetStarted, Services, Hero } from './components';
import ColumnContainer from 'components/ColumnContainer';
// import { WithLeftAlignedDescriptionBoxAndBoxedLogos } from 'blocks/logoGrid';
import Sectors from './components/Sectors/Sectors';
import { useLanguage } from 'context/LanguageContext';
import translations from 'translations/Translations';
import VideoFrame from 'components/VideFreame';

const IndexView = () => {
  const { language } = useLanguage();
  const theme = useTheme();

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Helmet
          title={translations.metaTags.title[language]}
          meta={[
            {
              name: 'description',
              content: translations.metaTags.description[language],
            },
            {
              name: 'keywords',
              content: translations.metaTags.keywords[language],
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
              href: 'https://www.microel.it/about/',
            },
            {
              rel: 'alternate',
              href: 'https://www.microel.it/about/',
              hreflang: 'x-default',
            },
          ]}
        ></Helmet>
        <ColumnContainer>
          <Hero />
          <Services />
          <Sectors />
          <Box bgcolor={'secondary.main'}>
            <Container>
              <VideoFrame
                urlVideo="https://res.cloudinary.com/dslne9y2j/video/upload/f_auto:video,q_auto/v1/Assets/Video/shotq6o7irlxffpu8eji"
                bgColor="secondary.main"
              />
            </Container>
          </Box>
          <Container sx={{ position: 'relative' }}>
            <GetStarted />
          </Container>
        </ColumnContainer>
      </Main>
    </Box>
  );
};

export default IndexView;
