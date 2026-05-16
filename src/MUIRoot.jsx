import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#2563EB',
        light: '#60A5FA',
        dark: '#7C3AED',
      },
      secondary: {
        main: '#7C3AED',
        light: '#A78BFA',
        dark: '#5B21B6',
      },
      background: {
        default: mode === 'dark' ? '#0F172A' : '#F8FAFC',
        paper: mode === 'dark' ? '#1E293B' : '#FFFFFF',
      },
      divider: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)',
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-0.025em' },
      h2: { fontWeight: 800, letterSpacing: '-0.02em' },
      h3: { fontWeight: 700, letterSpacing: '-0.01em' },
      h4: { fontWeight: 700, letterSpacing: '-0.01em' },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: 16,
            border: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: 0,
            transition: 'all 0.2s ease',
          },
          containedPrimary: {
            background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
            '&:hover': {
              background: 'linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%)',
              boxShadow: '0 6px 22px rgba(37, 99, 235, 0.5)',
              transform: 'translateY(-1px)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 6, fontWeight: 500 },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: { borderRadius: 10 },
        },
      },
    },
  });

const MUIRoot = ({ children, mode = 'light' }) => (
  <ThemeProvider theme={getTheme(mode)}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MUIRoot;
