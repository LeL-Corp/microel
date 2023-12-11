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
  Story1,
  Story2,
  Team,
  WhoWeAre,
  Application,
} from './components';
import RowContainer from 'components/RowContainer';
import ColumnContainer from 'components/ColumnContainer';
import { GetStarted } from 'views/IndexView/components';

const About = () => {
  const aboutUs1 = {
    title: 'La nostra storia',
    text: "Le nostre radici affondano nel 1982, quando la genuina passione per l'elettronica si trasforma in attività imprenditoriale: l'azienda diventeraà punto di riferimento nella realizzazione di schede elettroniche nel settore dell'automazione industriale e non solo. Microel sviluppa infatti anche una specializzazione per l'elettronica applicata alla strumentazione aeronautica, fondando il brand Flybox Avionics.",
    // image:
    //   'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/pnrbxz4t19emktnqdb9v',
    image:
      'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/qmzge04qi3fodiopd21c',

    imageAlt: 'La nostra storia',
    direction: 'row',
  };
  const aboutUs2 = {
    title: 'I princípi che ci guidano: operosità, ricerca, innovazione',
    text: 'I nostri valori illuminano il nostro modo di lavorare e ci guidano nella scelta dei nostri partner e dei nostri clienti. Collaborazione e ascolto sono alla base del nostro impegno, per garantire un servizio di qualità e un prodotto che soddisfi le esigenze del cliente.',
    image:
      'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/About_us/f3wruutortwisbthzeck',
    imageAlt: 'I princípi che ci guidano: operosità, ricerca, innovazione',
    direction: 'row-reverse',
  };

  return (
    <Main colorInvert={true}>
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
      <Contact />
      <Container></Container>
      <Container maxWidth={800} paddingTop={'0 !important'}>
       <GetStarted withImage={false} />
      </Container>
    </Main>
  );
};

export default About;
