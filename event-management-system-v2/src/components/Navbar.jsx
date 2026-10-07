import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ onRegister }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav-pill">
        <a href="#home" className="brand">
          <span className="brand-dot" />
          Event Management System
        </a>

        <button className="burger" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-items ${menuOpen ? "show" : ""}`}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <button className="btn btn-glow" onClick={() => { setMenuOpen(false); onRegister(); }}>
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
