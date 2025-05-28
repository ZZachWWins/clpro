import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

const Header = () => (
  <header className="header">
    <nav className="nav-container">
      <h1>Clovis Lock Pros</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-content">
      <h2>Expert Locksmith Services in Clovis, NM</h2>
      <p>Your trusted partner for all locksmith needs - cars, homes, and businesses.</p>
      <NavLink to="/contact" className="hero-button">Get Help Now</NavLink>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="services">
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/18/20/23/automobile-7600895_1280.jpg"
            alt="Car key replacement by Clovis Lock Pros in Clovis, NM"
            className="service-image"
            loading="lazy"
          />
          <h3>Automotive Locksmith</h3>
          <p>Car key replacements, lockouts, and transponder key programming.</p>
        </div>
        <div className="service-card">
          <img
            src="https://cdn.pixabay.com/photo/2019/09/30/15/59/key-4516169_1280.jpg"
            alt="Residential locksmith services for door locks in Clovis, NM"
            className="service-image"
            loading="lazy"
          />
          <h3>Residential Locksmith</h3>
          <p>Home lockouts, lock installations, and rekeying services.</p>
        </div>
        <div className="service-card">
          <img
            src="https://cdn.pixabay.com/photo/2014/08/02/18/36/key-408559_1280.jpg"
            alt="Commercial locksmith security systems in Clovis, NM"
            className="service-image"
            loading="lazy"
          />
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
      <img
        src="https://cdn.pixabay.com/photo/2013/08/29/04/37/automobile-176989_1280.jpg"
        alt="Clovis Lock Pros team providing expert locksmith services in Clovis, NM"
        className="about-image"
        loading="lazy"
      />
      <p>
        Clovis Lock Pros is your local locksmith in Clovis, New Mexico, dedicated to providing fast, reliable, and professional locksmith services. From car lockouts to home security upgrades, we handle all types of locks with expertise and care.
      </p>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const mailtoLink = `mailto:infoclovislockpros@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <a href={mailtoLink} className="contact-button">
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>© 2025 Clovis Lock Pros. All rights reserved.</p>
    <p>Clovis, New Mexico | (575) 309-1364 | info@clovislockpros.com</p>
    <p>This Website was custom designed for Clovis Lock Pro by the team at Xeris Web Co.</p>
  </footer>
);

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;