import React from 'react';
import './ViewCounter.css';
import { Typography, Skeleton, Tooltip } from '@mui/material';
import { Visibility, Error as ErrorIcon } from '@mui/icons-material';
import useViewCounter from '../../hooks/useViewCounter';

const ViewCounter = ({
  position = 'fixed',
  variant = 'badge',
  showIcon = true,
  enableAPI = false,
  apiEndpoint = null,
}) => {
  const { viewCount, isLoading, error } = useViewCounter({ enableAPI, apiEndpoint });

  const formatViewCount = (count) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toLocaleString();
  };

  const cls = ['vc', `vc--${variant}`, position === 'fixed' ? 'vc--fixed' : '']
    .filter(Boolean)
    .join(' ');

  if (error) {
    return (
      <Tooltip title={`Error loading view count: ${error}`}>
        <div className={cls}>
          <ErrorIcon fontSize="small" color="error" />
          <Typography variant="body2" className="vc-text">Views unavailable</Typography>
        </div>
      </Tooltip>
    );
  }

  return (
    <div className={cls}>
      {showIcon && <Visibility fontSize="small" />}
      {isLoading ? (
        <Skeleton variant="text" width={60} height={20} className="vc-skeleton" />
      ) : (
        <Typography variant="body2" className="vc-text">
          {formatViewCount(viewCount)} {viewCount === 1 ? 'view' : 'views'}
        </Typography>
      )}
    </div>
  );
};

export default ViewCounter;
