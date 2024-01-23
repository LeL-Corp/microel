import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from 'context/LanguageContext';
import { cld } from 'helpers/CloudinaryInstance';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Contact,
  Gallery,
  Hero,
  Story1,
  Story2,
} from './components';
import AboutTags from './components/Tags/AboutTags';
import VideoFrame from 'components/VideFreame';

import translations from 'translations/Translations';


const About = () => {
  const { language } = useLanguage();
  const ourStoryImage = cld?.image('Assets/About_us/la-nostra-storia');
  const ourValuesImage = cld?.image('Assets/About_us/i-nostri-valori');
 
  const aboutUs1 = {
    title: language === 'it'  ? translations?.aboutUsPage?.storySection?.aboutUs1It?.title : translations?.aboutUsPage?.storySection?.aboutUs1En?.title,
    text: language === 'it'  ? translations?.aboutUsPage?.storySection?.aboutUs1It?.text : translations?.aboutUsPage?.storySection?.aboutUs1En?.text,
    link:  "Flybox Avionics",
    image: ourStoryImage,
    imageAlt: language === 'it'  ? translations?.aboutUsPage?.storySection?.aboutUs1It?.imageAlt : translations?.aboutUsPage?.storySection?.aboutUs1En?.imageAlt,
    direction: 'row',

  };
  const aboutUs2 = {
    title: language === 'it'  ? translations?.aboutUsPage?.storySection?.aboutUs2It?.title : translations?.aboutUsPage?.storySection?.aboutUs2En?.title,
    text: language === 'it'  ? translations?.aboutUsPage?.storySection?.aboutUs2It?.text : translations?.aboutUsPage?.storySection?.aboutUs2En?.text,
    link:  "Flybox Avionics",
    image: ourValuesImage,
    imageAlt: language === 'it'  ? translations?.aboutUsPage?.storySection?.aboutUs2It?.imageAlt : translations?.aboutUsPage?.storySection?.aboutUs2En?.imageAlt,
    direction: 'row-reverse',

  };
  

  return (
    <Main colorInvert={true}>
      <Helmet
        title={translations?.metaTags?.about?.title[language]}
        meta={[
          {
            name: 'description',
            content: translations?.metaTags?.about?.description[language],
          },
          {
            name: 'keywords',
            content: translations?.metaTags?.about?.keywords[language],
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
          {
            property: 'og:title',
            content: translations?.metaTags?.openGraphTitle[language],
          },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:description',
            content: translations?.metaTags?.openGraphDescription[language],
          },
          {
            property: 'og:image',
            content:
              'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Logo/microel-logo',
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
        <Container>
          <Story1 data={aboutUs1} />
        </Container>
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
      <Box bgcolor={'secondary.main'} > 
      <Container>
          <VideoFrame urlVideo="https://res.cloudinary.com/dslne9y2j/video/upload/f_auto:video,q_auto/v1/Assets/Video/shotq6o7irlxffpu8eji" bgColor="tertiary"/>
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
    </Main>
  );
};

export default About;
