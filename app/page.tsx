const offerings = [
  {
    title: "Personal Training",
    description:
      "1-on-1 coaching plans built around your goals, schedule, and current fitness level.",
  },
  {
    title: "Small Group Sessions",
    description:
      "Supportive group workouts focused on consistency, movement quality, and accountability.",
  },
  {
    title: "Nutrition Coaching",
    description:
      "Simple, sustainable meal strategies without crash diets or extreme restrictions.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$79/mo",
    details: "Weekly check-ins, training plan, and progress tracking.",
  },
  {
    name: "Momentum",
    price: "$149/mo",
    details: "Two coached sessions per week plus nutrition support.",
  },
  {
    name: "Performance",
    price: "$249/mo",
    details: "High-touch coaching with custom programming and weekly reviews.",
  },
];

const testimonials = [
  {
    quote:
      "I finally built a routine I can stick to. The sessions are challenging but realistic.",
    author: "S. Martin",
  },
  {
    quote:
      "I feel stronger, healthier, and much more confident than I did three months ago.",
    author: "J. Lopez",
  },
  {
    quote:
      "The coaching style is practical and encouraging. I actually enjoy working out now.",
    author: "D. Harper",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Roxy Fitness</p>
          <h1>Transform your strength, energy, and confidence.</h1>
          <p className="lead">
            Practical coaching for real schedules. Build momentum with workouts and nutrition
            habits that fit your life.
          </p>
          <a className="cta" href="#contact">
            Book a Free Intro Call
          </a>
        </div>
      </header>

      <main>
        <section className="section" id="services">
          <h2>Services</h2>
          <div className="grid three-up">
            {offerings.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt" id="plans">
          <h2>Membership Plans</h2>
          <div className="grid three-up">
            {plans.map((plan) => (
              <article className="card" key={plan.name}>
                <p className="plan-name">{plan.name}</p>
                <p className="plan-price">{plan.price}</p>
                <p>{plan.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="testimonials">
          <h2>Client Results</h2>
          <div className="grid three-up">
            {testimonials.map((item) => (
              <blockquote className="card quote" key={item.author}>
                <p>"{item.quote}"</p>
                <footer>- {item.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section alt" id="contact">
          <h2>Contact</h2>
          <p className="contact-copy">
            Ready to start? Email <a href="mailto:bradmatera@gmail.com">bradmatera@gmail.com</a>
            , and we will set up your first consult.
          </p>
        </section>
      </main>
    </>
  );
}
