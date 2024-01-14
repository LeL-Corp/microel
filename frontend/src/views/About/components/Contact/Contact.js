import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import { Link } from '@mui/material';

import translations from 'translations/Translations';
import { useLanguage } from 'context/LanguageContext';

const Contact = () => {
  const theme = useTheme();
  const { language } = useLanguage();

  const mock = [
    {
      label: translations.navigation.info.phone[language],
      value: 'tel:+390384 670602',
      valueLabel: 'Tel. 0384 670602',
      icon: (
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#5285E6"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
    },
    // {
    //   label: 'Email',
    //   value: 'mailto:info@microel.it',
    //   valueLabel: 'info@microel.it',
    //   icon: (
    //     <svg
    //       width={20}
    //       height={20}
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 20 20"
    //       fill="#5285E6"
    //     >
    //       <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    //       <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    //     </svg>
    //   ),
    // },
    {
      label: translations.navigation.info.address[language],
      value: 'Via Mortara 192/194 ROBBIO (PV)',
      valueLabel: 'Via Mortara 192/194 ROBBIO (PV)',
      icon: (
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#5285E6"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const LeftSide = () => {
    return (
      <Box>
        <Box marginBottom={2}>
          <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
            {translations.aboutUsPage.contactSection.heading[language]}
          </Typography>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          gap={3}
          marginTop={6}
        >
          {mock.map((item, i) => (
            <Box
              key={i}
              component={ListItem}
              disableGutters
              width={'auto'}
              padding={0}
            >
              <Box
                component={ListItemAvatar}
                minWidth={'auto !important'}
                marginRight={2}
              >
                <Box
                  component={Avatar}
                  bgcolor={theme.palette.secondary.main}
                  width={40}
                  height={40}
                >
                  {item.icon}
                </Box>
              </Box>
              <ListItemText
                primary={
                  <Typography
                    variant={'h4'}
                    fontWeight={700}
                    fontSize="18px !important"
                    marginBottom={1.5}
                  >
                    {item.label}
                  </Typography>
                }
                secondary={
                  item.label !== 'Indirizzo' || item.label === 'Address' ? (
                    <Link underline="hover" color="inherit" href={item.value}>
                      <Typography variant={'p'}>{item.valueLabel}</Typography>
                    </Link>
                  ) : (
                    item.valueLabel
                  )
                }
              />
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  const RightSide = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.2987733776217!2d8.59824197712027!3d45.282183971071646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478654c845554df3%3A0x5ed45c7712c9b043!2sFlybox%20Avionics%20%2F%20Microel!5e0!3m2!1sit!2sit!4v1701332645264!5m2!1sit!2sit"
        style={{
          minHeight: 300,
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Contact;
