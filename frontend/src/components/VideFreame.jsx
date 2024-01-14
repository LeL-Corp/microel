import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Container from 'components/Container';

const VideoFrame = ({urlVideo, bgColor, videoTitle, videoDescription}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundPosition: 'center center',
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: bgColor,
          opacity: 0.7,
          zIndex: 1,
        },
      }}
    >
      <Container position={'relative'} zIndex={3}>
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant={'h4'}
              gutterBottom
              align={'center'}
              sx={{ fontWeight: 700, color: 'common.white' }}
            >
              {videoTitle}
            </Typography>
            <Typography
              variant={'h6'}
              component={'p'}
              color={'text.secondary'}
              align={'center'}
              sx={{ color: 'common.white' }}
            >
              {videoDescription}
            </Typography>
          </Box>
          <video
            width="100%"
            height="auto"
            controls
            src={urlVideo}
            type="video/mp4"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default VideoFrame;
