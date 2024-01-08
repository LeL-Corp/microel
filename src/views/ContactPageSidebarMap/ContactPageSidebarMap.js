import React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from '@mui/material/styles';
import { useLanguage } from 'context/LanguageContext';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Form, Contact } from './components';
import translations from 'translations/Translations';

const ContactPageSidebarMap = () => {
  const theme = useTheme();
  if (document.cookie) {
    console.log('Cookies are being gathered');
  } else {
    console.log('No cookies are being gathered');
  }
  const { language } = useLanguage();

  return (
    <Main>
      <Helmet
        title={translations.metaTags.contactsPage.title[language]}
        meta={[
          {
            name: 'description',
            content: translations.metaTags.contactsPage.description[language],
          },
          {
            name: 'keywords',
            content: translations.metaTags.contactsPage.keywords[language],
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
              'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Logo/microel-logo',
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
      <Form />
      <Box position={'relative'}>
        <Container>
          <Contact />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          {/* <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path> */}
        </Box>
      </Box>
    </Main>
  );
};

export default ContactPageSidebarMap;
