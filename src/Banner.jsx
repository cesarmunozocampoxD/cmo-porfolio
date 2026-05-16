import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useScrollTrigger,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const menuItems = [
  { text: 'About', path: '/' },
  { text: 'Services', path: '/services' },
  { text: 'Courses', path: '/courses' },
  { text: 'Projects', path: '/projects' },
  { text: 'Contact', path: '/contact' },
];

const Banner = ({ mode, onToggleMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const isDark = mode === 'dark';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          background: isDark
            ? trigger ? 'rgba(18,18,18,0.97)' : 'rgba(18,18,18,0.85)'
            : trigger ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: trigger ? 'none' : '1px solid',
          borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
          color: isDark ? '#fff' : 'text.primary',
          transition: 'background 0.3s',
        }}
      >
        <Toolbar>
          {/* Logo / Initials */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 800,
              letterSpacing: 1,
              mr: 4,
              background: 'linear-gradient(135deg, #1976D2 0%, #9c27b0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            onClick={() => navigate('/')}
          >
            CMO
          </Typography>

          {/* Desktop nav links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.text}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: isActive
                      ? 'primary.main'
                      : isDark ? 'rgba(255,255,255,0.85)' : 'text.primary',
                    fontWeight: isActive ? 700 : 500,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    borderBottom: isActive ? '2px solid' : '2px solid transparent',
                    borderColor: isActive ? 'primary.main' : 'transparent',
                    borderRadius: 0,
                    pb: '2px',
                    '&:hover': { color: 'primary.main', background: 'transparent' },
                  }}
                >
                  {item.text}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

          {/* Dark / light toggle */}
          <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <IconButton
              onClick={onToggleMode}
              color="inherit"
              aria-label="toggle color mode"
              sx={{ color: isDark ? 'rgba(255,255,255,0.85)' : 'text.primary' }}
            >
              {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>

          {/* Mobile hamburger */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="open navigation menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { md: 'none' }, color: isDark ? '#fff' : 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer so content is not hidden behind the fixed AppBar */}
      <Toolbar />

      {/* Mobile drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 260,
            minHeight: '100vh',
            bgcolor: 'background.paper',
            color: 'text.primary',
            display: 'flex',
            flexDirection: 'column',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #1976D2 0%, #9c27b0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CMO
            </Typography>
          </Box>
          <List sx={{ pt: 1 }}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => navigate(item.path)}
                  sx={{
                    mx: 1,
                    my: 0.5,
                    borderRadius: 2,
                    bgcolor: isActive ? 'primary.main' : 'transparent',
                    color: isActive ? '#fff' : 'text.primary',
                    '&:hover': {
                      bgcolor: isActive ? 'primary.dark' : 'action.hover',
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: isActive ? 700 : 500, fontSize: '0.9rem' }}>
                        {item.text}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Banner;
