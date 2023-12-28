/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useState } from 'react';
import emailjs, { send } from '@emailjs/browser';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import RowContainer from 'components/RowContainer';
import { CircularProgress } from '@mui/material';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup.string().trim().required('Please specify your message'),
});

const Contact = () => {
  const theme = useTheme();

  const LeftSide = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };
    const {
      REACT_APP_EMAILJS_SERVICE_ID,
      REACT_APP_EMAILJS_TEMPLATE_ID,
      REACT_APP_EMAILJS_PUBLIC_KEY,
    } = process.env;

    const sendEmail = async (values, { resetForm }) => {
      try {
        setLoading(true);
        await emailjs.send(
          `${REACT_APP_EMAILJS_SERVICE_ID}`,
          `${REACT_APP_EMAILJS_TEMPLATE_ID}`,
          values,
          `${REACT_APP_EMAILJS_PUBLIC_KEY}`,
        );

        resetForm();
        setEmailSent(true);
      } catch (e) {
        setEmailError(true);
      } finally {
        setLoading(false);
      }
    };

    const formik = useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: sendEmail,
    });

    return (
      <Box>
        <Box marginBottom={4}>
          <Typography variant={'h1'} sx={{ fontWeight: 700 }} gutterBottom>
            Contattaci
          </Typography>
          <Typography color="text.secondary" variant={'p'} fontSize="18px">
            Siamo a tua disposizione! <br></br>
            Ti risponderemo il prima possibile.
          </Typography>
        </Box>
        <Box>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="Nome"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="firstName"
                  fullWidth
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="Cognome"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="lastName"
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ height: 54 }}
                  label="Email"
                  type="email"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="email"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Scrivi il tuo messaggio"
                  multiline
                  rows={6}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="message"
                  fullWidth
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
              <Grid item xs={12}>
                <RowContainer>
                  <Button
                    sx={{ height: 54, minWidth: 150 }}
                    variant="contained"
                    color={'primary'}
                    size="medium"
                    type="submit"
                  >
                    {loading ? (
                      <CircularProgress color="secondary" />
                    ) : emailSent ? (
                      'Inviato!'
                    ) : (
                      'Invia'
                    )}
                  </Button>
                  {emailSent ? (
                    <Typography
                      variant={'p'}
                      sx={{ fontWeight: 700 }}
                      gutterBottom
                    >
                      Grazie, a presto!
                    </Typography>
                  ) : null}
                </RowContainer>
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography component="p" variant="body2" align="left">
                    Cliccando "invia" sottoscrivi le nostre{' '}
                    <Box
                      component={Link}
                      to="/privacy-policy"
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                    >
                      Privacy Policy
                    </Box>{' '}
                    e{' '}
                    <Box
                      component={Link}
                      to="/cookies-policy"
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                    >
                      Cookie Policy
                    </Box>
                    .
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
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
          // filter:
          //   theme.palette.mode === 'dark'
          //     ? 'grayscale(0.5) opacity(0.7)'
          //     : 'none',
        }}
      />
    );
  };

  return (
    <Box
      sx={{
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
          <Box
            display={'flex'}
            alignItems={'center'}
            width={1}
            order={{ xs: 2, md: 1 }}
          >
            <Container style={{ width: '88%' }}>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              minHeight: { xs: 300, md: 600 },
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
