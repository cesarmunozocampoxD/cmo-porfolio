import { useState, useEffect } from 'react';

/**
 * Custom hook for managing portfolio view counter
 * Supports both local storage and optional external API integration
 */
export const useViewCounter = (options = {}) => {
  const {
    storageKey = 'portfolioViewCount',
    sessionKey = 'portfolioViewed',
    apiEndpoint = null, // Optional: external API endpoint for view tracking
    enableAPI = false
  } = options;

  const [viewCount, setViewCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeViewCount = async () => {
      try {
        setIsLoading(true);
        
        // Check if this is a new session
        const hasViewedThisSession = sessionStorage.getItem(sessionKey);
        const isNewSession = !hasViewedThisSession;

        if (enableAPI && apiEndpoint) {
          // Use external API for view counting
          try {
            const response = await fetch(apiEndpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                action: isNewSession ? 'increment' : 'get',
                userAgent: navigator.userAgent,
                timestamp: new Date().toISOString(),
              }),
            });

            if (response.ok) {
              const data = await response.json();
              setViewCount(data.count || 0);
            } else {
              throw new Error('API request failed');
            }
          } catch (apiError) {
            console.warn('API view counter failed, falling back to localStorage:', apiError);
            // Fallback to localStorage if API fails
            handleLocalStorage(isNewSession);
          }
        } else {
          // Use localStorage for view counting
          handleLocalStorage(isNewSession);
        }

        // Mark this session as viewed
        if (isNewSession) {
          sessionStorage.setItem(sessionKey, 'true');
        }

      } catch (err) {
        console.error('Error initializing view counter:', err);
        setError(err.message);
        setViewCount(1); // Fallback value
      } finally {
        setIsLoading(false);
      }
    };

    const handleLocalStorage = (isNewSession) => {
      const storedCount = localStorage.getItem(storageKey);
      const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
      
      if (isNewSession) {
        const newCount = currentCount + 1;
        localStorage.setItem(storageKey, newCount.toString());
        setViewCount(newCount);
      } else {
        setViewCount(currentCount);
      }
    };

    initializeViewCount();
  }, [storageKey, sessionKey, apiEndpoint, enableAPI]);

  // Function to manually reset counter (for development/testing)
  const resetCounter = () => {
    localStorage.removeItem(storageKey);
    sessionStorage.removeItem(sessionKey);
    setViewCount(0);
  };

  // Function to manually set counter (for migration/initialization)
  const setCounter = (count) => {
    const numCount = parseInt(count, 10) || 0;
    localStorage.setItem(storageKey, numCount.toString());
    setViewCount(numCount);
  };

  return {
    viewCount,
    isLoading,
    error,
    resetCounter,
    setCounter
  };
};

export default useViewCounter;
