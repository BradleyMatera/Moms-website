// Description: APIs configuration for Roxy's Fitness website
/**
 * APIs configuration for Roxy's Fitness website
 * 
 * IMPORTANT: This file is for local development only.
 * In production, API requests should be handled by a secure backend server.
 * NEVER expose API keys in client-side JavaScript in production!
 */

// Local data sources instead of API endpoints
export const LOCAL_RESOURCES = {
    // Gallery images (used instead of Unsplash API)
    GALLERY_IMAGES: [
        'img/gallery-1.jpg',
        'img/gallery-2.jpg',
        'img/gallery-3.jpg',
        'img/gallery-4.jpg'
    ],
    
    // Video content (used instead of YouTube API)
    VIDEOS: [
        {
            id: 'vid-001',
            title: '30-Minute Full Body HIIT',
            description: 'Burn calories and build strength with this high-intensity interval training routine.',
            thumbnail: 'img/video-hiit.jpg',
            url: '#'
        },
        {
            id: 'vid-002',
            title: 'Beginner Yoga Flow',
            description: 'A gentle introduction to yoga that improves flexibility and reduces stress.',
            thumbnail: 'img/video-yoga.jpg',
            url: '#'
        },
        {
            id: 'vid-003',
            title: 'Core Strengthening',
            description: 'Build a strong core with these targeted exercises for abs, back, and obliques.',
            thumbnail: 'img/video-core.jpg',
            url: '#'
        },
        {
            id: 'vid-004',
            title: 'Upper Body Workout',
            description: 'Sculpt and strengthen your upper body with this effective routine.',
            thumbnail: 'img/video-upper.jpg',
            url: '#'
        },
        {
            id: 'vid-005',
            title: 'Cardio Dance Party',
            description: 'Have fun while burning calories with this energetic dance workout.',
            thumbnail: 'img/video-dance.jpg',
            url: '#'
        },
        {
            id: 'vid-006',
            title: 'Recovery Stretching',
            description: 'Improve flexibility and reduce muscle soreness with these essential stretches.',
            thumbnail: 'img/video-stretch.jpg',
            url: '#'
        }
    ],
    
    // Motivation content (used instead of GIPHY API)
    MOTIVATION_CONTENT: [
        {
            id: 'mot-001',
            title: 'Push your limits',
            image: 'img/motivation-1.jpg'
        },
        {
            id: 'mot-002',
            title: 'Every step counts',
            image: 'img/motivation-2.jpg'
        },
        {
            id: 'mot-003',
            title: 'Stay consistent',
            image: 'img/motivation-3.jpg'
        },
        {
            id: 'mot-004',
            title: 'Believe in yourself',
            image: 'img/motivation-4.jpg'
        },
        {
            id: 'mot-005',
            title: 'Strength comes from within',
            image: 'img/motivation-5.jpg'
        },
        {
            id: 'mot-006',
            title: 'Never give up',
            image: 'img/motivation-6.jpg'
        },
        {
            id: 'mot-007',
            title: 'Progress, not perfection',
            image: 'img/motivation-7.jpg'
        },
        {
            id: 'mot-008',
            title: 'Challenge yourself daily',
            image: 'img/motivation-8.jpg'
        }
    ],
    
    // Slideshow images
    SLIDESHOW_IMAGES: [
        'img/slide-1.jpg',
        'img/slide-2.jpg',
        'img/slide-3.jpg',
        'img/slide-4.jpg',
        'img/slide-5.jpg'
    ]
};

/**
 * Mock API handler that simulates fetching from an API
 * but actually uses local data
 */
export const mockApi = {
    /**
     * Get gallery images
     * @param {number} count - Number of images to return
     * @returns {Promise} Promise resolving to an array of image objects
     */
    getGalleryImages: function(count = 4) {
        return new Promise((resolve) => {
            // Simulate network delay
            setTimeout(() => {
                const images = LOCAL_RESOURCES.GALLERY_IMAGES.slice(0, count).map((url, index) => ({
                    id: `img-${index + 1}`,
                    url: url,
                    alt: `Fitness Gallery Image ${index + 1}`
                }));
                resolve(images);
            }, 300);
        });
    },
    
    /**
     * Get workout videos
     * @param {number} count - Number of videos to return
     * @returns {Promise} Promise resolving to an array of video objects
     */
    getWorkoutVideos: function(count = 6) {
        return new Promise((resolve) => {
            // Simulate network delay
            setTimeout(() => {
                const videos = LOCAL_RESOURCES.VIDEOS.slice(0, count);
                resolve(videos);
            }, 500);
        });
    },
    
    /**
     * Get motivational content
     * @param {number} count - Number of items to return
     * @returns {Promise} Promise resolving to an array of motivation objects
     */
    getMotivationContent: function(count = 8) {
        return new Promise((resolve) => {
            // Simulate network delay
            setTimeout(() => {
                const content = LOCAL_RESOURCES.MOTIVATION_CONTENT.slice(0, count);
                resolve(content);
            }, 400);
        });
    },
    
    /**
     * Get slideshow images
     * @returns {Promise} Promise resolving to an array of image URLs
     */
    getSlideshowImages: function() {
        return new Promise((resolve) => {
            // Simulate network delay
            setTimeout(() => {
                resolve(LOCAL_RESOURCES.SLIDESHOW_IMAGES);
            }, 200);
        });
    }
};

/**
 * In a production environment, you would create server-side API endpoints
 * instead of exposing API keys in the client-side code. Below is how the
 * API configuration would look if using secure server-side endpoints.
 */
export const secureApi = {
    endpoints: {
        GALLERY: '/api/gallery',
        VIDEOS: '/api/videos',
        MOTIVATION: '/api/motivation',
        SLIDESHOW: '/api/slideshow',
        CONTACT: '/api/contact'
    },
    
    /**
     * Generic fetch function for API calls
     * @param {string} endpoint - API endpoint
     * @param {Object} options - Fetch options
     * @returns {Promise} Promise resolving to JSON data
     */
    fetch: async function(endpoint, options = {}) {
        try {
            const response = await fetch(endpoint, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            });
            
            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    },
    
    // API methods that would use the secure endpoints
    getGalleryImages: function(count = 4) {
        return this.fetch(`${this.endpoints.GALLERY}?count=${count}`);
    },
    
    getWorkoutVideos: function(count = 6) {
        return this.fetch(`${this.endpoints.VIDEOS}?count=${count}`);
    },
    
    getMotivationContent: function(count = 8) {
        return this.fetch(`${this.endpoints.MOTIVATION}?count=${count}`);
    },
    
    getSlideshowImages: function() {
        return this.fetch(this.endpoints.SLIDESHOW);
    },
    
    submitContactForm: function(formData) {
        return this.fetch(this.endpoints.CONTACT, {
            method: 'POST',
            body: JSON.stringify(formData)
        });
    }
};

// Export the mock API for development
// In production, you would export the secureApi instead
export default mockApi;