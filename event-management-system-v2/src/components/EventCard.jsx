import { formatDate } from "../data/events.js";

function EventCard({ event, onRegister }) {
  const date = formatDate(event.date);

  return (
    <article className={`ev-card tone-${event.category.toLowerCase()}`}>
      <div className="ev-date">
        <strong>{date.day}</strong>
        <span>{date.month}</span>
      </div>

      <div className="ev-body">
        <span className="ev-cat">{event.category}</span>
        <h3>{event.name}</h3>
        <p>{event.description}</p>
        <p className="ev-info">🕒 {event.time}</p>
        <p className="ev-info">📍 {event.venue}</p>
      </div>

      <button className="btn btn-glow" onClick={() => onRegister(event)}>
        Register Now
      </button>
    </article>
  );
}

export default EventCard;
