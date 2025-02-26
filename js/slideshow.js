// Slideshow functionality for Roxy's Fitness website

// Define slideshow images (use local images for better reliability)
const slideshowImages = [
    'img/slide-1.jpg',
    'img/slide-2.jpg',
    'img/slide-3.jpg',
    'img/slide-4.jpg',
    'img/slide-5.jpg'
];

// Track current slide
let currentSlide = 0;

/**
 * Initialize the slideshow component
 */
export function initializeSlideshow() {
    const slideshow = document.getElementById('slideshow');
    if (!slideshow) {
        console.warn('Slideshow element not found');
        return;
    }
    
    // Set initial background
    slideshow.style.backgroundImage = `url(${slideshowImages[0]})`;
    slideshow.style.backgroundSize = 'cover';
    slideshow.style.backgroundPosition = 'center';
    slideshow.style.transition = 'background-image 1s ease-in-out';
    
    // Create navigation controls
    createSlideshowControls(slideshow);
    
    // Start automatic slideshow
    setInterval(nextSlide, 5000);
}

/**
 * Create slideshow navigation controls
 * @param {HTMLElement} slideshow - The slideshow container element
 */
function createSlideshowControls(slideshow) {
    // Create controls container
    const controls = document.createElement('div');
    controls.className = 'absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-10';
    
    // Create navigation arrows
    const prevButton = document.createElement('button');
    prevButton.className = 'absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.addEventListener('click', prevSlide);
    
    const nextButton = document.createElement('button');
    nextButton.className = 'absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.addEventListener('click', nextSlide);
    
    // Add controls to slideshow
    slideshow.appendChild(prevButton);
    slideshow.appendChild(nextButton);
    slideshow.appendChild(controls);
}

/**
 * Go to the next slide
 */
function nextSlide() {
    const slideshow = document.getElementById('slideshow');
    if (!slideshow) return;
    
    currentSlide = (currentSlide + 1) % slideshowImages.length;
    slideshow.style.backgroundImage = `url(${slideshowImages[currentSlide]})`;
    updateIndicators();
}

/**
 * Go to the previous slide
 */
function prevSlide() {
    const slideshow = document.getElementById('slideshow');
    if (!slideshow) return;
    
    currentSlide = (currentSlide - 1 + slideshowImages.length) % slideshowImages.length;
    slideshow.style.backgroundImage = `url(${slideshowImages[currentSlide]})`;
    updateIndicators();
}

/**
 * Go to a specific slide
 * @param {number} index - The index of the slide to display
 */
function goToSlide(index) {
    if (index < 0 || index >= slideshowImages.length) return;
    
    const slideshow = document.getElementById('slideshow');
    if (!slideshow) return;
    
    currentSlide = index;
    slideshow.style.backgroundImage = `url(${slideshowImages[currentSlide]})`;
    updateIndicators();
}

/**
 * Update slideshow indicators to reflect the current slide
 */
function updateIndicators() {
    const indicators = document.querySelectorAll('.slideshow-indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('bg-opacity-100');
        } else {
            indicator.classList.remove('bg-opacity-100');
        }
    });
}