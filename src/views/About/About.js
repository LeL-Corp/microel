import React from 'react';
import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Contact,
  Gallery,
  Hero,
  Partners,
  Story1,
  Story2,
  Team,
  WhoWeAre,
  Application,
} from './components';
import RowContainer from 'components/RowContainer';
import ColumnContainer from 'components/ColumnContainer';
import { GetStarted } from 'views/IndexView/components';
import AboutTags from './components/Tags/AboutTags';
import translations from 'translations/Translations';
import { useLanguage } from 'context/LanguageContext';
import VideoFrame from 'components/VideFreame';

const About = () => {
  const { language } = useLanguage();
  const aboutUs1 =
    language === 'it'
      ? translations.aboutUsPage.storySection.aboutUs1It
      : translations.aboutUsPage.storySection.aboutUs1En;
  const aboutUs2 =
    language === 'it'
      ? translations.aboutUsPage.storySection.aboutUs2It
      : translations.aboutUsPage.storySection.aboutUs2En;

  return (
    <Main colorInvert={true}>
      <Helmet
        title={translations.metaTags.about.title[language]}
        meta={[
          {
            name: 'description',
            content: translations.metaTags.about.description[language],
          },
          {
            name: 'keywords',
            content: translations.metaTags.about.keywords[language],
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
      <Hero />
      <Container>
        <Story1 data={aboutUs1} />
        <Container>
          <Story2 data={aboutUs2} />
        </Container>
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>

      <Box bgcolor={'secondary.main'}>
        <Container>
          <Gallery />
        </Container>
      </Box>
      <Box bgcolor={'secondary.main'}>
        <Container>
          <VideoFrame urlVideo="https://res.cloudinary.com/dslne9y2j/video/upload/f_auto:video,q_auto/v1/Assets/Video/shotq6o7irlxffpu8eji" bgColor="primary.main"/>
        </Container>
      </Box>

      <Contact />
      <Box
        bgcolor={'secondary.main'}
        sx={{ paddingTop: '60px', paddingBottom: '60px' }}
      >
        <Container>
          <AboutTags />
        </Container>
      </Box>
      {/* <Container maxWidth={800}>
        <GetStarted withImage={false} />
      </Container> */}
    </Main>
  );
};

export default About;
