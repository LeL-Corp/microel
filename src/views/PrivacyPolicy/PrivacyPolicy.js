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
import ColumnContainer from 'components/ColumnContainer';

const PrivacyPolicy = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { language } = useLanguage();
  return (
    <Main>
      <Box
        sx={{
          marginTop: '1rem',
          marginBottom: '0.5rem',
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
                  Privacy Policy e Informativa ART. 13 (EU) 2016/679 (GDPR)
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: 700 }}>
                  General Data Protection Regulation(European regulation on
                  personal data protection)
                </Typography>
              </ColumnContainer>

              <Typography variant="body1">
                La presente Privacy Policy è volta ad illustrare le modalità e
                le finalità dei trattamenti di dati personali effettuati da
                parte della società Microel S.r.l. in qualità di titolare del
                trattamento del sito www.flyboxavionics.it ed i servizi ad esso
                collegati.<br></br>
                La società Microel S.r.l. rispetta la privacy di ogni utente che
                visita il Sito e utilizza i Servizi.<br></br>
                La Policy non si applica ai siti terzi accessibili tramite link
                presenti sul Sito del titolare.<br></br>
                Il trattamento dei dati personali degli Utenti avviene in piena
                conformità del Regolamento generale sulla protezione dei dati
                (UE) n. 2016/679.
              </Typography>

              <ol>
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
                    Identità e dati di contatto del Titolare del trattamento
                  </Typography>
                  <Typography variant="body1">
                    Il Titolare del trattamento dei dati è la società Microel
                    S.r.l. - Via Mortara, 192/194 – 27038 Robbio (PV) -
                    P.IVA/C.F. 01769870187 – privacy@microel.it.
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
                    Categorie di dati personali trattate
                  </Typography>
                  Il Titolare potrà trattare le seguenti categorie di dati
                  personali degli Utenti:<br></br>
                  <ol>
                    <li>
                      dati comunicati dall’utente: dati identificativi e di
                      contatto (principalmente nome, cognome, indirizzo, numero
                      di telefono, e-mail) inseriti volontariamente dall’utente
                      in caso di compilazione dei form di richiesta dati
                      presenti sul sito e/o attraverso l'invio facoltativo,
                      esplicito e volontario di messaggi ai vari
                      indirizzi/canali di contatto del Titolare, comportano
                      l'acquisizione dei dati di contatto del mittente,
                      necessari per evadere la richiesta inoltrata
                      dall’interessato, nonché di tutti i dati personali inclusi
                      nelle comunicazioni; se necessarie, sono pubblicate
                      specifiche informative nelle pagine web predisposte per
                      l'erogazione di servizi differenti e differenti finalità;
                    </li>
                    <li>
                      dati di navigazione: i sistemi informatici e le procedure
                      software preposte al funzionamento di questo sito
                      acquisiscono, nel corso del loro normale esercizio, alcuni
                      dati personali la cui trasmissione è implicita nell'uso
                      dei protocolli di comunicazione di Internet.
                    </li>
                  </ol>
                  In questa categoria di dati rientrano gli indirizzi IP o i
                  nomi a dominio dei computer e dei terminali utilizzati dagli
                  utenti, gli indirizzi in notazione URI/URL (Uniform Resource
                  Identifier/Locator) delle risorse richieste, l'orario della
                  richiesta, il metodo utilizzato nel sottoporre la richiesta al
                  server, la dimensione del file ottenuto in risposta, il codice
                  numerico indicante lo stato della risposta data dal server
                  (buon fine, errore, ecc.) ed altri parametri relativi al
                  sistema operativo e all'ambiente informatico dell'utente. Tali
                  dati, necessari per la fruizione dei servizi web, vengono
                  anche trattati allo scopo di:
                  <ol>
                    <li>
                      ottenere informazioni statistiche sull'uso dei servizi
                      (pagine più visitate, numero di visitatori per fascia
                      oraria o giornaliera, aree geografiche di provenienza,
                      ecc.);
                    </li>
                    <li>
                      controllare il corretto funzionamento dei servizi offerti
                    </li>
                    <li>
                      nel caso di ipotetici reati informatici prodotti ai danni
                      del sito, in accordo con l'autorità giudiziaria tali dati
                      potrebbero essere utilizzati per l’accertamento di
                      responsabilità.
                    </li>
                    <li>
                      Cookie e altri sistemi di tracciamento: si rimanda alla
                      sezione “Cookie Policy”.
                    </li>
                  </ol>
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
                    Finalità e basi giuridiche del trattamento dei dati
                    personali
                  </Typography>
                  <Typography>
                    Il Titolare tratta i dati degli Utenti principalmente per
                    consentire la navigazione sul proprio Sito, nonché la
                    fruizione dei Servizi. Il Titolare tratta i dati degli
                    utenti per consentire la navigazione del proprio sito e per
                    poter rispondere ad eventuali richieste inviate
                    volontariamente dell’utente. Qualsiasi ulteriore trattamento
                    avviene solo sulla base di obblighi previsti dalla legge e
                    sulla base del legittimo interesse. Per ogni altra finalità
                    di trattamento viene richiesto esplicito consenso fornito
                    dall'Utente al Titolare.
                  </Typography>
                  <ol>
                    <li>
                      <Typography>
                        Finalità strettamente connesse e strumentali alla
                        gestione amministrativo-contabile;
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Finalità connesse agli obblighi previsti di natura
                        legale e fiscale previsti da leggi, da regolamenti, da
                        normative comunitarie, nonché da disposizioni impartite
                        da Autorità e da Organi di vigilanza e controllo;
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Consentire all’utente di navigare sul sito;
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Rispondere alle richieste degli Utenti inviate tramite
                        il Sito;
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Consentire agli utenti l’utilizzo dei servizi presenti
                        sul sito;
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Migliorare la presentazione, le caratteristiche e le
                        funzionalità del Sito e dei Servizi;
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Previo consenso, contattare gli Utenti tramite e-mail,
                        newsletter, mailing list, messaggistica per inviare loro
                        comunicazioni di carattere commerciale e promozionale,
                        speciali iniziative e sconti. L’Utente viene
                        automaticamente inserito in una lista di contatti a cui
                        potranno essere trasmessi messaggi email/messaggistica
                        attraverso la piattaforma Mailchimp (si prega di
                        prendere visione della policy sul trattamento dei dati
                        https://mailchimp.com/legal/privacy). In ogni
                        comunicazione saranno specificate le modalità per
                        opporsi al trattamento e non ricevere più altre
                        comunicazioni. In questi casi, il conferimento dei dati
                        è facoltativo e il mancato conferimento dei dati
                        comporterà il mancato invio di comunicazioni
                        commerciali.
                      </Typography>
                    </li>
                  </ol>
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
                    Tempi di conservazione dei dati
                  </Typography>
                  <Typography>
                    I dati personali trattati da Microel S.r.l. saranno
                    conservati per il tempo strettamente necessario al
                    raggiungimento delle finalità per cui sono stati
                    originariamente raccolti e, in ogni caso, non verranno più
                    trattati a seguito di eventuale revoca del consenso
                    prestato. Laddove il trattamento dei dati personali dovesse
                    invece avvenire in adempimento ad obblighi legali, fiscali o
                    giudiziari, i dati potranno essere conservati fino ad un
                    massimo di dieci (10) anni. I dati di navigazione non
                    persistono per più di sette giorni e vengono cancellati
                    immediatamente dopo la loro aggregazione (salve eventuali
                    necessità di accertamento di reati da parte dell'Autorità
                    giudiziaria).
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
                    Conferimento dei dati
                  </Typography>
                  <Typography>
                    A parte quanto specificato per i dati di navigazione,
                    l’utente è libero di fornire i dati propri personali.
                    Tuttavia il loro mancato conferimento può comportare
                    l’impossibilità di ottenere quanto richiesto.
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
                    Modalità del trattamento
                  </Typography>
                  <Typography>
                    Tutti i dati personali saranno trattati attraverso l’ausilio
                    di strumenti cartacei ed informatizzati. Il Titolare del
                    Trattamento ha adottato tutte le necessarie misure tecniche
                    e organizzative adeguate per garantire un livello di
                    sicurezza elevato al fine di ridurre al minimo i rischi
                    inerenti alla riservatezza, alla disponibilità e
                    all’integrità dei dati personali raccolti e trattati, sulla
                    base degli artt.24, 25 e 32 del GDPR.
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
                    Destinatari dei dati personali - Comunicazione e diffusione
                    dei dati personali
                  </Typography>
                  <Typography>
                    I dati personali trattati saranno oggetto di comunicazione a
                    soggetti ben definiti. Sulla base dei ruoli e delle mansioni
                    lavorative espletate, il personale interno ed esterno è
                    legittimato al trattamento nei limiti delle loro competenze
                    ed in conformità alle istruzioni ad essi impartite dal
                    Titolare. Gli stessi dati potranno essere comunicati ai
                    soggetti legittimati con funzioni di amministrazione dei
                    sistemi, servizi di hosting e della manutenzione della parte
                    tecnologica del sito, gestori di piattaforme di invio
                    newsletter e messaggistica, soggetti nominati Responsabili
                    del trattamento (studi professionali eroganti servizi
                    contabili etc.) e soggetti cui disposizioni di legge o
                    normative comunitarie riconoscono la facoltà di accedere ai
                    dati. Il servizio di web hosting è localizzato in UE. La
                    compilazione del form di contatto utilizza il servizio
                    EmailJS: per ulteriori informazioni in merito a come EmailJs
                    esegue il trattamento dei dati, si fa riferimento alla
                    privacy policy di EmailJS disponibile al seguente link:
                    https://www.emailjs.com/legal/privacy-policy/.
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
                    Trasferimento all’estero dei dati personali
                  </Typography>
                  <Typography>
                    La gestione e la conservazione dei dati personali avviene su
                    server ubicati all’interno dell’Unione Europea ma anche
                    attraverso l’utilizzo di servizi in cloud in Paesi extra-UE.
                    In tal caso, il Titolare assicura sin d’ora che il
                    trasferimento dei dati extra-UE avverrà in conformità alle
                    disposizioni di legge applicabili stipulando, se necessario,
                    accordi che garantiscano un livello di protezione adeguato
                    e/o adottando le clausole contrattuali standard previste
                    dalla Commissione Europea. In merito al trattamento dei dati
                    personali trattati attraverso la piattaforma di gestione
                    newsletter MailChimp, il luogo di trattamento è negli Stati
                    Uniti.
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
                    Trattamento di dati personali di minori
                  </Typography>
                  <Typography>
                    L'utilizzo del Sito e dei Servizi è riservato soltanto ad
                    Utenti maggiorenni. Microel S.r.l. non tratta dati personali
                    di minori.
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
                    Diritti dell’Interessato e revoca del consenso
                  </Typography>
                  <Typography>
                    Il Titolare del trattamento è liberamente contattabile per
                    qualsiasi richiesta inerente alla presente Policy scrivendo
                    all’indirizzo email@email.it L'utente potrà, in qualsiasi
                    momento, esercitare i diritti di cui agli artt.
                    15/16/17/18/20/21 del GDPR 2016/679. I predetti diritti
                    potranno essere esercitati inviando apposita richiesta al
                    Titolare del trattamento mediante i canali di contatto
                    indicati nella presente informativa. Con riferimento
                    all’art.7 del GDPR 2016/679, l’interessato può revocare in
                    qualsiasi momento il consenso prestato comunicandolo al
                    Titolare o avvalendosi dell’apposita funzionalità secondo le
                    istruzioni riportate in calce a ciascuna newsletter.
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
                    Cookie Policy
                  </Typography>
                  <Typography>
                    Si rimanda all’apposita sezione presente sul sito.
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
                    Social Media Policy
                  </Typography>
                  <Typography>
                    Si rimanda all’apposita sezione presente sul sito.
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
                    Link a siti di terze parti
                  </Typography>
                  <Typography>
                    Microel S.r.l. non potrà in alcun caso essere ritenuta
                    responsabile dei trattamenti effettuati attraverso o in
                    relazione a tali siti di terzi. Si invitano quindi gli
                    utenti a prestare la massima attenzione in tal senso,
                    prendendo visione delle condizioni d'uso e della privacy e
                    cookie policy pubblicate sui vari siti/portali/social
                    network visitati.
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
                    Modifiche e aggiornamenti
                  </Typography>
                  <Typography>
                    La presente Policy è aggiornata e applicabile dal
                    25/03/2021. Qualsiasi ulteriore modifica sarà comunicata
                    agli Utenti con mezzi e i tempi ritenuti più opportuni dal
                    Titolare, in particolare attraverso la pubblicazione sul
                    Sito.
                  </Typography>
                </li>
              </ol>

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
              marginTop: '1rem',
              marginBottom: '0.5rem',
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
              sx={{
                marginTop: '1rem',
                marginBottom: '0.5rem',
                transform: 'translate3d(20%, -50%, 0)',
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};
export default PrivacyPolicy;
