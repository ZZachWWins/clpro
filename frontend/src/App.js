import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';

const Header = () => (
  <header className="header">
    <nav className="nav-container">
      <h1>Clovis Lock Pros</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#services">Services</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-content">
      <h2>24/7 Expert Locksmith Services in Clovis, NM</h2>
      <p>Your trusted partner for emergency lockouts, key replacements, and security solutions for cars, homes, and businesses.</p>
      <NavLink to="/#contact" className="hero-button">Get Help Now - Call (575) 309-1364</NavLink>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="services">
    <div className="services-container">
      <h2>Our Locksmith Services in Clovis, NM</h2>
      <div className="services-grid">
        <div className="service-card">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/18/20/23/automobile-7600895_1280.jpg"
            alt="Clovis Lock Pros automotive locksmith service in Clovis, NM"
            className="service-image"
            loading="lazy"
          />
          <h3>Automotive Locksmith</h3>
          <p>Fast car lockout services, key replacements, and transponder key programming in Clovis, NM.</p>
        </div>
        <div className="service-card">
          <img
            src="https://cdn.pixabay.com/photo/2019/09/30/15/59/key-4516169_1280.jpg"
            alt="Clovis Lock Pros residential locksmith service in Clovis, NM"
            className="service-image"
            loading="lazy"
          />
          <h3>Residential Locksmith</h3>
          <p>Expert home lockouts, lock installations, and rekeying services for Clovis, NM residents.</p>
        </div>
        <div className="service-card">
          <img
            src="https://cdn.pixabay.com/photo/2014/08/02/18/36/key-408559_1280.jpg"
            alt="Clovis Lock Pros commercial locksmith service in Clovis, NM"
            className="service-image"
            loading="lazy"
          />
          <h3>Commercial Locksmith</h3>
          <p>High-security locks, master key systems, and business lockout solutions in Clovis, NM.</p>
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
        src="https://cdn.pixabay.com/photo/2016/07/07/03/16/padlock-1501499_1280.jpg"
        alt="Clovis Lock Pros locksmith team in Clovis, NM"
        className="about-image"
        loading="lazy"
      />
      <p>
        Clovis Lock Pros is your trusted locksmith in Clovis, New Mexico, providing fast, reliable, and professional locksmith services. From emergency car lockouts to home security upgrades, we handle all types of locks with expertise and care. Serving Clovis, NM since 2015.
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

  const mailtoLink = `mailto:info@clovislockpros.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Clovis Lock Pros</h2>
        <p>Need a locksmith in Clovis, NM? Call us at <a href="tel:+15753091364" className="text-blue-600 hover:underline">(575) 309-1364</a> or send us a message below.</p>
        <div className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
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
              required
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
              required
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

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <div className="testimonials-container">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p className="italic">"Clovis Lock Pros saved me during a late-night car lockout! Fast and professional service."</p>
          <p className="mt-4 font-semibold">– Sarah M., Clovis, NM</p>
        </div>
        <div className="testimonial-card">
          <p className="italic">"They replaced my business locks quickly and efficiently. Highly recommend!"</p>
          <p className="mt-4 font-semibold">– Mike T., Clovis, NM</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>123 Locksmith Lane, Clovis, NM 88101</p>
    <p><a href="tel:+15753091364" className="text-blue-300 hover:underline">(575) 309-1364</a> | <a href="mailto:info@clovislockpros.com" className="text-blue-300 hover:underline">info@clovislockpros.com</a></p>
    <p>© 2025 Clovis Lock Pros. All rights reserved.</p>
    <p>Website by <a href="https://xerisweb.co" className="text-blue-300 hover:underline">Xeris Web Co.</a></p>
  </footer>
);

const HomePage = () => (
  <>
    <Helmet>
      <title>Clovis Lock Pros | #1 Locksmith in Clovis, NM - 24/7 Service</title>
      <meta name="description" content="Clovis Lock Pros - Expert Locksmith in Clovis, NM. 24/7 emergency lockout services, key replacements, and security solutions. Call us today!" />
      <meta name="keywords" content="locksmith Clovis NM, emergency locksmith, lockout services, key replacement, Clovis Lock Pros" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Clovis Lock Pros" />
      <meta property="og:title" content="Clovis Lock Pros | #1 Locksmith in Clovis, NM" />
      <meta property="og:description" content="24/7 locksmith services in Clovis, NM. Emergency lockouts, key replacements, and security solutions." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.clovislockpros.com" />
      <meta property="og:image" content="https://www.clovislockpros.com/images/logo.png" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Locksmith",
          "name": "Clovis Lock Pros",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Locksmith Lane",
            "addressLocality": "Clovis",
            "addressRegion": "NM",
            "postalCode": "88101",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.4048,
            "longitude": -103.2052
          },
          "telephone": "+1-575-309-1364",
          "openingHours": "Mo-Su 00:00-23:59",
          "url": "https://www.clovislockpros.com",
          "image": "https://www.clovislockpros.com/images/logo.png",
          "description": "24/7 locksmith services in Clovis, NM. Emergency lockouts, key replacements, and security solutions.",
          "review": [
            {
              "@type": "Review",
              "author": {"@type": "Person", "name": "Sarah M."},
              "reviewRating": {"@type": "Rating", "ratingValue": "5"},
              "reviewBody": "Clovis Lock Pros saved me during a late-night car lockout! Fast and professional service."
            },
            {
              "@type": "Review",
              "author": {"@type": "Person", "name": "Mike T."},
              "reviewRating": {"@type": "Rating", "ratingValue": "5"},
              "reviewBody": "They replaced my business locks quickly and efficiently. Highly recommend!"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/clovislockpros",
            "https://www.yelp.com/biz/clovis-lock-pros"
          ]
        })}
      </script>
    </Helmet>
    <Hero />
    <Services />
    <About />
    <Testimonials />
    <Contact />
  </>
);

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;