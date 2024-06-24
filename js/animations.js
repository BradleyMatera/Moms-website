// animations.js
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

export const initCustomCursor = () => {
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', throttle((e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }, 16)); // Throttle to approximately 60fps
};

// Other animation functions...
export const initParallax = () => {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        const bg = section.getAttribute('data-bg');
        if (bg) {
            section.style.backgroundImage = `url(${bg})`;
        }
    });
};

export const initTextAnimations = () => {
    const textElements = document.querySelectorAll('.text-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    textElements.forEach(el => observer.observe(el));
};

export const init3DCards = () => {
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.card-3d-inner').style.transform = 'rotateY(180deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-3d-inner').style.transform = 'rotateY(0deg)';
        });
    });
};

export const initSvgAnimations = () => {
    const svgs = document.querySelectorAll('.svg-animate');
    svgs.forEach(svg => {
        const paths = svg.querySelectorAll('path');
        paths.forEach(path => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
        });
    });
};

export const initMicroInteractions = () => {
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
};

// Initialize the event handlers immediately
initCustomCursor();
initParallax();
initTextAnimations();
init3DCards();
initSvgAnimations();
initMicroInteractions();
