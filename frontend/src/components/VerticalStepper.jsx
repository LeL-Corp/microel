import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RowContainer from './RowContainer';
import ColumnContainer from './ColumnContainer';
import translations from 'translations/Translations';
import { useLanguage } from 'context/LanguageContext';

const CustomDescription = styled(RowContainer)(({ index }) => ({
  borderRadius: '9px',
  backgroundColor:
    index % 2 !== 0 ? 'rgba(81, 104, 148, 0.9)' : 'rgba(37, 176, 162, 0.8)',
  minHeight: '100px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderRadius: '10px',
  padding: '10px',
  marginTop: '20px',
  padding: '30px',
  fontSize: '18px',

  '&:hover': {
    boxShadow:
      index % 2 !== 0
        ? '0px 10px 13px -7px rgba(37, 176, 162)'
        : '0px 10px 13px -7px rgba(81, 104, 148)',
  },
  '@media (min-width: 892px)': {
    minWidth: '600px',
  },
}));

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeStep < steps.length - 1) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [activeStep]);

  const { roadmapPage } = translations;
  const steps = language === 'it' ? roadmapPage.stepsIt : roadmapPage.stepsEn;

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography
                variant="h2"
                sx={{ fontWeight: 400, fontSize: '22px !important' }}
              >
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent
              TransitionComponent="None"
              TransitionProps={{ unmountOnExit: false }}
            >
              <CustomDescription index={index}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.8 }}
                >
                  <motion.p style={{ fontSize: '18px' }}>
                    {step.description}
                  </motion.p>
                  {index === steps.length - 1 ? (
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      fullWidth={false}
                      sx={{ fontWeight: '700 !important' }}
                    >
                      {' '}
                      {translations.buttons.contact[language]}
                    </Button>
                  ) : null}
                </motion.div>
              </CustomDescription>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
