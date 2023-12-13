import { useTheme } from '@mui/material';

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

const CookiesPolicy = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { language } = useLanguage();
  return (
    <Main>
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
              <Typography
                variant="h1"
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  marginBottom: '4rem',
                }}
              >
                Cookies Policy - Informativa sui Cookies
              </Typography>

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
              {cookiesDescription.map((item, i) => (
                <>
                  <Typography
                    variant="h3"
                    sx={{ marginBottom: '2rem', marginTop: '4rem' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.paragraph}</Typography>
                  {item.subParagraph ? (
                    <Typography variant="body1">{item.subParagraph}</Typography>
                  ) : null}
                </>
              ))}

              <ul
                style={{
                  listStyle: 'none',
                  padding: '0px',
                  
                }}
              >
                <li>
                  <a style={{color: "#fff"}} href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie">
                    Mozzilla Firefox
                  </a>
                </li>
                <li>
                <a style={{color: "#fff"}} href="https://support.google.com/chrome/answer/95647?hl=it">
                    Google Chrome
                  </a>
                </li>
                <li>
                <a style={{color: "#fff"}}href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d">
                    Internet Explorer
                  </a>
                </li>
                <li>
                <a style={{color: "#fff"}} href="https://support.apple.com/it-it/HT201265">Safari</a>
                </li>
                <li>
                <a style={{color: "#fff"}} href="https://help.opera.com/en/latest/web-preferences/#cookies">
                    Opera
                  </a>
                </li>
              </ul>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                marginTop={4}
              ></Box>
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
