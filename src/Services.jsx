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
import services from './data/services';

const Services = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="services"
      sx={{ py: 8, bgcolor: 'background.default', scrollMarginTop: 64 }}
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
          Consulting Services
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 5, maxWidth: 580, mx: 'auto' }}
        >
          Available for freelance projects, technical consulting, and architecture reviews.
          Let's build something great together.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
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
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <IconComponent sx={{ color: '#fff', fontSize: 28 }} />
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mb: 2 }}>
                      {service.highlights.map((h) => (
                        <Chip key={h} label={h} size="small" variant="outlined" color="primary" />
                      ))}
                    </Stack>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={scrollToContact}
                      sx={{ textTransform: 'none', fontWeight: 600 }}
                    >
                      Request Service
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
