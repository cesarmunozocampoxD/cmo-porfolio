import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { text: 'About Me', href: '#about' },
  { text: 'Projects', href: '#projects' },
  { text: 'Contact', href: '#contact' },
];

const Banner = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#111' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 2 }}>
            My Developer Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 260, height: '100%', minHeight: '100vh', background: 'linear-gradient(180deg, #111 80%, #222 100%)', color: '#fff', p: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} role="presentation" onClick={toggleDrawer(false)}>
          <List sx={{ p: 0, width: '100%' }}>
            {menuItems.map((item, idx) => (
              <ListItem 
                button 
                component="a" 
                href={item.href} 
                key={idx}
                sx={{
                  my: 1.2,
                  mx: 2,
                  borderRadius: 3,
                  background: 'rgba(255,255,255,0.04)',
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  letterSpacing: 0.3,
                  textTransform: 'uppercase',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                  border: '1px solid #222',
                  transition: 'background 0.25s, color 0.25s, transform 0.15s',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #232526 60%, #414345 100%)',
                    color: '#90caf9',
                    transform: 'scale(1.04)',
                    border: '1px solid #90caf9',
                  },
                }}
              >
                <ListItemText 
                  primary={
                    <Typography
                      sx={{
                        fontSize: '0.80rem',
                        fontWeight: 500,
                        textAlign: 'center',
                        letterSpacing: 0.3,
                        textTransform: 'uppercase',
                        color: 'inherit',
                      }}
                    >
                      {item.text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Banner;
