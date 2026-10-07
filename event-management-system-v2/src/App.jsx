import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CategoryCard from "./components/CategoryCard.jsx";
import EventsSection from "./components/EventsSection.jsx";
import RegistrationModal from "./components/RegistrationModal.jsx";
import Footer from "./components/Footer.jsx";
import { categories, events } from "./data/events.js";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [chosenEvent, setChosenEvent] = useState(null);
  const [filter, setFilter] = useState("All");
  const [notice, setNotice] = useState("");

  const openDrawer = (event = null) => {
    setChosenEvent(event);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setChosenEvent(null);
  };

  const onRegistered = () => {
    closeDrawer();
    setNotice("Registration successful!");
  };

  const showCategory = (name) => {
    setFilter(name);
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 4000);
    return () => clearTimeout(t);
  }, [notice]);

  const countIn = (name) => events.filter((e) => e.category === name).length;

  return (
    <>
      <Navbar onRegister={() => openDrawer()} />
      <main>
        <Hero nextEvent={events[0]} onRegister={openDrawer} />

        <section id="categories" className="block">
          <div className="container">
            <h2 className="block-title">Pick your arena</h2>
            <p className="block-sub">One stage, plenty of ways to shine.</p>
            <div className="cat-grid">
              {categories.map((c) => (
                <CategoryCard key={c.name} category={c} count={countIn(c.name)} onView={showCategory} />
              ))}
            </div>
          </div>
        </section>

        <EventsSection events={events} filter={filter} setFilter={setFilter} onRegister={openDrawer} />
      </main>
      <Footer />

      {drawerOpen && (
        <RegistrationModal events={events} preselected={chosenEvent} onClose={closeDrawer} onDone={onRegistered} />
      )}
      {notice && <div className="banner" role="status">✓ {notice}</div>}
    </>
  );
}

export default App;
