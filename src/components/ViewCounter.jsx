import React from 'react';
import { Box, Typography, Skeleton, Tooltip } from '@mui/material';
import { Visibility, Error as ErrorIcon } from '@mui/icons-material';
import useViewCounter from '../hooks/useViewCounter';

/**
 * ViewCounter Component
 * Displays the number of times the portfolio has been viewed
 */
const ViewCounter = ({ 
  position = 'fixed', 
  variant = 'badge',
  showIcon = true,
  enableAPI = false,
  apiEndpoint = null,
  sx = {} 
}) => {
  const { viewCount, isLoading, error } = useViewCounter({
    enableAPI,
    apiEndpoint
  });

  // Default styles for different variants
  const getVariantStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      borderRadius: 2,
      ...sx
    };

    switch (variant) {
      case 'badge':
        return {
          ...baseStyles,
          bgcolor: 'transparent',
          color: 'rgba(255, 255, 255, 0.9)',
          px: 2,
          py: 1,
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
        };
      case 'card':
        return {
          ...baseStyles,
          bgcolor: 'transparent',
          color: 'text.primary',
          p: 2,
          border: '1px solid rgba(255, 255, 255, 0.1)',
        };
      case 'minimal':
        return {
          ...baseStyles,
          color: 'rgba(255, 255, 255, 0.7)',
          p: 1,
        };
      default:
        return baseStyles;
    }
  };

  const getPositionStyles = () => {
    if (position === 'fixed') {
      return {
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1000,
      };
    }
    return {};
  };

  const formatViewCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toLocaleString();
  };

  if (error) {
    return (
      <Tooltip title={`Error loading view count: ${error}`}>
        <Box
          sx={{
            ...getVariantStyles(),
            ...getPositionStyles(),
          }}
        >
          <ErrorIcon fontSize="small" color="error" />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Views unavailable
          </Typography>
        </Box>
      </Tooltip>
    );
  }

  return (
    <Box
      sx={{
        ...getVariantStyles(),
        ...getPositionStyles(),
      }}
    >
      {showIcon && <Visibility fontSize="small" />}
      {isLoading ? (
        <Skeleton variant="text" width={60} height={20} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
      ) : (
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {formatViewCount(viewCount)} {viewCount === 1 ? 'view' : 'views'}
        </Typography>
      )}
    </Box>
  );
};

export default ViewCounter;
