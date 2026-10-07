function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div id="about">
          <h4>About</h4>
          <p>
            A simple campus portal to browse cultural events and register online.
          </p>
        </div>
        <div id="contact">
          <h4>Contact</h4>
          <p>events@college.edu</p>
          <p>+91 98765 43210</p>
          <p>Student Activity Centre, Main Campus</p>
        </div>
      </div>
      <p className="legal">© {new Date().getFullYear()} Event Management System</p>
    </footer>
  );
}

export default Footer;
