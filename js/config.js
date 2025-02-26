/**
 * Configuration file for Roxy's Fitness Website
 * 
 * This file safely loads environment variables for use in the application.
 * In a production environment, these variables would be set on the server
 * and not exposed to the client-side code.
 */

// For development with direct environment variables:
// Note: This requires a build step with something like Webpack, Parcel, or Vite
// that can process environment variables during build time

const config = {
  // API Keys (these will be undefined in the browser unless properly processed during build)
  GIPHY_API_KEY: process.env.GIPHY_API_KEY,
  GOOGLE_CLOUD_API_KEY: process.env.GOOGLE_CLOUD_API_KEY, 
  UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
  UNSPLASH_SECRET_KEY: process.env.UNSPLASH_SECRET_KEY,
  
  // Feature flags
  USE_MOCK_DATA: true, // Set to true to use local data instead of real API calls
  
  // API endpoints that would be called from a secure backend, not directly from client
  endpoints: {
    GIPHY_API: 'https://api.giphy.com/v1/gifs/search',
    YOUTUBE_API: 'https://www.googleapis.com/youtube/v3/search',
    UNSPLASH_API: 'https://api.unsplash.com/photos/random'
  }
};

export default config;