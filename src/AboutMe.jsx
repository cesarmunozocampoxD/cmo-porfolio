// This file will contain the AboutMe component using MUI
import React from 'react';
import { Container, Typography, Avatar, Box, Paper } from '@mui/material';

const AboutMe = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 0, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', minHeight: 'unset' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, width: '100%' }}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" gap={2}>
          <Typography variant="h4" component="h1">
            Your Name
          </Typography>
          <Avatar
            alt="Your Name"
            src="/vite.svg"
            sx={{ width: 80, height: 80, mb: 1 }}
          />
          <Typography variant="body1" color="text.secondary">
            Hi! I'm Your Name, a passionate developer with experience in React, JavaScript, and modern web technologies. I love building beautiful and functional user interfaces, and I'm always eager to learn new things and take on new challenges.
          </Typography>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Skills
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              <Box sx={{ bgcolor: '#e3f2fd', color: '#1976d2', px: 2, py: 0.5, borderRadius: 2, fontSize: 14 }}>React</Box>
              <Box sx={{ bgcolor: '#f3e5f5', color: '#7b1fa2', px: 2, py: 0.5, borderRadius: 2, fontSize: 14 }}>JavaScript</Box>
              <Box sx={{ bgcolor: '#e8f5e9', color: '#388e3c', px: 2, py: 0.5, borderRadius: 2, fontSize: 14 }}>Node.js</Box>
              <Box sx={{ bgcolor: '#fff3e0', color: '#f57c00', px: 2, py: 0.5, borderRadius: 2, fontSize: 14 }}>Material UI</Box>
              <Box sx={{ bgcolor: '#ede7f6', color: '#512da8', px: 2, py: 0.5, borderRadius: 2, fontSize: 14 }}>TypeScript</Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Hobbies
            </Typography>
            <Typography variant="body2" color="text.secondary">
              🎸 Playing guitar &nbsp; | &nbsp; 📚 Reading tech blogs &nbsp; | &nbsp; 🏃‍♂️ Running &nbsp; | &nbsp; 🎮 Gaming
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Fun Fact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I love automating daily tasks and experimenting with new JavaScript frameworks!
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutMe;
