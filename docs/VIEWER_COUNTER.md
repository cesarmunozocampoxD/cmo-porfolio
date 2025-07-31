# Viewer Counter Configuration

This document explains how to configure and customize the viewer counter in your portfolio.

## Basic Usage

The viewer counter is already integrated into your portfolio and works out of the box using localStorage. No additional configuration is required for basic functionality.

## Features

- **Session-based counting**: Only counts one view per browser session
- **Persistent storage**: Uses localStorage to maintain counts across browser sessions
- **Error handling**: Graceful fallbacks if storage is unavailable
- **Responsive design**: Adapts to different screen sizes
- **Customizable**: Multiple display variants and positioning options

## Configuration Options

### ViewCounter Component Props

```jsx
<ViewCounter 
  variant="badge"        // 'badge', 'card', 'minimal'
  position="fixed"       // 'fixed', 'relative', 'absolute'
  showIcon={true}        // Show/hide the eye icon
  enableAPI={false}      // Enable external API integration
  apiEndpoint={null}     // External API endpoint
  sx={{}}               // Custom styling
/>
```

### Display Variants

1. **Badge** (default): Floating semi-transparent badge
2. **Card**: Card-style with border and shadow
3. **Minimal**: Simple text with minimal styling

### Positioning

- **Fixed**: Floating in top-right corner (default)
- **Relative**: Inline with content flow
- **Absolute**: Positioned relative to parent container

## External API Integration

For production websites, you might want to use an external service for more accurate analytics.

### Option 1: Counter API (Free)

```jsx
<ViewCounter 
  enableAPI={true}
  apiEndpoint="https://api.countapi.xyz/hit/your-domain.com/visits"
  variant="badge"
/>
```

### Option 2: Custom Analytics Service

```jsx
<ViewCounter 
  enableAPI={true}
  apiEndpoint="https://your-analytics-api.com/track"
  variant="badge"
/>
```

### Option 3: Google Analytics Integration

For more comprehensive analytics, integrate with Google Analytics:

```javascript
// Add to your index.html or use react-ga
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: 'Portfolio View',
  page_location: window.location.href
});
```

## Development and Testing

### Reset Counter

You can reset the counter for testing purposes by opening browser console and running:

```javascript
localStorage.removeItem('portfolioViewCount');
sessionStorage.removeItem('portfolioViewed');
location.reload();
```

### Set Initial Count

To set an initial count (e.g., migrating from another analytics service):

```javascript
localStorage.setItem('portfolioViewCount', '1000');
```

## Privacy Considerations

- The counter uses only localStorage and sessionStorage
- No personal data is collected or transmitted
- Users can clear their browser storage to reset the count
- Session detection prevents multiple counts from the same visit

## Browser Compatibility

- **localStorage**: Supported in all modern browsers (IE8+)
- **sessionStorage**: Supported in all modern browsers (IE8+)
- **Graceful degradation**: Falls back to default count if storage unavailable

## Customization Examples

### Minimal Footer Counter

```jsx
<ViewCounter 
  variant="minimal"
  position="relative"
  showIcon={false}
  sx={{ justifyContent: 'center', mt: 2 }}
/>
```

### Card-style in Sidebar

```jsx
<ViewCounter 
  variant="card"
  position="relative"
  sx={{ mb: 2 }}
/>
```

### Custom Styled Counter

```jsx
<ViewCounter 
  variant="badge"
  sx={{
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
    '&:hover': {
      bgcolor: 'primary.dark'
    }
  }}
/>
```

## Troubleshooting

### Counter Not Incrementing

1. Check browser console for errors
2. Verify localStorage is enabled in browser
3. Clear browser cache and try again

### Counter Resets Unexpectedly

1. Check if localStorage is being cleared by other scripts
2. Verify the storage key is consistent
3. Check browser privacy settings

### API Integration Issues

1. Verify API endpoint is accessible
2. Check CORS configuration for external APIs
3. Monitor browser network tab for failed requests

## Future Enhancements

Potential improvements you could add:

1. **Unique visitor tracking** using fingerprinting
2. **Geographic analytics** with IP geolocation
3. **Time-based analytics** (views per day/month)
4. **Referrer tracking** to see traffic sources
5. **Device/browser analytics**
6. **Real-time dashboard** for viewing statistics

## Security Notes

- Always validate and sanitize API responses
- Use HTTPS for external API communications
- Consider implementing rate limiting for API calls
- Be mindful of privacy regulations (GDPR, CCPA) if collecting user data
