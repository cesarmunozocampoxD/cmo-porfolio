import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import courses from './data/courses';

const GRAD = 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)';

const bannerGrads = [
  'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)',
  'linear-gradient(135deg, #064e3b 0%, #0891b2 100%)',
  'linear-gradient(135deg, #4c1d95 0%, #be185d 100%)',
  'linear-gradient(135deg, #78350f 0%, #b45309 100%)',
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, display: 'block', mb: 1 }}
          >
            Learn From Experience
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: GRAD,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            Courses & Training
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', lineHeight: 1.8 }}>
            Practical, hands-on courses taught by a working senior engineer. Learn the tools and
            patterns used in real production systems.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 50px rgba(37,99,235,0.14)',
                  },
                }}
              >
                {/* Unique gradient banner per course */}
                <Box
                  sx={{
                    height: 100,
                    background: bannerGrads[index % bannerGrads.length],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: '#fff', fontWeight: 700, textAlign: 'center', position: 'relative', zIndex: 1 }}
                  >
                    {course.title}
                  </Typography>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap">
                    <Chip
                      label={course.level}
                      size="small"
                      color={course.levelColor}
                      sx={{ fontWeight: 600 }}
                    />
                    <Chip
                      label={course.status}
                      size="small"
                      variant="outlined"
                      color={course.status === 'Available' ? 'success' : 'default'}
                      sx={{ fontWeight: 600 }}
                    />
                  </Stack>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                    {course.description}
                  </Typography>

                  <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mb: 2 }}>
                    <AccessTimeIcon fontSize="small" color="action" />
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                      {course.duration}
                    </Typography>
                  </Stack>

                  <Stack direction="row" flexWrap="wrap" gap={0.8}>
                    {course.topics.map((topic) => (
                      <Chip
                        key={topic}
                        label={topic}
                        size="small"
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <Box sx={{ px: 3, pb: 3 }}>
                  <Button
                    variant={course.status === 'Available' ? 'contained' : 'outlined'}
                    fullWidth
                    onClick={() => navigate('/contact')}
                    sx={{ py: 1.2 }}
                  >
                    {course.status === 'Available' ? 'Contact to Enroll' : 'Notify Me'}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Courses;
