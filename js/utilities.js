import { API_KEYS } from './apis.js';

export const createHeader = () => {
    const header = document.createElement('header');
    header.className = 'py-4 px-6 text-white glass fixed w-full z-50';
    header.innerHTML = `
        <nav class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">Roxy's Fitness</h1>
            <ul class="flex space-x-4">
                <li><a href="#overview" class="hover-lift">Overview</a></li>
                <li><a href="#routines" class="hover-lift">Routines</a></li>
                <li><a href="#videos" class="hover-lift">Videos</a></li>
                <li><a href="#motivation" class="hover-lift">Motivation</a></li>
                <li><a href="#nutrition" class="hover-lift">Nutrition</a></li>
                <li><a href="#contact" class="hover-lift">Contact</a></li>
            </ul>
        </nav>
    `;
    return header;
};

export const createMainContent = () => {
    const main = document.createElement('main');
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
            <form class="max-w-lg mx-auto glass p-8 rounded-lg">
                <input type="text" placeholder="Name" class="w-full p-3 mb-4 rounded bg-white bg-opacity-20">
                <input type="email" placeholder="Email" class="w-full p-3 mb-4 rounded bg-white bg-opacity-20">
                <textarea placeholder="Message" class="w-full p-3 mb-4 rounded bg-white bg-opacity-20" rows="4"></textarea>
                <button type="submit" class="cta-button w-full bg-green-500 text-white font-bold py-3 px-6 rounded hover:bg-green-600 transition duration-300">Send Message</button>
            </form>
        </section>
    `;
    return main;
};

export const createFooter = () => {
    const footer = document.createElement('footer');
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
                    <a href="https://www.facebook.com/keepmovnforward" target="_blank" class="hover-lift text-2xl"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" class="hover-lift text-2xl"><i class="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" class="hover-lift text-2xl"><i class="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" class="hover-lift text-2xl"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div class="mt-8 text-center">
            <p>&copy; 2024 Roxy's Fitness for All. All rights reserved.</p>
        </div>
    `;
    return footer;
};

export const displayPhotos = () => {
    let photosContainer = document.getElementById('photos');
    if (!photosContainer) {
        photosContainer = document.createElement('div');
        photosContainer.id = 'photos';
        photosContainer.className = 'grid grid-cols-2 md:grid-cols-4 gap-4 mt-4';
        const overviewSection = document.getElementById('overview');
        if (overviewSection) {
            overviewSection.appendChild(photosContainer);
        } else {
            console.error('Overview section not found');
            return Promise.reject('Overview section not found');
        }
    }

    return fetch(`https://api.unsplash.com/photos/random?count=4&query=fitness&client_id=${API_KEYS.UNSPLASH_ACCESS_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(photos => {
            photosContainer.innerHTML = ''; // Clear existing photos
            photos.forEach(photo => {
                const imgElement = document.createElement('img');
                imgElement.src = photo.urls.small;
                imgElement.alt = photo.alt_description;
                imgElement.classList.add('w-full', 'h-64', 'object-cover', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300');
                photosContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Error fetching photos:', error);
            photosContainer.innerHTML = '<p>Failed to load photos. Please try again later.</p>';
        });
};

export const displayRoutines = () => {
    const routinesContainer = document.getElementById('routinesContainer');
    const routines = [
        { title: 'Morning Yoga', description: 'Start your day with a refreshing yoga routine to energize your body and mind.', icon: 'fa-solid fa-sun' },
        { title: 'HIIT Workout', description: 'High-intensity interval training for maximum calorie burn and improved cardiovascular health.', icon: 'fa-solid fa-fire' },
        { title: 'Strength Training', description: 'Build muscle and increase your metabolism with our comprehensive strength training program.', icon: 'fa-solid fa-dumbbell' },
        { title: 'Cardio Blast', description: 'Get your heart pumping with our high-energy cardio workout designed for all fitness levels.', icon: 'fa-solid fa-heart-pulse' },
        { title: 'Flexibility & Balance', description: 'Improve your flexibility and balance with this gentle yet effective routine.', icon: 'fa-solid fa-person-skating' },
        { title: 'Core Crusher', description: 'Strengthen your core with this targeted ab workout for a stronger, more stable you.', icon: 'fa-solid fa-apple-whole' }
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
};


export const fetchVideos = () => {
    const videosContainer = document.getElementById('videosContainer');
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=fitness%20workout&type=video&key=${API_KEYS.GOOGLE_CLOUD_API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.items) {
                data.items.forEach(video => {
                    const videoElement = document.createElement('div');
                    videoElement.classList.add('video', 'bg-white', 'p-4', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300');
                    videoElement.innerHTML = `
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}" class="w-full h-48 object-cover rounded-lg mb-4">
                        <h3 class="font-bold text-xl mb-2">${video.snippet.title}</h3>
                        <p class="text-sm text-gray-600 mb-4">${video.snippet.description}</p>
                        <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" class="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300">Watch Video</a>
                    `;
                    videosContainer.appendChild(videoElement);
                });
            }
        })
        .catch(error => console.error('Error fetching videos:', error));
};



export const fetchGifs = () => {
    const gifsContainer = document.getElementById('gifsContainer');
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEYS.GIPHY_API_KEY}&q=fitness%20motivation&limit=8`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.data.forEach(gif => {
                const gifElement = document.createElement('div');
                gifElement.classList.add('gif', 'bg-white', 'p-2', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300');
                gifElement.innerHTML = `
                    <img src="${gif.images.fixed_height.url}" alt="${gif.title}" class="w-full h-48 object-cover rounded-lg">
                    <p class="text-sm text-center mt-2">${gif.title}</p>
                `;
                gifsContainer.appendChild(gifElement);
            });
        })
        .catch(error => console.error('Error fetching GIFs:', error));
};

export const displayNutritionTips = () => {
    const nutritionContainer = document.getElementById('nutritionContainer');
    const tips = [
        { title: 'Stay Hydrated', content: 'Drink at least 8 glasses of water daily to maintain proper hydration and support your body\'s functions.', icon: 'fa-solid fa-glass-water' },
        { title: 'Eat Colorful Meals', content: 'Include a variety of colorful fruits and vegetables in your diet to ensure you\'re getting a wide range of nutrients.', icon: 'fa-solid fa-carrot' },
        { title: 'Portion Control', content: 'Use smaller plates and practice mindful eating to control portion sizes and avoid overeating.', icon: 'fa-solid fa-utensils' },
        { title: 'Protein with Every Meal', content: 'Include a source of lean protein with each meal to support muscle growth and repair.', icon: 'fa-solid fa-egg' },
        { title: 'Limit Processed Foods', content: 'Focus on whole, unprocessed foods to maximize nutrient intake and minimize empty calories.', icon: 'fa-solid fa-ban' },
        { title: 'Plan Your Meals', content: 'Prepare meals in advance to ensure you always have healthy options available and avoid impulsive eating.', icon: 'fa-solid fa-calendar-days' }
    ];
    tips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.classList.add('tip', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition', 'duration-300');
        tipElement.innerHTML = `
            <i class="${tip.icon} text-4xl text-green-500 mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${tip.title}</h3>
            <p>${tip.content}</p>
        `;
        nutritionContainer.appendChild(tipElement);
    });
};

export const toggleSectionVisibility = (sectionId) => {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            section.classList.add('hidden');
        }
    });
};

export const initializeAOS = () => {
    AOS.init({
        duration: 1000,
        once: true,
        mirror: true,
    });
};
