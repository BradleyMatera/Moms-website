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
    setupGoogleAuth
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
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMainContent());
    content.appendChild(createFooter());

    initializeSlideshow();

    displayPhotos()
        .then(() => fetchVideos())
        .then(() => fetchGifs())
        .then(() => {
            displayRoutines();
            displayNutritionTips();

            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const sectionId = event.target.getAttribute('href').substring(1);
                    toggleSectionVisibility(sectionId);
                });
            });

            const startButton = document.querySelector('.cta-button[href="#contact"]');
            if (startButton) {
                startButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                });
            }

            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);

            gsap.registerPlugin(ScrollTrigger);
            initScrollAnimations();
        })
        .catch(error => console.error('Error loading content:', error));

    setupGoogleAuth();
});

const initScrollAnimations = () => {
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
};

// Initialize custom cursor
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Initialize text animations
const textElements = document.querySelectorAll('.text-animate');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

textElements.forEach(el => observer.observe(el));

// Initialize 3D card animations
const cards = document.querySelectorAll('.card-3d');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.card-3d-inner').style.transform = 'rotateY(180deg)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.card-3d-inner').style.transform = 'rotateY(0deg)';
    });
});

// Initialize SVG animations
const svgs = document.querySelectorAll('.svg-animate');
svgs.forEach(svg => {
    const paths = svg.querySelectorAll('path');
    paths.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
    });
});

// Initialize micro-interactions
const hoverElements = document.querySelectorAll('.hover-lift');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transform = 'translateY(-3px)';
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translateY(0)';
    });
});

const pulseElements = document.querySelectorAll('.pulse');
pulseElements.forEach(el => {
    setInterval(() => {
        el.classList.add('animate-pulse');
        setTimeout(() => el.classList.remove('animate-pulse'), 2000);
    }, 4000);
});
