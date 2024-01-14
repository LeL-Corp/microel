import { useTheme } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Main } from 'layouts';
import { Box } from '@mui/material';
import { alpha } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useLanguage } from 'context/LanguageContext';
import translations from 'translations/Translations';
import cookiesDescription from './CookiesDescription';
import ColumnContainer from 'components/ColumnContainer';

const CookiesPolicy = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { language } = useLanguage();
  return (
    <Main>
      <Helmet
        title={translations.metaTags.cookiesPage.title[language]}
        meta={[
          {
            name: 'description',
            content: translations.metaTags.cookiesPage.description[language],
          },
          {
            name: 'keywords',
            content: translations.metaTags.cookiesPage.keywords[language],
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
            href: 'https://www.microel.it/cookies-policy/',
          },
          {
            rel: 'alternate',
            href: 'https://www.microel.it/cookies-policy/',
            hreflang: 'x-default',
          },
        ]}
      ></Helmet>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${alpha(
            theme.palette.background.paper,
            0,
          )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
          backgroundRepeat: 'repeat-x',
          position: 'relative',
        }}
      >
        <Box
          paddingY={{ xs: 0, sm: '2rem', md: '2rem' }}
          paddingX={{ xs: '1rem', sm: '1rem', md: '1rem' }}
        >
          <Container>
            <Box
              maxWidth={{
                xs: 1,
                sm: '90%',
                zIndex: 1000,
                position: 'relative',
              }}
            >
              <ColumnContainer style={{ marginBottom: '3rem', gap: '0' }}>
                <Typography
                  variant="h1"
                  color="text.primary"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    marginTop: '3rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  Cookies Policy - Informativa sui Cookies
                </Typography>
              </ColumnContainer>

              <Typography variant="p">
                La presente Cookie Policy (Informativa sui cookie) e'
                applicabile a tutti i siti e portali di proprieta' di Microel
                srl, ed utilizzando uno dei siti di Microel srl, si acconsente
                all'utilizzo dei cookie indicati nel presente documento.
                <br></br>
                <br></br>
                Se si desidera che NON vengano memorizzati cookie occorre
                configurare il proprio browser in modo appropriato, oppure non
                usare/navigare i siti di Microel srl. Se si decide di bloccare
                da browser l'utilizzo dei cookie, purtroppo e' possibile che
                alcune funzionalita' dei nostri siti non siano utilizzabili o
                che i siti non funzionino correttamente (in particolare per
                quello che riguarda i cookie tecnici e di sessione).
              </Typography>
              <ul>
                <li>
                  <Typography
                    variant="h3"
                    sx={{
                      marginTop: '1rem',
                      marginBottom: '0.5rem',
                      fontSize: '20px !important',
                      fontWeight: 700,
                    }}
                  >
                    COSA SONO I COOKIE ?
                  </Typography>
                  <Typography>
                    I cookie sono piccoli file che vengono salvati sul vostro
                    computer (o altri dispositivi abilitati alla navigazione su
                    internet, per esempio smartphone o tablet) dal browser che
                    viene utilizzato per la navigazione (come Firefox, Chrome,
                    Internet Explorer, ecc.)
                  </Typography>
                </li>

                <li>
                  <Typography
                    variant="h3"
                    sx={{
                      marginTop: '1rem',
                      marginBottom: '0.5rem',
                      fontSize: '20px !important',
                      fontWeight: 700,
                    }}
                  >
                    PERCHE' SI UTILIZZANO I COOKIE ?
                  </Typography>
                  <Typography>
                    La maggior parte dei siti web utilizza uno o piu' cookie per
                    memorizzare informazioni di vario tipo, informazioni che
                    possono essere fondamentali per poter utilizzare il sito (ad
                    esempio per un sito ecommerce potrebbe essere un cookie che
                    serve a memorizzare quali articoli sono presenti a carrello)
                    oppure informazioni piu' indirizzate alla profilazione
                    dell'utente (ad esempio per effettuare operazioni di
                    remarketing o retargeting).
                  </Typography>
                </li>

                <li>
                  <Typography
                    variant="h3"
                    sx={{
                      marginTop: '1rem',
                      marginBottom: '0.5rem',
                      fontSize: '20px !important',
                      fontWeight: 700,
                    }}
                  >
                    QUALE TIPO DI COOKIE E' UTILIZZATO SU QUESTO SITO ?
                  </Typography>
                  <Typography>
                    I siti gestiti da Microel srl utilizzano esclusivamente
                    cookie tecnici o di sessione che siano strettamente
                    necessari all'utilizzo del sito da parte degli utenti, e non
                    utilizza nessun tipo di cookie per il remarketing o per
                    profilare l'utente.
                  </Typography>

                  <li>
                    <Typography
                      variant="h3"
                      sx={{
                        marginTop: '1rem',
                        marginBottom: '0.5rem',
                        fontSize: '20px !important',
                        fontWeight: 700,
                      }}
                    >
                      ELENCO DEI COOKIE UTILIZZATI SUI SITI DI PROPRIETA' DI
                      MICROEL SRL
                    </Typography>
                    <ul>
                      <li>
                        <Typography>
                          <strong>Nome cookie: PHPSESSID</strong>
                        </Typography>
                      </li>
                      <li>
                        <Typography>
                          <strong>Tipo:</strong> Cookie tecnico
                        </Typography>
                      </li>
                      <li>
                        <Typography>
                          <strong>Descrizione:</strong> Il cookie PHPSESSID è un
                          cookie nativo di PHP e consente ai siti Web di
                          memorizzare dati sullo stato della sessione. Nel sito
                          Web viene utilizzato per stabilire una sessione utente
                          e per comunicare i dati sullo stato attraverso un
                          cookie temporaneo, comunemente denominato cookie di
                          sessione. Poiché il cookie PHPSESSID non ha una
                          scadenza temporale, scompare quando si chiude il
                          client.
                        </Typography>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Typography
                      variant="h3"
                      sx={{
                        marginTop: '1rem',
                        marginBottom: '0.5rem',
                        fontSize: '20px !important',
                        fontWeight: 700,
                      }}
                    >
                      COOKIE DI TERZE PARTI
                    </Typography>
                    <ul>
                      <li>
                        <Typography>
                          Nel corso della navigazione sui siti gestiti da
                          Microel srl l’utente potrebbe ricevere sul suo
                          terminale anche cookie di siti o di web server diversi
                          (c.d. cookie di “terze parti”): ciò accade perché sul
                          sito possono essere presenti elementi come, ad
                          esempio, immagini, mappe, suoni, specifici link a
                          pagine web di altri domini che risiedono su server
                          diversi da quello sul quale si trova la pagina
                          richiesta. In altre parole, detti cookie sono
                          impostati direttamente da gestori di siti web o server
                          diversi dal Sito. Questi terzi potrebbero in teoria
                          impostare cookie mentre visitate il sito e ottenere
                          così informazioni relative al fatto che avete visitato
                          il nostro sito. Ognuno di essi dispone di una propria
                          informativa sulla privacy che può essere diversa da
                          quella adottata da questo sito web. Se l’utente decide
                          di non concedere l’autorizzazione per l’impiego di
                          cookie di terze parti, potranno essere utilizzare
                          esclusivamente le funzioni del sito, che non
                          richiedono tali cookie.
                        </Typography>
                      </li>
                      <li>
                        <Typography>
                          <strong>Nome:</strong> Tecnologia Flash
                        </Typography>
                      </li>
                      <li>
                        <Typography>
                          <strong>Descrizione:</strong> Il nostro sito web può
                          utilizzare Adobe Flash Player per offrire alcuni
                          contenuti multimediali. Sulla maggior parte dei
                          computer il programma risulta installato di “default”.
                        </Typography>
                      </li>
                      <li>
                        <Typography>
                          <strong>
                            Link all’informativa privacy della terza parte:
                          </strong>{' '}
                          <a
                            style={{ color: '#fff' }}
                            href="http://www.adobe.com/products/flashplayer/security"
                          >
                            http://www.adobe.com/products/flashplayer/security
                          </a>
                        </Typography>
                      </li>
                    </ul>
                  </li>
                </li>

                <li>
                  <Typography
                    variant="h3"
                    sx={{
                      marginTop: '1rem',
                      marginBottom: '0.5rem',
                      fontSize: '20px !important',
                      fontWeight: 700,
                    }}
                  >
                    COME DISABILITARE I COOKIE MEDIANTE LA CONFIGURAZIONE DEL
                    BROWSER
                  </Typography>
                  <Typography>
                    Se si vuole modificare le impostazioni del tuo browser
                    riguardo la memorizzazione dei cookies, vengono riportati
                    qui di seguito i link alle pagine dei browser più
                    utilizzati:
                  </Typography>
                </li>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: '0px',
                  }}
                >
                  <li>
                    <a
                      style={{ color: '#fff' }}
                      href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                    >
                      Mozzilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: '#fff' }}
                      href="https://support.google.com/chrome/answer/95647?hl=it"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: '#fff' }}
                      href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                    >
                      Internet Explorer
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: '#fff' }}
                      href="https://support.apple.com/it-it/HT201265"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ color: '#fff' }}
                      href="https://help.opera.com/en/latest/web-preferences/#cookies"
                    >
                      Opera
                    </a>
                  </li>
                </ul>
              </ul>
            </Box>
          </Container>

          <Box
            sx={{
              transform: 'rotate(-20deg)',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Box
              display={'flex'}
              width={'50rem'}
              left={'50%'}
              top={0}
              position={'absolute'}
              sx={{ transform: 'translate3d(20%, -50%, 0)' }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};
export default CookiesPolicy;
