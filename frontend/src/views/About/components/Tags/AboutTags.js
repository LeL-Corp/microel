import { Chip, Container } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import translations from 'translations/Translations';
import { useLanguage } from 'context/LanguageContext';

const AboutTags = () => {
  const theme = useTheme();
  const { language } = useLanguage();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  console.log('language', language);
  const tags = translations.aboutUsPage.tagCloudSection[language];
  console.log('tags', tags);

  return (
    <Container>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <Typography
          variant="h4"
          align={'center'}
          sx={{
            fontWeight: 700,
            marginBottom: 2,
            fontSize: '24px',
          }}
        >
          Tag cloud
        </Typography>
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          justifyContent={'center'}
          maxWidth={isMobile ? '90%' : '50%'}
          alignItems={'center'}
        >
          {tags.map((item, i) => (
            <motion.div
              key={i}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: 'easeInOut',
              }}
              style={{ margin: 0.5 }}
            >
              <Chip
                label={
                  <Typography
                    variant="h5"
                    align={'center'}
                    sx={{
                      fontWeight: 700,
                      marginBottom: 0,
                      fontSize: '16px !important',
                    }}
                  >
                    {item}
                  </Typography>
                }
                clickable
                sx={{
                  margin: 0.5,
                  backgroundColor: theme.palette.tertiary.main,
                  fontWeight: 700,
                  '&:hover': {
                    backgroundColor: theme.palette.tertiary.dark,
                  },
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
export default AboutTags;
