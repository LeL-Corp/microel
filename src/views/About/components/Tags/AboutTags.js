import { Chip, Container } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const AboutTags = () => {
  const italianTags = [
    'Schede elettroniche',
    'PCB',
    'Assemblaggio',
    'Saldatura',
    'Sbroglio',
    'Progettazione',
    'Elettronica industriale',
    'Automazione',
    'Personalizzazione',
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

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
          {italianTags.map((item, i) => (
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
                // data-aos="fade-up"
                // data-aos-delay={i * 100}
                // data-aos-offset={100}
                // data-aos-duration={600}
                label={item}
                clickable
                sx={{ margin: 0.5 }}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
export default AboutTags;
