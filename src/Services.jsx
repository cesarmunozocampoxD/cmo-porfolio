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
import services from './data/services';

const GRAD = 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)';

const iconGrads = [
  'linear-gradient(135deg, #2563EB, #7C3AED)',
  'linear-gradient(135deg, #0891B2, #06B6D4)',
  'linear-gradient(135deg, #059669, #10B981)',
  'linear-gradient(135deg, #D97706, #F59E0B)',
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: 3,
              display: 'block',
              mb: 1,
            }}
          >
            What I Offer
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
            Consulting Services
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 560, mx: 'auto', lineHeight: 1.8 }}
          >
            Available for freelance projects, technical consulting, and architecture reviews.
            Let's build something great together.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 20px 50px rgba(37,99,235,0.14)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0, left: 0, right: 0,
                      height: 3,
                      background: iconGrads[index % iconGrads.length],
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3.5 }}>
                    {/* Icon badge */}
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        background: iconGrads[index % iconGrads.length],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                        boxShadow: '0 8px 24px rgba(37,99,235,0.25)',
                      }}
                    >
                      <IconComponent sx={{ color: '#fff', fontSize: 28 }} />
                    </Box>

                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8 }}>
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
                          sx={{ fontWeight: 500 }}
                        />
                      ))}
                    </Stack>
                  </CardContent>

                  <Box sx={{ px: 3.5, pb: 3 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => navigate('/contact')}
                      sx={{ py: 1.2 }}
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
