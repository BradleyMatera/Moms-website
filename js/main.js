import { 
    createHeader, 
    createFooter, 
    createMainContent, 
    displayPhotos, 
    displayRoutines, 
    fetchVideos,
    fetchGifs,
    displayNutritionTips,
    toggleSectionVisibility,
    initializeAOS
} from './utilities.js';
import { initializeSlideshow } from './slideshow.js';
import { 
    initCustomCursor, 
    initParallax, 
    initTextAnimations, 
    init3DCards,
    initSvgAnimations,
    initMicroInteractions
} from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations and effects
    initCustomCursor();
    initParallax();
    initTextAnimations();
    init3DCards();
    initSvgAnimations();
    initMicroInteractions();
    initializeAOS();

    // Create main structure
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMainContent());
    content.appendChild(createFooter());

    // Initialize slideshow
    initializeSlideshow();

    // Populate content
    displayPhotos()
        .then(() => fetchVideos())
        .then(() => fetchGifs())
        .then(() => {
            displayRoutines();
            displayNutritionTips();

            // Add event listeners for navigation
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const sectionId = event.target.getAttribute('href').substring(1);
                    toggleSectionVisibility(sectionId);
                });
            });

            // Remove loading screen
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);

            // Initialize GSAP ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);
            initScrollAnimations();
        })
        .catch(error => console.error('Error loading content:', error));
});

function initScrollAnimations() {
    gsap.utils.toArray('.parallax-section').forEach(section => {
        gsap.to(section, {
            backgroundPosition: `50% ${innerHeight / 2}px`,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    gsap.utils.toArray('.fade-in').forEach(elem => {
        gsap.from(elem, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: elem,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
}
