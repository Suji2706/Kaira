import EventCard from "./EventCard.jsx";

const tabs = ["All", "Cultural"];

function EventsSection({ events, filter, setFilter, onRegister }) {
  const countFor = (tab) =>
    tab === "All" ? events.length : events.filter((e) => e.category === tab).length;
  const shown = filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <section id="events" className="block">
      <div className="container">
        <h2 className="block-title">Upcoming events</h2>
        <p className="block-sub">Choose an event and save your seat.</p>

        <div className="tabs">
          {tabs.map((t) => (
            <button key={t} className={`tab ${filter === t ? "on" : ""}`} onClick={() => setFilter(t)}>
              {t} <small>{countFor(t)}</small>
            </button>
          ))}
        </div>

        <div className="ev-grid">
          {shown.map((ev) => (
            <EventCard key={ev.id} event={ev} onRegister={onRegister} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
