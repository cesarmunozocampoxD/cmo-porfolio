import React, { useState } from 'react';
import './Banner.css';
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
  Button,
  useScrollTrigger,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const menuItems = [
  { text: 'About',    path: '/' },
  { text: 'Services', path: '/services' },
  { text: 'Courses',  path: '/courses' },
  { text: 'Projects', path: '/projects' },
  { text: 'Contact',  path: '/contact' },
];

const Banner = ({ mode, onToggleMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate   = useNavigate();
  const location   = useLocation();
  const trigger    = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const isDark     = mode === 'dark';

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const appBarCls = [
    'banner-appbar',
    isDark ? 'banner-appbar--dark' : 'banner-appbar--light',
    trigger ? 'banner-appbar--scrolled' : '',
  ].join(' ');

  const iconBtnCls = isDark ? 'banner-icon-btn--dark' : 'banner-icon-btn--light';

  return (
    <header>
      <AppBar position="fixed" elevation={trigger ? 4 : 0} className={appBarCls}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            className="banner-logo"
            onClick={() => navigate('/')}
          >
            CMO
          </Typography>

          <nav className="banner-nav">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.text}
                  onClick={() => navigate(item.path)}
                  className={['banner-nav-btn', isActive ? 'banner-nav-btn--active' : ''].join(' ')}
                >
                  {item.text}
                </Button>
              );
            })}
          </nav>

          <div className="banner-spacer" />

          <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <IconButton
              onClick={onToggleMode}
              color="inherit"
              aria-label="toggle color mode"
              className={iconBtnCls}
            >
              {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="open navigation menu"
            onClick={toggleDrawer(true)}
            className={['banner-hamburger', iconBtnCls].join(' ')}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Toolbar aria-hidden="true" />

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="banner-drawer" role="presentation" onClick={toggleDrawer(false)}>
          <div className="banner-drawer-header">
            <Typography variant="h6" className="banner-drawer-logo">CMO</Typography>
          </div>
          <List>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => navigate(item.path)}
                  className={['banner-drawer-item', isActive ? 'banner-drawer-item--active' : ''].join(' ')}
                >
                  <ListItemText
                    primary={
                      <Typography className={['banner-drawer-item-text', isActive ? 'banner-drawer-item-text--active' : ''].join(' ')}>
                        {item.text}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Drawer>
    </header>
  );
};

export default Banner;
