import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import FlightIcon from '@mui/icons-material/Flight';
import { Dvr, RocketLaunchRounded } from '@mui/icons-material';

//cloudinary images optimization
import { cld } from 'helpers/cloudinary/CloudinaryInstance';
const ourStoryImage = cld.image('Assets/About_us/la-nostra-storia');
const ourValuesImage = cld.image('Assets/About_us/i-nostri-valori');

const industrialAutomationImage = cld.image(
  'Assets/Areas/settore-automazione-industriale',
);
const avionicsInstrumentsImage = cld.image(
  'Assets/Areas/settore-strumentazione-avionica',
);
const motorDrivesImage = cld.image('Assets/Areas/settore-azionamento-motori');
const testMachinesImage = cld.image('Assets/Areas/settore-macchine-test');
const packagingMachinesImage = cld.image('Assets/Areas/settore-packaging');
const cleaningMachinesImage = cld.image('Assets/Areas/settore-cleaning');
const footwearSectorImage = cld.image('Assets/Areas/settore-calzaturiero');
const laundryAppliancesImage = cld.image(
  'Assets/Areas/settore-elettrodomestici-per-il-bianco',
);
const metalworkingMachineryImage = cld.image(
  'Assets/Areas/settore-lavorazione-metalli',
);

const translations = {
  metaTags: {
    title: {
      it: "Microel | Progettazione e produzione di schede e apparecchiature elettroniche dedicate per l'automazione industriale",
      en: 'Microel | Custom electronic boards and equipment design and production for industrial automation',
    },
    description: {
      it: "Microel è specializzata nella progettazione e produzione di schede e apparecchiature elettroniche su misura per l'automazione industriale.",
      en: 'Microel is specialized in the design and production of custom electronic boards and equipment for industrial automation.',
    },
    keywords: {
      it: 'Microel, progettazione, produzione, schede elettroniche su misura, automazione industriale, elettronica, ingegneria elettronica',
      en: 'Microel, design, production, custom electronic boards, industrial automation, electronics, electronic engineering',
    },
    openGraphTitle: {
      it: `Microel - Progettazione e produzione schede elettroniche dedicate`,
      en: 'Microel - Custom electronic boards design and production',
    },
    openGraphDescription: {
      it: `Schede e apparecchiature elettroniche personalizzate`,
      en: 'Design, production and sale of custom electronic boards for industrial automation.',
    },
    about: {
      title: {
        it: 'Chi siamo - Microel | Progettazione e produzione di schede elettroniche su misura',
        en: 'About us - Microel | Custom electronic boards design and production',
      },
      description: {
        it: "Scopri Microel, specializzata nella progettazione e produzione di schede elettroniche su misura per l'automazione industriale.",
        en: 'Discover Microel, specialized in the design and production of custom electronic boards for industrial automation.',
      },
      keywords: {
        it: 'Chi siamo, progettazione, produzione, schede elettroniche su misura, automazione industriale, elettronica, ingegneria elettronica',
        en: 'About us, design, production, custom electronic boards, industrial automation, electronics, electronic engineering',
      },
    },
    areasPage: {
      title: {
        it: 'Settori - Microel | Soluzioni su misura',
        en: 'Areas - Microel | Custom Industrial Automation Solutions',
      },
      description: {
        it: 'Scopri i settori in cui Microel opera, offrendo soluzioni di automazione industriale su misura.',
        en: 'Discover the sectors in which Microel operates, offering custom industrial automation solutions.',
      },
      keywords: {
        it: 'Settori, progettazione, produzione, schede elettroniche su misura, automazione industriale, elettronica, ingegneria elettronica',
        en: 'Areas, design, production, custom electronic boards, industrial automation, electronics, electronic engineering',
      },
    },
    roadmapPage: {
      title: {
        it: 'Roadmap - Microel | Studio, progettazione, realizzazione, obiettivi',
        en: 'Roadmap - Microel | Study, design, realization, objectives',
      },
      description: {
        it: 'Scopri la roadmap di Microel, il tuo partner per soluzioni di automazione industriale su misura.',
        en: 'Discover the roadmap of Microel, your partner for custom industrial automation solutions.',
      },
      keywords: {
        it: 'Roadmap, progettazione, produzione, schede elettroniche su misura, automazione industriale, elettronica, ingegneria elettronica',
        en: 'Roadmap, design, production, custom electronic boards, industrial automation, electronics, electronic engineering',
      },
    },
    contactsPage: {
      title: {
        it: 'Contatti - Microel | Contattaci per schede elettroniche su misura',
        en: 'Contacts - Microel | Contact us for custom electronic boards solutions',
      },
      description: {
        it: 'Contattaci per una consulenza su soluzioni di automazione industriale su misura. Scopri dove siamo situati.',
        en: 'Contact us for a consultation on custom industrial automation solutions. Find out where we are located.',
      },
      keywords: {
        it: 'Contatti, progettazione, produzione, schede elettroniche su misura, automazione industriale, elettronica, ingegneria elettronica',
        en: 'Contacts, design, production, custom electronic boards, industrial automation, electronics, electronic engineering',
      },
    },
  },
  buttons: {
    discover: {
      it: 'Scopri',
      en: 'Learn more',
    },
    contact: {
      it: 'Contattaci',
      en: 'Contact us',
    },
    where: {
      it: 'Dove siamo',
      en: 'Where to find us',
    },

    solutions: {
      it: 'Le nostre Soluzioni',
      en: 'Our Solutions',
    },
    roadmap: {
      it: 'Scopri la Roadmap',
      en: 'View our Roadmap',
    },
    goToFlybox: {
      it: 'Scopri Flybox Avionics',
      en: 'Discover Flybox Avionics',
    },
  },
  navigation: {
    home: {
      it: 'Home',
      en: 'Home',
    },
    about: {
      it: 'Chi siamo',
      en: 'About us',
    },
    areas: {
      it: 'Settori',
      en: 'Areas',
    },
    roadmap: {
      it: 'Roadmap',
      en: 'Roadmap',
    },
    contacts: {
      it: 'Contatti',
      en: 'Contacts',
    },
    info: {
      phone: {
        it: 'Telefono',
        en: 'Phone',
      },
      address: {
        it: 'Indirizzo',
        en: 'Address',
      },
    },
    discoverMore: {
      it: 'Scopri di più su Flybox Avionics, un marchio registrato Microel srl:',
      en: 'Discover more about Flybox Avionics, a registered trademark of Microel srl:',
    },
    discoverMoreMobile: {
      it: 'Flybox Avionics:',
      en: 'Flybox Avionics:',
    },
  },
  home: {
    hero: {
      heading: {
        it: 'Esperti in soluzioni di Ingegneria Elettronica.',
        en: 'Experts in Electronic Engineering solutions.',
      },
      subHeading: {
        it: "Progettazione e produzione schede ed apparecchiature elettroniche per l'automazione customizzate",
        en: 'Design and production of custom electronic boards and equipment for automation.',
      },
    },
    section1: {
      heading: {
        it: 'Le soluzioni dedicate sono il nostro prodotto standard.',
        en: 'Dedicated solutions are our standard product.',
      },
      subHeading: {
        it: 'Elettronica dedicata per esigenze specifiche.',
        en: 'Dedicated electronics for specific needs.',
      },
    },
    section2: {
      box1: {
        heading: {
          it: 'Design',
          en: 'Design',
        },
        subHeading: {
          it: 'Offriamo ad ogni cliente un servizio completo di progettazione hardware e software della scheda elettronica.',
          en: 'We offer each customer a complete hardware and software design service for the electronic board.',
        },
      },
      box2: {
        heading: {
          it: 'Progettazione',
          en: 'Planning',
        },
        subHeading: {
          it: "Tutte le fasi di sviluppo sono interamente gestite all'interno dell'azienda garantendo flessibilità ed efficienza realizzazione di prodotti personalizzati.",
          en: 'All development phases are entirely deployed within the company, guaranteeing flexibility and efficiency in the realization of customized products.',
        },
      },
      box3: {
        heading: {
          it: 'Delivery',
          en: 'Delivery',
        },
        subHeading: {
          it: 'Supporto e attenzione costante anche dopo la consegna del prodotto.',
          en: 'Support and constant attention even after delivery of the product.',
        },
      },
    },
    section3: {
      box1: {
        heading: {
          it: 'PCB Design',
          en: 'PCB Design',
        },
        subHeading: {
          it: 'Servizi di progettazione e sbroglio di circuiti stampati. Sviluppiamo rapidamente i prototipi mediante la tecnica della microfresatura.',
          en: 'Printed circuit design and layout services. We quickly develop prototypes using the micro-milling technique.',
        },
      },
      box2: {
        heading: {
          it: 'Assemblaggio e saldatura schede elettroniche',
          en: 'Electronic board assembly and soldering',
        },
        subHeading: {
          it: 'La linea di montaggio SMD è composta da un telaio serigrafico automatico, pick & place da 15000 componenti/ora e forno a rifusione a 8 zone',
          en: 'The SMD assembly line consists of an automatic screen printing frame, pick & place of 15000 components / hour and 8-zone reflow oven',
        },
      },
      box3: {
        heading: {
          it: 'Testi di compatibilità',
          en: 'Compatibility tests',
        },
        subHeading: {
          it: 'Camera climatica per prove ambientali e camera prove EMC per i testi di compatibilità elettromagnetica',
          en: 'Climatic chamber for environmental tests and EMC test room for electromagnetic compatibility tests',
        },
      },
    },
    section4: {
      heading: {
        it: 'Ricerca e Sviluppo costanti',
        en: 'Constant Research and Development',
      },
      subHeading: {
        it: 'I settori in cui operiamo',
        en: 'The sectors in which we operate',
      },
      paragraph: {
        it: 'Il nostro team ha sviluppato un ampio know-how collaborando con aziende di ogni dimensione e ambito di operatività. Per ognuno di questi, sviluppiamo un percorso di ricerca su misura.',
        en: 'Our team has developed extensive know-how by collaborating with companies of all sizes and fields of operation. For each of these, we develop a tailor-made research path.',
      },
      experiencesIt: [
        {
          logo: (
            <PrecisionManufacturingIcon
              color="secondary"
              style={{ fontSize: '48px' }}
            />
          ),
          name: 'Automazione industriale',
        },
        {
          logo: <Dvr color="secondary" style={{ fontSize: '48px' }} />,
          name: 'Macchine per i test',
        },
        {
          logo: <WidgetsIcon color="secondary" style={{ fontSize: '48px' }} />,
          name: 'Macchinari per realizzazione Packaging',
        },
        {
          logo: (
            <RocketLaunchRounded
              color="secondary"
              style={{ fontSize: '48px' }}
            />
          ),
          name: 'Azionamenti per motori',
        },
        {
          logo: (
            <SettingsSuggestIcon
              color="secondary"
              style={{ fontSize: '48px' }}
            />
          ),
          name: 'Macchinari per lavorazione metalli',
        },

        {
          logo: <FlightIcon color="secondary" style={{ fontSize: '48px' }} />,
          name: 'Strumentazione Avionica',
        },
      ],
      experiencesEn: [
        {
          logo: (
            <PrecisionManufacturingIcon
              color="secondary"
              style={{ fontSize: '48px' }}
            />
          ),
          name: 'Industrial Automation',
        },
        {
          logo: <Dvr color="secondary" style={{ fontSize: '48px' }} />,
          name: 'Test Machines',
        },
        {
          logo: <WidgetsIcon color="secondary" style={{ fontSize: '48px' }} />,
          name: 'Packaging Machines',
        },
        {
          logo: (
            <RocketLaunchRounded
              color="secondary"
              style={{ fontSize: '48px' }}
            />
          ),
          name: 'Motor Drives',
        },
        {
          logo: (
            <SettingsSuggestIcon
              color="secondary"
              style={{ fontSize: '48px' }}
            />
          ),
          name: 'Metalworking machinery',
        },

        {
          logo: <FlightIcon color="secondary" style={{ fontSize: '48px' }} />,
          name: 'Avionics Instruments',
        },
      ],
    },
    section5: {
      heading: {
        it: "Hai un'idea? Contattaci per una consulenza.",
        en: 'Any idea? Contact us for a consultation.',
      },
    },
  },
  aboutUsPage: {
    hero: {
      heading: {
        it: 'Benvenuti nel cuore della nostra azienda',
        en: 'Step inside the heartbeat of our company',
      },
    },
    storySection: {
      aboutUs1It: {
        title: 'La nostra storia',
        text: "Le nostre radici affondano nel 1982, quando la genuina passione per l'elettronica si trasforma in attività imprenditoriale: l'azienda diventeraà punto di riferimento nella realizzazione di schede elettroniche nel settore dell'automazione industriale e non solo. Microel sviluppa infatti anche una specializzazione per l'elettronica applicata alla strumentazione aeronautica, fondando il brand",
        link: 'Flybox Avionics',
        image: ourStoryImage,
        imageAlt: 'Microel: La nostra storia',
        direction: 'row',
      },
      aboutUs2It: {
        title: 'I princípi che ci guidano: operosità, ricerca, innovazione',
        text: 'I nostri valori illuminano il nostro modo di lavorare e ci guidano nella scelta dei nostri partner e dei nostri clienti. Collaborazione e ascolto sono alla base del nostro impegno, per garantire un servizio di qualità e un prodotto che soddisfi le esigenze del cliente.',
        image: ourValuesImage,
        imageAlt:
          'Microel: I princípi e valori che ci guidano: operosità, ricerca, innovazione',
        direction: 'row-reverse',
      },
      aboutUs1En: {
        title: 'Our story',
        text: 'Our roots date back to 1982, when the genuine passion for electronics turns into entrepreneurial activity: the company will become a reference point in the production of electronic boards in the industrial automation sector and beyond. Microel also develops a specialization for electronics applied to aeronautical instruments, founding the brand',
        image: ourStoryImage,

        imageAlt: 'Microel: our story',
        direction: 'row',
      },
      aboutUs2En: {
        title: 'The principles that guide us: diligence, research, innovation',
        text: 'Our values enlighten our way of working and guide us in choosing our partners and our customers. Collaboration and listening are the basis of our commitment, to guarantee a quality service and a product that meets the needs of the customer.',
        image: ourValuesImage,
        imageAlt:
          'Microel: The principles and values that guide us: diligence, research, innovation',
        direction: 'row-reverse',
      },
    },
    gallerySection: {
      heading: {
        it: 'Uno sguardo al nostro lavoro',
        en: 'An overview of our work',
      },
      subheading: {
        it: 'I nostri team curano tutti i dettagli: dal design, alla produzione, alla manutenzione.',
        en: 'Our teams take care of every detail: from design, to production, to maintenance.',
      },
    },
    contactSection: {
      heading: {
        it: 'Puoi trovarci qui:',
        en: 'You can find us here:',
      },
    },
    tagCloudSection: {
      it: [
        'Schede elettroniche',
        'Ingegneria elettronica',
        'Personalizzazione',
        'Assemblaggio',
        'Saldatura',
        'Sbroglio',
        'Progettazione',
        'Elettronica industriale',
        'Automazione',
      ],
      en: [
        'Electronic boards',
        'Electronic Engineering',
        'Customization',
        'Assembly',
        'Welding',
        'Layout',
        'Design',
        'Industrial electronics',
        'Automation',
      ],
    },
  },
  areasPage: {
    hero: {
      heading: {
        it: 'Le soluzioni dedicate sono il nostro prodotto standard',
        en: 'Dedicated solutions are our standard product',
      },
      subheading: {
        it: 'Condividi le tue idee e i tuoi tempi con noi e ti connetteremo con le soluzioni che soddisfano le tue esigenze specifiche.',
        en: 'Share your ideas and your time with us and we will connect you with solutions that meet your specific needs.',
      },
    },
    parallaxDataIt: [
      {
        sector: 'Automazione industriale',
        description:
          'Realizziamo schede elettroniche ottimizzate che garantiscono elevate prestazioni, basso consumo energetico e robustezza, per affrontare gli ambienti industriali più impegnativi.',
        imageUrl: industrialAutomationImage,
        imageAlt: 'Macchinario utilizzato in ambito di automazione industriale',
      },
      {
        sector: 'Strumentazione Avionica',
        description:
          'La linea dedicata Flybox Avionics offre strumentazione di bordo integrata con sensori di alta precisione che offrono un controllo avanzato.',
        imageUrl: avionicsInstrumentsImage,
        imageAlt: 'Strumentazione Avionica montata su un aereo',
      },
      {
        sector: 'Azionamenti per motori',
        description:
          'Miglioriamo le prestazioni dinamiche dei motori grazie a schede elettroniche ottimizzate per gestire una vasta gamma di motori, dai tradizionali motori a induzione a quelli ad alta efficienza.',
        imageUrl: motorDrivesImage,
        imageAlt: 'Motore elettrico utilizzato in ambito industriale',
      },

      {
        sector: 'Macchine per test',
        description:
          'Progettiamo Schede elettroniche che permettono integrazioni con una vasta gamma di macchine per test, protocolli di misurazione e analisi',
        imageUrl: testMachinesImage,
        imageAlt: 'Macchinario utilizzato in ambito di test',
      },

      {
        sector: 'Macchine per Packaging',
        description:
          'Le Schede elettroniche Microel sono progettate per integrarsi con una vasta gamma di macchine per il packaging, quali incartatrici, sigillatrici e sistemi di etichettatura, per una maggiore precisione di confezionamento e flessibilità',
        imageUrl: packagingMachinesImage,
        imageAlt:
          'Macchinario utilizzato per la produzione e il trasporto di packaging',
      },

      {
        sector: 'Macchine per Cleaning',
        description:
          'Le nostre schede elettroniche sono integrate in apparecchiature di pulizia quali lavasciuga, aspirapolvere industriali e sistemi di pulizia automatizzati',
        imageUrl: cleaningMachinesImage,
        imageAlt: 'Macchinario utilizzato per le pulizie',
      },
      {
        sector: 'Macchine per settore Calzaturiero',
        description:
          'Ci concentriamo sulla flessibilità delle soluzioni: le nostre schede elettroniche sono integrate in macchinari specializzati utilizzati in ogni fase della produzione, adattandosi alle varie esigenze del settore calzaturiero',
        imageUrl: footwearSectorImage,
        imageAlt:
          'Macchinario utilizzato per la produzione di scarpe con rappresentazione di un paio calzature',
      },
      {
        sector: 'Elettrodomestici per il Bianco',
        description:
          'Le nostre schede elettroniche sono integrate in elettrodomestici quali lavatrici, asciugatrici, lavastoviglie e apparecchi per la cura del bucato, permettendo un controllo preciso dei cicli di lavaggio, asciugatura e altri processi',
        imageUrl: laundryAppliancesImage,
        imageAlt: 'Elettrodomesticp per il bianco',
      },
      {
        sector: 'Macchine per la lavorazione dei metalli',
        description:
          'Le schede elettroniche da noi sviluppate sono integrate in macchinari come torni, frese, laser, per una gestione sofisticata dei parametri di lavorazione',
        imageUrl: metalworkingMachineryImage,
        imageAlt: 'Rappresentazione della lavorazione dei metalli',
      },
    ],
    parallaxDataEn: [
      {
        sector: 'Industrial Automation',
        description:
          'We create optimized electronic boards that guarantee high performance, low energy consumption and robustness, to face the most challenging industrial environments.',
        imageUrl: industrialAutomationImage,
        imageAlt: 'Machinery used in the field of industrial automation',
      },
      {
        sector: 'Avionics Instruments',
        description:
          'Flybox Avionics, a trade mark from Microel srl, offers integrated onboard flight instruments with high precision sensors that provide advanced control.',
        imageUrl: avionicsInstrumentsImage,
        imageAlt: 'Avionics Instruments mounted on an airplane',
      },

      {
        sector: 'Motor Drives',
        description:
          'We improve the dynamic performance of engines thanks to optimized electronic boards to manage a wide range of engines, from traditional induction motors to high efficiency ones.',
        imageUrl: motorDrivesImage,
        imageAlt: 'Electric motor used in industrial automation',
      },
      {
        sector: 'Test Machines',
        description:
          'We design Electronic boards that allow integrations with a broad spectrum of test machines, measurement and analysis protocols',
        imageUrl: testMachinesImage,
        imageAlt: 'Machinery used in the field of test',
      },
      {
        sector: 'Packaging Machines',
        description:
          'Microel electronic boards are designed to integrate with an extensive variety of packaging machines, such as wrappers, sealers and labeling systems, for greater packaging precision and flexibility',
        imageUrl: packagingMachinesImage,
        imageAlt: 'Machinery used for packaging production and transport',
      },
      {
        sector: 'Cleaning Machines',
        description:
          'Our electronic boards are integrated into cleaning equipment such as scrubber dryers, industrial vacuum cleaners and automated cleaning systems',
        imageUrl: cleaningMachinesImage,
        imageAlt: 'Machinery used for cleaning',
      },
      {
        sector: 'Machines for the Footwear Sector',
        description:
          'We focus on the flexibility of solutions: our electronic boards are integrated into specialized machinery used in every phase of production, adapting to the various needs of the footwear sector',
        imageUrl: footwearSectorImage,
        imageAlt:
          'Machinery used for the production of shoes with representation of a pair of footwear',
      },
      {
        sector: 'Laundry Appliances',
        description:
          'Our electronic boards are integrated into appliances such as washing machines, dryers, dishwashers and laundry care appliances, allowing precise control of washing, drying and other processes',
        imageUrl: laundryAppliancesImage,
        imageAlt: 'Laundry Appliances',
      },
      {
        sector: 'Metalworking machinery',
        description:
          'The electronic boards we develop are integrated into machinery such as lathes, milling machines, lasers, for a sophisticated management of processing parameters',
        imageUrl: metalworkingMachineryImage,
        imageAlt: 'Representation of metalworking',
      },
    ],
    callToAction: {
      header: {
        it: 'E tu in quale settore operi?',
        en: 'And you, Which is your area of expertise?',
      },
      paragraph: {
        it: 'Mettiamo a disposizione la nostra esperienza per trovare la soluzione più adatta alle tue esigenze',
        en: 'Our experience is at your disposal, we will help you to find the solution that best suits your needs',
      },
    },
  },
  roadmapPage: {
    heading: {
      it: 'La nostra Roadmap',
      en: 'Our Roadmap',
    },
    stepsIt: [
      {
        label: 'Analizziamo a fondo le tue specificità',
        description:
          'Crediamo che il punto di partenza per un progetto di successo sia la conoscenza approfondita delle esigenze e specificità di ogni nostro cliente',
      },
      {
        label: 'Progettazione',
        description:
          'Studiamo insieme da vicino ogni fase di progettazione, sia hardware sia software',
      },
      {
        label: 'Realizzazione',
        description:
          'Grazie alla nostra esperienza pluriennale, siamo in grado di consegnarti un prodotto creato su misura per te',
      },
      {
        label: "What's next?",
        description:
          "Il tuo successo è il nostro obiettivo: non vediamo l'ora di scoprire quale sarà la sfida che tu ci proporrai. ",
      },
    ],
    stepsEn: [
      {
        label: 'We thoroughly analyze your specifics',
        description:
          'We believe that the starting point for a successful project is a deep understanding of the needs and specifics of each of our clients',
      },
      {
        label: 'Design',
        description:
          'We closely study each phase of design, both hardware and software',
      },
      {
        label: 'Execution',
        description:
          'Thanks to our many years of experience, we are able to deliver a product tailored to you',
      },
      {
        label: "What's next?",
        description:
          "Your success is our goal: we can't wait to find out the challenge you have in mind for us.",
      },
    ],
    solutionsSection: {
      heading: {
        it: 'Alcune delle soluzioni che offriamo per venire incontro alle esigenze di un mercato in continua evoluzione:',
        en: 'Some of the solutions we offer to meet the needs of an ever-changing market:',
      },
    },
  },
  contactsPage: {
    heading: {
      it: 'Contattaci',
      en: 'Contact us',
    },
    paragraph: {
      it: 'Siamo a tua disposizione! Ti risponderemo il prima possibile',
      en: 'We are at your disposal! We will reply back as soon as possible',
    },
    form: {
      firstName: {
        it: 'Nome',
        en: 'Name',
      },
      surname: {
        it: 'Cognome',
        en: 'Surname',
      },

      message: {
        it: 'Scrivi il tuo messaggio',
        en: 'Type your Message',
      },
      submit: {
        it: 'Invia',
        en: 'Submit',
      },
      policySentence: {
        it: "Cliccando 'Invia' sottoscrivi le nostre",
        en: "By clicking 'Submit' you agree to our",
      },
      button: {
        basic: {
          it: 'Invia',
          en: 'Submit',
        },
        sent: {
          it: 'Inviato!',
          en: 'Submitted!',
        },
      },
      thankYou: {
        it: 'Grazie, a presto!',
        en: 'Thank you for contacting us!',
      },
    },
  },
};

export default translations;
