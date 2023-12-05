import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Welcome } from './components';
import Parallax from './components/Parallax/Parallax';

const Settori = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const theme = useTheme();

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  const parallaxData = [
    {
      sector: 'Automazione industriale',
      description:
        'Realizziamo schede elettroniche ottimizzate che garantiscono elevate prestazioni, basso consumo energetico e una robustezza straordinaria per affrontare gli ambienti industriali più impegnativi.',
      // imageUrl:
      //   'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Sectors/jj1g1o6hqkex2guwjucq',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Sectors/w4oxmbodeyvpcktji2tg',
    },
    {
      sector: 'Strumentazione Avionica',
      description:
        'La linea Flybox Avionics offre strumentazione di bordo integrata con sensori di alta precisione che offrono un controllo avanzato.',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Sectors/irut8he5jyewbptbwna4',
    },
    {
      sector: 'Azionamenti per motori',
      description:
        'Miglioriamo le prestazioni dinamiche dei motori grazie a schede elettroniche ottimizzate per gestire una vasta gamma di motori, dai tradizionali motori a induzione a quelli ad alta efficienza e a controllo avanzato.',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Sectors/q00toy3fzpe0h5uokqjz',
    },
   
    {
      sector: 'Macchine per test',
      description:
        'Schede elettroniche progettate per integrarsi con una vasta gamma di macchine per test, consentendo una varietà di protocolli di misurazione e analisi',
      // imageUrl:
      //   'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Sectors/mmkhfhfbtqbwpdennoct',
      imageUrl: 'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Sectors/big9koda5yzwskxidimt',
    },

   
    {
      sector: 'Macchine per Packaging',
      description:
        'Schede elettroniche progettate per integrarsi senza problemi con una vasta gamma di macchine per il packaging, quali incartatrici, sigillatrici e sistemi di etichettatura, per una maggiore precisione di confezionamento e flessibilità',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Sectors/qg0dmohn78xj3apljesl',
    },

    {
      sector: 'Macchine per Cleaning',
      description:
        'Le nostre schede elettroniche sono integrate in apparecchiature di pulizia quali lavasciuga, aspirapolvere industriali e sistemi di pulizia automatizzati',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1700857168/clean_img_3_hrspii.jpg',
    },
    {
      sector: 'Macchine per settore Calzaturiero',
      description:
        'Ci concentriamo sulla flessibilità delle soluzioni, adattabili alle varie esigenze del settore calzaturiero, le nostre schede elettroniche sono integrate in macchinari specializzati utilizzati in ogni fase della produzione',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Sectors/ybccvvrpu1j4s39zcydx',
    },
    {
      sector: 'Elettrodomestici per il Bianco',
      description:
        'Le nostre schede elettroniche sono integrate in elettrodomestici quali lavatrici, asciugatrici, lavastoviglie e apparecchi per la cura del bucato. La nostra tecnologia avanzata consente un controllo preciso dei cicli di lavaggio, asciugatura e altri processi',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1701809565/Assets/Sectors/ho3dj1osyr8wvebv1v66.jpg',
    },
    {
      sector: 'Macchine per la lavorazione dei metalli',
      description:
        'Le schede elettroniche sviluppate da noi sono integrate in macchinari come torni, frese, laser, per una gestione sofisticata dei parametri di lavorazione',
      imageUrl:
        'https://res.cloudinary.com/dslne9y2j/image/upload/f_auto,q_auto/v1/Assets/Sectors/zdvtn1pjubxygvl9pxtw',
    },
  ];

  return (
    <Main>
      <Box
        minHeight={'60vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'main'}
        marginTop={-13}
        paddingTop={13}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <div ref={ref}>
              <Welcome />
            </div>
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('agency__portfolio-item--js-scroll')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>
      <Parallax parallaxData={parallaxData} />
    </Main>
  );
};

export default Settori;
