/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import RowContainer from 'components/RowContainer';

const SingleSector = ({ data }) => {
  const theme = useTheme();
  const language = 'it';

  return (
    <Box>
      <Typography
        variant="h2"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: 'uppercase',

          
        }}
      >
        {data.sector}
      </Typography>
      <Typography
        // variant="h6"
        component="p"
        color="text.primary"
        align={'center'}
        sx={{
          fontSize: '1.3rem',
          color: theme.palette.common.white,
          paddingLeft: '5%',
          paddingRight: '5%',
          paddingTop: '20px',
          textAlign: 'center',
        }}
      >
        {data.description}
      </Typography>

      {data.sector === 'Strumentazione Avionica' ? (
        <RowContainer center style={{ marginTop: '30px' }}>
          <Button
            component={'a'}
            href="https://www.flyboxavionics.it/index.html"
            variant="contained"
            color="primary"
            size="large"
            fullWidth={false}
            sx={{ fontWeight: 700 }}
          >
            {' '}
            Scopri Flybox Avionics
          </Button>
        </RowContainer>
      ) : null}
    </Box>
  );
};

export default SingleSector;
