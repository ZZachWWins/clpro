// App.js
import './App.css';

const Header = () => (
  <header className="header">
    <nav className="nav-container">
      <h1>Clovis Lock Pros</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="hero">
    <h2>Expert Locksmith Services in Clovis, NM</h2>
    <p>Your trusted partner for all locksmith needs - cars, homes, and more.</p>
    <a href="#contact" className="hero-button">Get Help Now</a>
  </section>
);

const Services = () => (
  <section id="services" className="services">
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Automotive Locksmith</h3>
          <p>Car key replacements, lockouts, and transponder key programming.</p>
        </div>
        <div className="service-card">
          <h3>Residential Locksmith</h3>
          <p>Home lockouts, lock installations, and rekeying services.</p>
        </div>
        <div className="service-card">
          <h3>Commercial Locksmith</h3>
          <p>High-security locks, master key systems, and business lockouts.</p>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about">
    <div className="about-container">
      <h2>About Clovis Lock Pros</h2>
      <p>
        Clovis Lock Pros is your local locksmith in Clovis, New Mexico, dedicated to providing fast, reliable, and professional locksmith services. From car lockouts to home security upgrades, we handle all types of locks with expertise and care.
      </p>
    </div>
  </section>
);

const Contact = () => {
  const handleSubmit = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Form Submission:', { name, email, message });
    alert('Message sent! Check console for details.');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4"></textarea>
          </div>
          <button className="contact-button" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>© 2025 Clovis Lock Pros. All rights reserved.</p>
    <p>Clovis, New Mexico | (555) 123-4567 | info@clovislockpros.com</p>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default App;