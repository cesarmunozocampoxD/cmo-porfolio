import React from 'react';
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
  Divider,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import courses from './data/courses';

const Courses = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="courses"
      sx={{ py: 8, bgcolor: 'background.paper', scrollMarginTop: 64 }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          color="text.primary"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 1 }}
        >
          Courses & Training
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 5, maxWidth: 580, mx: 'auto' }}
        >
          Practical, hands-on courses taught by a working senior engineer. Learn the tools and
          patterns used in real production systems.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                {/* Thumbnail banner */}
                <Box
                  sx={{
                    height: 90,
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: '#fff', fontWeight: 700, textAlign: 'center' }}
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
                      variant="filled"
                    />
                    <Chip
                      label={course.status}
                      size="small"
                      variant="outlined"
                      color={course.status === 'Available' ? 'success' : 'default'}
                    />
                  </Stack>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    {course.description}
                  </Typography>

                  <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mb: 2 }}>
                    <AccessTimeIcon fontSize="small" color="action" />
                    <Typography variant="caption" color="text.secondary">
                      {course.duration}
                    </Typography>
                  </Stack>

                  <Divider sx={{ mb: 2 }} />

                  <Stack direction="row" flexWrap="wrap" gap={0.8}>
                    {course.topics.map((topic) => (
                      <Chip key={topic} label={topic} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </CardContent>

                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant={course.status === 'Available' ? 'contained' : 'outlined'}
                    fullWidth
                    onClick={scrollToContact}
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                    disabled={false}
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
