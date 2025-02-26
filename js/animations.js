// Animations module for Roxy's Fitness website

/**
 * Throttle function to limit execution frequency
 * @param {Function} func - The function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function} Throttled function
 */
const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

/**
 * Initialize all animations
 */
export function initAnimations() {
    initCustomCursor();
    initParallax();
    initTextAnimations();
    init3DCards();
    initSvgAnimations();
    initMicroInteractions();
}

/**
 * Initialize custom cursor
 */
export function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;
    
    document.addEventListener('mousemove', throttle((e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }, 16)); // Throttle to approximately 60fps
}

/**
 * Initialize parallax effects
 */
export function initParallax() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        const bg = section.getAttribute('data-bg');
        if (bg) {
            section.style.backgroundImage = `url(${bg})`;
        }
    });
    
    // Set up scroll event for parallax effect
    window.addEventListener('scroll', throttle(() => {
        parallaxSections.forEach(section => {
            const scrolled = window.scrollY;
            const rate = section.getAttribute('data-parallax-rate') || 0.3;
            
            // Only apply parallax if section is in viewport
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -((scrolled * rate) % window.innerHeight);
                section.style.backgroundPosition = `center ${yPos}px`;
            }
        });
    }, 20));
}

/**
 * Initialize text animations
 */
export function initTextAnimations() {
    const textElements = document.querySelectorAll('.text-animate');
    
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once the animation is triggered, we don't need to observe anymore
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    textElements.forEach(el => observer.observe(el));
}

/**
 * Initialize 3D card animations
 */
export function init3DCards() {
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        // Only set up listeners if the inner element exists
        const inner = card.querySelector('.card-3d-inner');
        if (!inner) return;
        
        card.addEventListener('mouseenter', () => {
            inner.style.transform = 'rotateY(180deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            inner.style.transform = 'rotateY(0deg)';
        });
        
        // Add touch support for mobile devices
        card.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const currentTransform = inner.style.transform;
            inner.style.transform = currentTransform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
    });
}

/**
 * Initialize SVG animations
 */
export function initSvgAnimations() {
    const svgs = document.querySelectorAll('.svg-animate');
    svgs.forEach(svg => {
        const paths = svg.querySelectorAll('path');
        paths.forEach(path => {
            // Only calculate length for paths that don't already have dash array set
            if (!path.style.strokeDasharray) {
                const length = path.getTotalLength();
                path.style.strokeDasharray = length;
                path.style.strokeDashoffset = length;
            }
        });
    });
    
    // Set up intersection observer for SVG animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    svgs.forEach(svg => observer.observe(svg));
}

/**
 * Initialize micro-interactions
 */
export function initMicroInteractions() {
    // Hover lift effect
    const hoverElements = document.querySelectorAll('.hover-lift');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'translateY(-3px)';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translateY(0)';
        });
    });

    // Pulse animation
    const pulseElements = document.querySelectorAll('.pulse');
    pulseElements.forEach(el => {
        // Set random intervals for more natural pulsing
        const interval = 3000 + Math.random() * 2000;
        
        setInterval(() => {
            el.classList.add('animate-pulse');
            setTimeout(() => el.classList.remove('animate-pulse'), 2000);
        }, interval);
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('pulse-once');
        });
        
        button.addEventListener('animationend', () => {
            button.classList.remove('pulse-once');
        });
    });
}

// Initialize animations when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initAnimations);