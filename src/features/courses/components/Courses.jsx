import React from 'react';
import './Courses.css';
import { useNavigate } from 'react-router-dom';
import {
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
import courses from '../../../shared/constants/courses';

const Courses = () => {
  const navigate = useNavigate();

  return (
    <section className="courses-root">
      <Container maxWidth="lg">
        <div className="courses-header">
          <Typography variant="overline" className="courses-overline">Learn From Experience</Typography>
          <Typography variant="h3" component="h2" className="courses-title">
            Courses &amp; Training
          </Typography>
          <Typography variant="body1" color="text.secondary" className="courses-subtitle">
            Practical, hands-on courses taught by a working senior engineer. Learn the tools and
            patterns used in real production systems.
          </Typography>
        </div>

        <Grid container spacing={3} justifyContent="center">
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card elevation={0} className="courses-card">
                <div className={`courses-banner courses-banner--${index % 4}`}>
                  <Typography variant="h6" className="courses-banner-title">
                    {course.title}
                  </Typography>
                </div>

                <CardContent className="courses-card-content">
                  <Stack direction="row" spacing={1} className="courses-chip-row" flexWrap="wrap">
                    <Chip
                      label={course.level}
                      size="small"
                      color={course.levelColor}
                      className="courses-level-chip"
                    />
                    <Chip
                      label={course.status}
                      size="small"
                      variant="outlined"
                      color={course.status === 'Available' ? 'success' : 'default'}
                      className="courses-status-badge"
                    />
                  </Stack>

                  <Typography variant="body2" color="text.secondary" className="courses-desc">
                    {course.description}
                  </Typography>

                  <Stack direction="row" spacing={0.5} alignItems="center" className="courses-duration">
                    <AccessTimeIcon fontSize="small" color="action" />
                    <Typography variant="caption" color="text.secondary" className="courses-duration-text">
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
                        className="courses-topic-chip"
                      />
                    ))}
                  </Stack>
                </CardContent>

                <div className="courses-card-action">
                  <Button
                    variant={course.status === 'Available' ? 'contained' : 'outlined'}
                    fullWidth
                    className="courses-cta-btn"
                    onClick={() => navigate('/contact')}
                  >
                    {course.status === 'Available' ? 'Contact to Enroll' : 'Notify Me'}
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Courses;
