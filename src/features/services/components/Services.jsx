import React from 'react';
import './Services.css';
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
import services from '../../../shared/constants/services';

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="services-root">
      <Container maxWidth="lg">
        <div className="services-header">
          <Typography variant="overline" className="services-overline">What I Offer</Typography>
          <Typography variant="h3" component="h2" className="services-title">
            Consulting Services
          </Typography>
          <Typography variant="body1" color="text.secondary" className="services-subtitle">
            Available for freelance projects, technical consulting, and architecture reviews.
            Let&apos;s build something great together.
          </Typography>
        </div>

        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Card elevation={0} className={`services-card services-card--${index % 4}`}>
                  <CardContent className="services-card-content">
                    <div className={`services-icon-badge services-icon-badge--${index % 4}`}>
                      <IconComponent className="services-icon" />
                    </div>
                    <Typography variant="h6" component="h3" className="services-card-title">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="services-card-desc">
                      {service.description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={0.8}>
                      {service.highlights.map((h) => (
                        <Chip
                          key={h}
                          label={h}
                          size="small"
                          variant="outlined"
                          color="primary"
                          className="services-chip"
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <div className="services-card-action">
                    <Button
                      variant="contained"
                      fullWidth
                      className="services-cta-btn"
                      onClick={() => navigate('/contact')}
                    >
                      Request Service
                    </Button>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
