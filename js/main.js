// Main JavaScript file for Roxy's Fitness website

// Initialize the website when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create core site elements
    createHeader();
    createMainContent();
    createFooter();
    
    // Initialize features
    initializeSlideshow();
    initAnimations();
    
    // Load content sections
    displayPhotos()
        .then(() => loadWorkoutVideos())
        .then(() => loadMotivationalContent())
        .then(() => {
            displayRoutines();
            displayNutritionTips();
            
            // Setup navigation
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const sectionId = event.target.getAttribute('href').substring(1);
                    toggleSectionVisibility(sectionId);
                });
            });
            
            // Setup CTA buttons
            const startButton = document.querySelector('.cta-button[href="#contact"]');
            if (startButton) {
                startButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                });
            }
            
            // Remove loading screen
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
            
            // Initialize scroll animations
            initScrollAnimations();
        })
        .catch(error => console.error('Error loading content:', error));
});

// Create header element
function createHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;
    
    header.className = 'py-4 px-6 text-white glass fixed w-full z-50';
    header.innerHTML = `
        <nav class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">Roxy's Fitness</h1>
            <ul class="hidden md:flex space-x-4">
                <li><a href="#overview" class="hover-lift">Overview</a></li>
                <li><a href="#routines" class="hover-lift">Routines</a></li>
                <li><a href="#videos" class="hover-lift">Videos</a></li>
                <li><a href="#motivation" class="hover-lift">Motivation</a></li>
                <li><a href="#nutrition" class="hover-lift">Nutrition</a></li>
                <li><a href="#contact" class="hover-lift">Contact</a></li>
            </ul>
            <div class="md:hidden">
                <button id="mobile-menu-button" class="text-white">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </nav>
    `;
    
    // Add mobile menu toggle functionality
    const menuButton = document.getElementById('mobile-menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Handle scroll effects on header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Toggle mobile menu visibility
function toggleMobileMenu() {
    let mobileMenu = document.querySelector('.mobile-nav');
    
    if (!mobileMenu) {
        // Create mobile menu if it doesn't exist
        mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-nav';
        mobileMenu.innerHTML = `
            <div class="mobile-nav-close">&times;</div>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#routines">Routines</a></li>
                <li><a href="#videos">Videos</a></li>
                <li><a href="#motivation">Motivation</a></li>
                <li><a href="#nutrition">Nutrition</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        `;
        document.body.appendChild(mobileMenu);
        
        // Add close functionality
        const closeButton = mobileMenu.querySelector('.mobile-nav-close');
        closeButton.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
        
        // Add navigation functionality
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.style.display = 'none';
            });
        });
    }
    
    // Toggle visibility
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Create main content sections
function createMainContent() {
    const main = document.querySelector('main');
    if (!main) return;
    
    main.className = "container mx-auto px-4";
    main.innerHTML = `
        <section id="overview" class="py-20 mb-20">
            <div class="text-center">
                <h2 class="text-4xl font-bold mb-4 text-animate">Transform Your Life with Roxy's Fitness</h2>
                <p class="text-xl mb-8 text-animate">Your journey to a healthier you starts here</p>
                <a href="#contact" class="cta-button bg-green-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-green-600 transition duration-300">Start Your Transformation</a>
            </div>
            <div id="photos" class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"></div>
        </section>
        <section id="routines" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center text-animate">Our Popular Routines</h2>
            <div id="routinesContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        </section>
        <section id="videos" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center text-animate">Workout Videos</h2>
            <div id="videosContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        </section>
        <section id="motivation" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center text-animate">Daily Motivation</h2>
            <div id="gifsContainer" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
        </section>
        <section id="nutrition" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center text-animate">Nutrition Tips</h2>
            <div id="nutritionContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        </section>
        <section id="contact" class="mb-20">
            <h2 class="text-3xl font-bold mb-10 text-center text-animate">Contact Us</h2>
            <form id="contact-form" class="max-w-lg mx-auto glass p-8 rounded-lg">
                <input type="text" placeholder="Name" class="w-full p-3 mb-4 rounded bg-white bg-opacity-20" required>
                <input type="email" placeholder="Email" class="w-full p-3 mb-4 rounded bg-white bg-opacity-20" required>
                <textarea placeholder="Message" class="w-full p-3 mb-4 rounded bg-white bg-opacity-20" rows="4" required></textarea>
                <button type="submit" class="cta-button w-full bg-green-500 text-white font-bold py-3 px-6 rounded hover:bg-green-600 transition duration-300">Send Message</button>
            </form>
        </section>
    `;
    
    // Add contact form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

// Handle contact form submission
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Show success message (in a real site, this would send data to a server)
    this.innerHTML = `
        <div class="text-center py-8">
            <i class="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
            <h3 class="text-2xl font-bold mb-2">Thank You!</h3>
            <p class="text-gray-200">Your message has been sent successfully. We'll contact you soon!</p>
        </div>
    `;
    
    // In a real implementation, you would send data to a server here
    console.log('Form submitted:', { name, email, message });
}

// Create footer element
function createFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;
    
    footer.className = 'text-white p-8 glass mt-20';
    footer.innerHTML = `
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-2xl font-bold mb-4">Roxy's Fitness for All</h3>
                <p>Transforming lives through fitness since 2010</p>
            </div>
            <div>
                <h3 class="text-2xl font-bold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="#overview" class="hover-lift">Home</a></li>
                    <li><a href="#routines" class="hover-lift">Routines</a></li>
                    <li><a href="#videos" class="hover-lift">Videos</a></li>
                    <li><a href="#contact" class="hover-lift">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-2xl font-bold mb-4">Connect With Us</h3>
                <div class="flex space-x-4">
                    <a href="https://www.facebook.com/" target="_blank" class="hover-lift text-2xl"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/" target="_blank" class="hover-lift text-2xl"><i class="fab fa-twitter"></i></a>
                    <a href="https://instagram.com/" target="_blank" class="hover-lift text-2xl"><i class="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com/" target="_blank" class="hover-lift text-2xl"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div class="mt-8 text-center">
            <p>&copy; 2025 Roxy's Fitness for All. All rights reserved.</p>
        </div>
    `;
}

// Display photos in the gallery section
function displayPhotos() {
    const photosContainer = document.getElementById('photos');
    if (!photosContainer) {
        return Promise.reject('Photos container not found');
    }
    
    // Use local images instead of API calls
    const galleryImages = [
        'img/gallery-1.jpg',
        'img/gallery-2.jpg',
        'img/gallery-3.jpg',
        'img/gallery-4.jpg'
    ];
    
    // Clear existing content
    photosContainer.innerHTML = '';
    
    // Add images to gallery
    galleryImages.forEach(imagePath => {
        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.alt = 'Fitness Gallery Image';
        imgElement.classList.add('w-full', 'h-64', 'object-cover', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300');
        photosContainer.appendChild(imgElement);
    });
    
    return Promise.resolve();
}

// Display fitness routines
function displayRoutines() {
    const routinesContainer = document.getElementById('routinesContainer');
    if (!routinesContainer) return;
    
    const routines = [
        { 
            title: 'Morning Yoga', 
            description: 'Start your day with a refreshing yoga routine to energize your body and mind.', 
            icon: 'fa-solid fa-sun' 
        },
        { 
            title: 'HIIT Workout', 
            description: 'High-intensity interval training for maximum calorie burn and improved cardiovascular health.', 
            icon: 'fa-solid fa-fire' 
        },
        { 
            title: 'Strength Training', 
            description: 'Build muscle and increase your metabolism with our comprehensive strength training program.', 
            icon: 'fa-solid fa-dumbbell' 
        },
        { 
            title: 'Cardio Blast', 
            description: 'Get your heart pumping with our high-energy cardio workout designed for all fitness levels.', 
            icon: 'fa-solid fa-heart-pulse' 
        },
        { 
            title: 'Flexibility & Balance', 
            description: 'Improve your flexibility and balance with this gentle yet effective routine.', 
            icon: 'fa-solid fa-person-skating' 
        },
        { 
            title: 'Core Crusher', 
            description: 'Strengthen your core with this targeted ab workout for a stronger, more stable you.', 
            icon: 'fa-solid fa-apple-whole' 
        }
    ];

    routines.forEach(routine => {
        const routineElement = document.createElement('div');
        routineElement.className = 'routine card-3d bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300';
        routineElement.innerHTML = `
            <div class="card-3d-inner">
                <div class="card-3d-front flex flex-col items-center justify-center p-4">
                    <i class="${routine.icon} text-4xl text-green-500 mb-2"></i>
                    <h3 class="text-xl font-bold mb-2">${routine.title}</h3>
                </div>
                <div class="card-3d-back flex items-center justify-center p-4">
                    <p class="text-sm">${routine.description}</p>
                </div>
            </div>
        `;
        routinesContainer.appendChild(routineElement);
    });
}

// Load workout videos
function loadWorkoutVideos() {
    const videosContainer = document.getElementById('videosContainer');
    if (!videosContainer) {
        return Promise.resolve();
    }
    
    // Use local video data instead of API
    const videos = [
        {
            title: '30-Minute Full Body HIIT',
            description: 'Burn calories and build strength with this high-intensity interval training routine.',
            thumbnailUrl: 'img/video-hiit.jpg',
            videoUrl: '#'
        },
        {
            title: 'Beginner Yoga Flow',
            description: 'A gentle introduction to yoga that improves flexibility and reduces stress.',
            thumbnailUrl: 'img/video-yoga.jpg',
            videoUrl: '#'
        },
        {
            title: 'Core Strengthening',
            description: 'Build a strong core with these targeted exercises for abs, back, and obliques.',
            thumbnailUrl: 'img/video-core.jpg',
            videoUrl: '#'
        },
        {
            title: 'Upper Body Workout',
            description: 'Sculpt and strengthen your upper body with this effective routine.',
            thumbnailUrl: 'img/video-upper.jpg',
            videoUrl: '#'
        },
        {
            title: 'Cardio Dance Party',
            description: 'Have fun while burning calories with this energetic dance workout.',
            thumbnailUrl: 'img/video-dance.jpg',
            videoUrl: '#'
        },
        {
            title: 'Recovery Stretching',
            description: 'Improve flexibility and reduce muscle soreness with these essential stretches.',
            thumbnailUrl: 'img/video-stretch.jpg',
            videoUrl: '#'
        }
    ];
    
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video', 'bg-white', 'p-4', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300', 'hover-lift');
        videoElement.innerHTML = `
            <div class="relative">
                <img src="${video.thumbnailUrl}" alt="${video.title}" class="w-full h-48 object-cover rounded-lg mb-4">
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-16 h-16 bg-green-500 bg-opacity-80 rounded-full flex items-center justify-center">
                        <i class="fas fa-play text-white text-xl"></i>
                    </div>
                </div>
            </div>
            <h3 class="font-bold text-xl mb-2">${video.title}</h3>
            <p class="text-gray-600 mb-4">${video.description}</p>
            <a href="${video.videoUrl}" class="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Watch Now</a>
        `;
        videosContainer.appendChild(videoElement);
    });
    
    return Promise.resolve();
}

// Load motivational content
function loadMotivationalContent() {
    const gifsContainer = document.getElementById('gifsContainer');
    if (!gifsContainer) {
        return Promise.resolve();
    }
    
    // Use local motivation images instead of API
    const motivationItems = [
        {
            title: 'Push your limits',
            image: 'img/motivation-1.jpg'
        },
        {
            title: 'Every step counts',
            image: 'img/motivation-2.jpg'
        },
        {
            title: 'Stay consistent',
            image: 'img/motivation-3.jpg'
        },
        {
            title: 'Believe in yourself',
            image: 'img/motivation-4.jpg'
        },
        {
            title: 'Strength comes from within',
            image: 'img/motivation-5.jpg'
        },
        {
            title: 'Never give up',
            image: 'img/motivation-6.jpg'
        },
        {
            title: 'Progress, not perfection',
            image: 'img/motivation-7.jpg'
        },
        {
            title: 'Challenge yourself daily',
            image: 'img/motivation-8.jpg'
        }
    ];
    
    motivationItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'motivation-item bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover-lift';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover rounded-lg">
            <p class="text-sm font-medium text-center mt-2">${item.title}</p>
        `;
        gifsContainer.appendChild(itemElement);
    });
    
    return Promise.resolve();
}

// Display nutrition tips
function displayNutritionTips() {
    const nutritionContainer = document.getElementById('nutritionContainer');
    if (!nutritionContainer) return;
    
    const tips = [
        { 
            title: 'Stay Hydrated', 
            content: 'Drink at least 8 glasses of water daily to maintain proper hydration and support your body\'s functions.', 
            icon: 'fa-solid fa-glass-water' 
        },
        { 
            title: 'Eat Colorful Meals', 
            content: 'Include a variety of colorful fruits and vegetables in your diet to ensure you\'re getting a wide range of nutrients.', 
            icon: 'fa-solid fa-carrot' 
        },
        { 
            title: 'Portion Control', 
            content: 'Use smaller plates and practice mindful eating to control portion sizes and avoid overeating.', 
            icon: 'fa-solid fa-utensils' 
        },
        { 
            title: 'Protein with Every Meal', 
            content: 'Include a source of lean protein with each meal to support muscle growth and repair.', 
            icon: 'fa-solid fa-egg' 
        },
        { 
            title: 'Limit Processed Foods', 
            content: 'Focus on whole, unprocessed foods to maximize nutrient intake and minimize empty calories.', 
            icon: 'fa-solid fa-ban' 
        },
        { 
            title: 'Plan Your Meals', 
            content: 'Prepare meals in advance to ensure you always have healthy options available and avoid impulsive eating.', 
            icon: 'fa-solid fa-calendar-days' 
        }
    ];
    
    tips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.classList.add('tip', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300', 'hover-lift');
        tipElement.innerHTML = `
            <i class="${tip.icon} text-4xl text-green-500 mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${tip.title}</h3>
            <p>${tip.content}</p>
        `;
        nutritionContainer.appendChild(tipElement);
    });
}

// Control section visibility
function toggleSectionVisibility(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    
    // Scroll to section
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize slideshow
function initializeSlideshow() {
    const slideshow = document.getElementById('slideshow');
    if (!slideshow) return;
    
    // Define slideshow images
    const slideshowImages = [
        'img/slide-1.jpg',
        'img/slide-2.jpg',
        'img/slide-3.jpg',
        'img/slide-4.jpg',
        'img/slide-5.jpg'
    ];
    
    // Set initial background
    slideshow.style.backgroundImage = `url(${slideshowImages[0]})`;
    slideshow.style.backgroundSize = 'cover';
    slideshow.style.backgroundPosition = 'center';
    slideshow.style.transition = 'background-image 1s ease-in-out';
    
    // Track current slide
    let currentSlide = 0;
    
    // Change slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slideshowImages.length;
        slideshow.style.backgroundImage = `url(${slideshowImages[currentSlide]})`;
    }, 5000);
}

// Initialize animations
function initAnimations() {
    // Custom cursor
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
    }
    
    // Text animations
    const textElements = document.querySelectorAll('.text-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    textElements.forEach(el => observer.observe(el));
    
    // 3D card animations
    const cards = document.querySelectorAll('.card-3d');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const inner = card.querySelector('.card-3d-inner');
            if (inner) inner.style.transform = 'rotateY(180deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            const inner = card.querySelector('.card-3d-inner');
            if (inner) inner.style.transform = 'rotateY(0deg)';
        });
    });
    
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
}

// Initialize scroll animations
function initScrollAnimations() {
    if (typeof gsap !== 'undefined' && gsap.utils && gsap.utils.toArray) {
        // Initialize GSAP animations
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
    } else {
        console.warn('GSAP not loaded. Scroll animations disabled.');
    }
}