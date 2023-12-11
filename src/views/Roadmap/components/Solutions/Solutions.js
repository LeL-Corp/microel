import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import translations from 'translations/Translations';
import { useLanguage } from 'context/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

//   {
//     feedback:
//       'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     name: 'Chary Smith',
//     title: 'SEO at Comoti',
//     avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
//   },
// ];

const Solutions = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const ref = useRef(null);
  const solutions = [
    {
      image:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1698410282/Assets/Homepage/uyjrbuat9euvtq4epuhz.jpg',
      description: translations?.home?.section3?.box1?.subHeading[language],
      title: translations?.home?.section3?.box1?.heading[language],
    },
    {
      image:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1698410290/Assets/Homepage/azrjakab6byjv8vhxitd.jpg',
      description: translations?.home?.section3?.box2?.subHeading[language],
      title: translations?.home?.section3?.box2?.heading[language],
    },
    {
      image:
        'https://res.cloudinary.com/dslne9y2j/image/upload/v1698410299/Assets/Homepage/vyj1sipbfeyo8twaxh6k.jpg',
      description: translations?.home?.section3?.box3?.subHeading[language],
      title: translations?.home?.section3?.box3?.heading[language],
    },
  ];
  const isInView = useInView(ref, { once: false });

  return (
    <Box>
      <div ref={ref}>
        <Box marginBottom={8} marginTop={8}>
          <Typography
            variant="h4"
            align={'center'}
            data-aos={'fade-up'}
            gutterBottom
            sx={{
              fontWeight: 500,
              fontSize: '20px',
              marginTop: theme.spacing(1),
              marginBottom: '30px',
            }}
          >
            Alcune delle soluzioni che offriamo per venire incontro alle
            esigenze di un mercato in continua evoluzione:
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {solutions.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <div
                style={{
                  transform: isInView ? 'none' : 'translateY(100px)',
                  opacity: isInView ? 1 : 0,
                  transition: `all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                    0.5 + i * 0.2
                  }s`,
                }}
              >
                <Box
                  width={1}
                  height={1}
                  //   data-aos={'fade-up'}
                  //   data-aos-delay={i * 100}
                  //   data-aos-offset={100}
                  //   data-aos-duration={600}
                  component={Card}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  boxShadow={0}
                  variant={'outlined'}
                  borderRadius={2}
                  sx={{
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      boxShadow: `4px 10px 13px -2px ${theme.palette.tertiary.main}`,
                      transform: `translateY(-10px)`,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box sx={{ paddingBottom: 2 }}>
                      <ListItem
                        component="div"
                        disableGutters
                        sx={{ padding: 0 }}
                      >
                        <ListItemAvatar sx={{ marginRight: 3 }}>
                          <Avatar
                            src={item.image}
                            variant={'rounded'}
                            sx={{
                              width: 100,
                              height: 100,
                              borderRadius: '50%',
                            }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          sx={{ margin: 0 }}
                          primary={item.title}
                          //   secondary={item.title}
                        />
                      </ListItem>
                    </Box>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Box>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default Solutions;
