import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import RowContainer from './RowContainer';
import { useLanguage } from 'context/LanguageContext';
import ColumnContainer from './ColumnContainer';



const PopupCookies = () => {
  const theme = useTheme();
  const {language} = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  const acceptTechnicalCookies = () => {
    localStorage.setItem('technicalCookies', 'true'); // l'utente clicca ok sul banner, 
    setShowPopup(false); // il banner scompare e non ricompare più
  }

  useEffect(() => {
    const technicalCookies = localStorage.getItem('technicalCookies');

    if (!technicalCookies) {  // l'utente non ha ancora cliccato ok sul banner
      setShowPopup(true); // il banner appare
      localStorage.setItem('technicalCookies', 'true');
    }
  }, [localStorage.getItem('technicalCookies')]);

  if (!showPopup) {
    return null;
  }

  return (
    <RowContainer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: theme.palette.tertiary.main, zIndex: 2000, transition: 'opacity 1s, display 1s', // Add transition for display
    opacity: showPopup ? 1 : 0, 
    display: showPopup ? 'block' : 'none',
    
     }}>
      <Container>
        <RowContainer start noGap>
        <ColumnContainer style={{gap: "4px", padding: "12px"}}>
        <Typography
          variant={'p'}
          sx={{ fontWeight: 700 }}
          >
          {language === "it" ? "Questo sito web utilizza cookies tecnici per garantire un'esperienza di navigazione ottimale." : "This website uses technical cookies to ensure an optimal browsing experience."}
        </Typography>
        <RowContainer start style={{gap: "4px", flexWrap: "wrap"}}> 
          <Typography
            variant={'p'}
            sx={{ fontWeight: 700 }}
            >
            {language === "it" ? "Si prega di leggere le informative:" : "Please read the information:"}
          </Typography>
       
          <Typography component="p" variant="p" align="left">    
            <Box
            textDecoration={'underline'}
              component={'a'}
              href="/privacy-policy"
              color={theme.palette.text.primary}
              fontWeight={'700'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Box>{' '}
            {language === 'it' ? 'e' : 'and'}{' '}
            <Box
            textDecoration={'underline'}
              component={'a'}
              href="/cookies-policy"
              color={theme.palette.text.primary}
              fontWeight={'700'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookie Policy
            </Box>
          </Typography>
        </RowContainer>
        
        </ColumnContainer>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          sx={{ fontWeight: '700 !important', margin: 1, width: "30%", "&:hover": {opacity: 0.7}}}
          onClick={() => acceptTechnicalCookies()}
          >
          Ok
          </Button>
        </RowContainer>
      </Container>
    </RowContainer>
  );
};

export default PopupCookies;