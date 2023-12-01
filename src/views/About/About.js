import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Contact,
  Gallery,
  Hero,
  Partners,
  Story,
  Team,
  WhoWeAre,
  Application,
} from './components';
import RowContainer from 'components/RowContainer';
import ColumnContainer from 'components/ColumnContainer';

const About = () => {
  const aboutUsData = [
    {
      title: 'La nostra storia',
      text: "Le nostre radici affondano nel 1982, quando il fondatore Antoinio Gaiano decide di trasformare una genuina passione per l'elettronica in attività imprenditoriale, fondando l'azienda che diventeraà punto di riferimento nella realizzazione di schede elettroniche per il settore industriale e non solo.",
      image:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/pnrbxz4t19emktnqdb9v',
      imageAlt: 'La nostra storia',
      direction: 'row',
    },
    {
      title: 'I princípi che ci guidano: operosità, ricerca, innovazione',
      text: 'I nostri valori illuminano il nostro modo di lavorare e ci guidano nella scelta dei nostri partner e dei nostri clienti. Collaborazione e ascolto sono alla base del nostro impegno, per garantire un servizio di qualità e un prodotto che soddisfi le esigenze del cliente.',
      image:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/yxwstltzyifar9dbcoqb',
      imageAlt: 'I princípi che ci guidano: operosità, ricerca, innovazione',
      direction: 'row-reverse',
    },
  ];
  return (
    <Main colorInvert={true}>
      <Hero />

      <Container>
        {aboutUsData.map((data, i) => (
         
            <Story data={data} />
       
        ))}
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Container>
        <Team />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Partners />
        </Container>
      </Box>
      <Contact />
      <Container>
        <Gallery />
      </Container>
      <Container maxWidth={800} paddingTop={'0 !important'}>
        <Application />
      </Container>
    </Main>
  );
};

export default About;
