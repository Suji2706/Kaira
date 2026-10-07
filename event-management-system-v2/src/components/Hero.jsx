import { formatDate } from "../data/events.js";

function Hero({ nextEvent, onRegister }) {
  const date = formatDate(nextEvent.date);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <h1>
            Discover. <span className="grad">Participate.</span> Celebrate.
          </h1>
          <p className="hero-text">
            Explore creative campus events and register for the ones you love.
          </p>
          <div className="hero-btns">
            <a href="#events" className="btn btn-glow btn-big">Explore Events</a>
            <button className="btn btn-outline btn-big" onClick={() => onRegister()}>Register Now</button>
          </div>
        </div>

        <aside className="next-card">
          <p className="next-label">Next up</p>
          <h3>{nextEvent.name}</h3>
          <p className="next-meta">{date.full} at {nextEvent.time}</p>
          <p className="next-meta">{nextEvent.venue}</p>
          <button className="btn btn-glow" onClick={() => onRegister(nextEvent)}>
            Register for this event
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
