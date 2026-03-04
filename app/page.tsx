const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const galleryImages = [
  "outdoor-workout.jpg",
  "spin-bike.jpg",
  "therapy-pool.jpg",
  "training-session.jpg",
];

const routines = [
  {
    title: "Morning Yoga",
    description:
      "Start your day with a refreshing yoga routine to energize your body and mind.",
  },
  {
    title: "HIIT Workout",
    description:
      "High-intensity interval training for maximum calorie burn and improved cardiovascular health.",
  },
  {
    title: "Strength Training",
    description:
      "Build muscle and increase your metabolism with our comprehensive strength training program.",
  },
  {
    title: "Cardio Blast",
    description:
      "Get your heart pumping with our high-energy cardio workout designed for all fitness levels.",
  },
  {
    title: "Flexibility and Balance",
    description:
      "Improve your flexibility and balance with this gentle yet effective routine.",
  },
  {
    title: "Core Crusher",
    description:
      "Strengthen your core with this targeted ab workout for a stronger, more stable you.",
  },
];

const videos = [
  {
    title: "30-Minute Full Body HIIT",
    description:
      "Burn calories and build strength with this high-intensity interval training routine.",
    image: "A_motivational_hero_image_for_a_fitness_website_fe.png",
  },
  {
    title: "Beginner Yoga Flow",
    description:
      "A gentle introduction to yoga that improves flexibility and reduces stress.",
    image: "A_high-quality_header_image_for_a_fitness_website_.png",
  },
  {
    title: "Core Strengthening",
    description:
      "Build a strong core with targeted exercises for abs, back, and obliques.",
    image: "A_dynamic_banner_image_for_a_fitness_website_showi.png",
  },
  {
    title: "Upper Body Workout",
    description:
      "Sculpt and strengthen your upper body with this effective routine.",
    image: "training-session.jpg",
  },
  {
    title: "Cardio Dance Party",
    description:
      "Have fun while burning calories with this energetic dance workout.",
    image: "spin-bike.jpg",
  },
  {
    title: "Recovery Stretching",
    description:
      "Improve flexibility and reduce muscle soreness with essential stretches.",
    image: "therapy-pool.jpg",
  },
];

const motivationItems = [
  "Push your limits",
  "Every step counts",
  "Stay consistent",
  "Believe in yourself",
  "Strength comes from within",
  "Never give up",
  "Progress, not perfection",
  "Challenge yourself daily",
];

const nutritionTips = [
  {
    title: "Stay Hydrated",
    content:
      "Drink at least 8 glasses of water daily to maintain proper hydration and support your body's functions.",
  },
  {
    title: "Eat Colorful Meals",
    content:
      "Include a variety of colorful fruits and vegetables to ensure a wide range of nutrients.",
  },
  {
    title: "Portion Control",
    content:
      "Use smaller plates and practice mindful eating to control portion sizes and avoid overeating.",
  },
  {
    title: "Protein with Every Meal",
    content:
      "Include a source of lean protein with each meal to support muscle growth and repair.",
  },
  {
    title: "Limit Processed Foods",
    content:
      "Focus on whole, unprocessed foods to maximize nutrient intake and minimize empty calories.",
  },
  {
    title: "Plan Your Meals",
    content:
      "Prepare meals in advance to ensure healthy options are always available.",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav">
          <a href="#hero" className="brand">
            Roxy&apos;s Fitness
          </a>
          <div className="nav-links">
            <a href="#overview">Overview</a>
            <a href="#routines">Routines</a>
            <a href="#videos">Videos</a>
            <a href="#motivation">Motivation</a>
            <a href="#nutrition">Nutrition</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section
        id="hero"
        className="hero legacy-hero"
        style={{
          backgroundImage: `url(${basePath}/img/A_motivational_hero_image_for_a_fitness_website_fe.png)`,
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Welcome to Roxy&apos;s Fitness</p>
          <h1>Transform Your Body, Transform Your Life</h1>
          <p className="lead">
            Your journey to a healthier you starts here.
          </p>
          <a className="cta" href="#contact">
            Start Today
          </a>
        </div>
      </section>

      <main>
        <section id="overview" className="section">
          <h2>Transform Your Life with Roxy&apos;s Fitness</h2>
          <p className="section-lead">Your journey to a healthier you starts here</p>
          <div className="grid four-up">
            {galleryImages.map((name) => (
              <article className="card media-card" key={name}>
                <img src={`${basePath}/img/${name}`} alt="Fitness gallery" />
              </article>
            ))}
          </div>
        </section>

        <section id="routines" className="section alt">
          <h2>Our Popular Routines</h2>
          <div className="grid three-up">
            {routines.map((routine) => (
              <article className="card" key={routine.title}>
                <h3>{routine.title}</h3>
                <p>{routine.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="videos" className="section">
          <h2>Workout Videos</h2>
          <div className="grid three-up">
            {videos.map((video) => (
              <article className="card media-card" key={video.title}>
                <img src={`${basePath}/img/${video.image}`} alt={video.title} />
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="motivation" className="section alt">
          <h2>Daily Motivation</h2>
          <div className="grid four-up">
            {motivationItems.map((item, idx) => (
              <article className="card motivation" key={item}>
                <img
                  src={`${basePath}/img/${galleryImages[idx % galleryImages.length]}`}
                  alt={item}
                />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="nutrition" className="section">
          <h2>Nutrition Tips</h2>
          <div className="grid three-up">
            {nutritionTips.map((tip) => (
              <article className="card" key={tip.title}>
                <h3>{tip.title}</h3>
                <p>{tip.content}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section alt">
          <h2>Contact Us</h2>
          <p className="section-lead">
            Ready to start? Send a message and we&apos;ll get back to you.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea rows={4} placeholder="Message" />
            <button type="button" className="cta">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <h3>Roxy&apos;s Fitness for All</h3>
          <p>Transforming lives through fitness since 2010</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#overview">Home</a></li>
            <li><a href="#routines">Routines</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
