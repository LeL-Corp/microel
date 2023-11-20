import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import Container from 'components/Container';
import { MotionConfig } from 'framer-motion';
import { useRef } from "react";
import { useInView } from "framer-motion";



const VerticalMinimalDesignedBlogCards = ({ data }) => {
  const theme = useTheme();
  const ref= useRef();
  const isInView = useInView(ref, { once: false });
  return (
    <Container>
      <div ref={ref}>
      <Grid container spacing={4}>
        {data.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <div
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: `all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.5 + i * 0.2}s`,
              }}
            >
              <Box
                component={'a'}
                href={''}
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-10px)`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  boxShadow={6}
                  display={'flex'}
                  flexDirection={'column'}
                  sx={{ backgroundImage: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    boxShadow: `0px 10px 13px -7px rgba(37, 176, 162)`,
                  }, }}
                >
                  <CardMedia
                    image={item.image}
                    title={item.title}
                    sx={{
                      height: { xs: 200, md: 260 },
                      position: 'relative',
                    }}
                  />
                  <Box component={CardContent} position={'relative'}>
                    <Typography variant={'h4'} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                  <Box flexGrow={1} />
                  {/* <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Box display={'flex'} alignItems={'center'}>
                      <Avatar
                        src={item.author.avatar}
                        sx={{ marginRight: 1 }}
                      />
                      <Typography color={'text.secondary'}>
                        {item.author.name}
                      </Typography>
                    </Box>
                    <Typography color={'text.secondary'}>
                      {item.date}
                    </Typography>
                  </Box>
                </Box> */}
                </Box>
              </Box>
            </div>
          </Grid>
        ))}
        <Grid item container justifyContent={'center'} xs={12}>
          <Button
            fullWidth
            variant={'outlined'}
            size={'large'}
            sx={{ height: 54, maxWidth: 400, justifyContent: 'space-between' }}
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            Lo nostre soluzioni
          </Button>
        </Grid>
      </Grid>
      </div>
    </Container>
  );
};

export default VerticalMinimalDesignedBlogCards;
