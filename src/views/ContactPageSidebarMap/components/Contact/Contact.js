/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';
import { useLanguage } from 'context/LanguageContext';
import translations from 'translations/Translations';

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
          fill="currentColor"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
    },
    // {
    //   label: 'Email',
    //   value: 'mailto:info@microel.it',
    //   valueLabel: "info@microel.it",
    //   icon: (
    //     <svg
    //       width={20}
    //       height={20}
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 20 20"
    //       fill="currentColor"
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
          fill="currentColor"
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

  return (
    <Box>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent={'flex-start'}
        marginBottom={4}
        gap={8}
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
                bgcolor={theme.palette.primary.main}
                width={40}
                height={40}
              >
                {item.icon}
              </Box>
            </Box>
            <ListItemText
              primary={
                <Typography
                  variant={'h2'}
                  fontSize="16px !important"
                  fontWeight={700}
                  marginBottom={1.5}
                >
                  {item.label}
                </Typography>
              }
              secondary={
                item.label !== 'Indirizzo' ? (
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

export default Contact;
