import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useAnimation } from 'framer-motion';
import './App.css';

const Header = () => (
  <header className="header">
    <nav className="nav-container">
      <h1>Clovis Lock Pros</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#services">Services</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => {
  const controls = useAnimation();
  const textControls = useAnimation();
  const [typedText, setTypedText] = useState('');
  const fullText = "24/7 Car Unlocking Experts in Clovis, NM";

  useEffect(() => {
    let i = 0;
    const typeWriter = async () => {
      while (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      await textControls.start({
        opacity: 1,
        scale: [1, 1.05, 1],
        transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
      });
    };
    typeWriter();
  }, [textControls]);

  useEffect(() => {
    controls.start({
      scale: [1, 1.1],
      transition: { duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-background"
        animate={controls}
        initial={{ scale: 1 }}
      />
      <div className="hero-content">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          {typedText}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-subtitle"
        >
          Locked Out of Your Car? We’ll Get You Back on the Road—Fast! Mobile Car Unlocking in Clovis, NM.
        </motion.p>
        <motion.a
          href="tel:+15753091364"
          className="hero-button"
          animate={textControls}
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Call Now: (575) 309-1364
        </motion.a>
      </div>
    </section>
  );
};

const Services = () => (
  <section id="services" className="services">
    <div className="services-container">
      <h2>Our Mobile Car Unlocking Service in Clovis, NM</h2>
      <div className="services-grid">
        <div className="service-card">
          <img
            src="https://res.cloudinary.com/clovislockpros/image/upload/q_auto,f_webp/clovis-lock-pros-automotive-locksmith.jpg"
            alt="Clovis Lock Pros mobile car unlocking service in Clovis, NM"
            className="service-image"
            loading="lazy"
          />
          <h3>Mobile Car Unlocking</h3>
          <p>Locked out of your car? We provide fast, 24/7 mobile car unlocking services in Clovis, NM. Get back on the road quickly!</p>
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
        src="https://res.cloudinary.com/clovislockpros/image/upload/q_auto,f_webp/clovis-lock-pros-padlock.jpg"
        alt="Clovis Lock Pros mobile car unlocking team in Clovis, NM"
        className="about-image"
        loading="lazy"
      />
      <p>
        Clovis Lock Pros is your trusted mobile locksmith in Clovis, New Mexico, specializing in fast and reliable car unlocking services. We come to you, wherever you are in Clovis, NM, to get you back into your vehicle quickly. Serving the community since 2015.
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
        <p>Locked out of your car in Clovis, NM? Call us at <a href="tel:+15753091364" className="text-blue-600 hover:underline">(575) 309-1364</a> or send us a message below.</p>
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
          <p className="italic">"I was locked out of my car, and they arrived within 20 minutes. Amazing service!"</p>
          <p className="mt-4 font-semibold">– Mike T., Clovis, NM</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>Clovis, New Mexico</p>
    <p><a href="tel:+15753091364" className="text-blue-300 hover:underline">(575) 309-1364</a> | <a href="mailto:info@clovislockpros.com" className="text-blue-300 hover:underline">info@clovislockpros.com</a></p>
    <p>© 2025 Clovis Lock Pros. All rights reserved.</p>
    <p>Website by <a href="https://xerisweb.com" className="text-blue-300 hover:underline">Xeris Web Co.</a></p>
  </footer>
);

const blogPosts = [
  {
    slug: "how-to-handle-car-lockout-clovis-nm",
    title: "How to Handle a Car Lockout in Clovis, NM",
    metaDescription: "Locked out of your car in Clovis, NM? Learn what to do, how to stay safe, and why Clovis Lock Pros is your best solution for fast, reliable mobile car unlocking.",
    date: "May 15, 2025",
    content: `
      <p>Getting locked out of your car in Clovis, NM can be a stressful experience, especially if you're in a hurry or it's late at night. Here’s a step-by-step guide to handle the situation:</p>
      <h3>Step 1: Stay Calm and Assess the Situation</h3>
      <p>First, take a deep breath. Check all doors and windows to see if any are unlocked. If you have a spare key nearby, now’s the time to retrieve it.</p>
      <h3>Step 2: Ensure Your Safety</h3>
      <p>If you’re in an unsafe area or it’s dark, move to a well-lit, populated spot. Avoid trying to break into your car, as this can cause damage or injury.</p>
      <h3>Step 3: Call a Professional Locksmith</h3>
      <p>Avoid makeshift solutions that might damage your vehicle. Instead, contact <a href="/#contact">Clovis Lock Pros</a> for immediate assistance. We offer 24/7 mobile car unlocking services in Clovis, NM, with fast response times.</p>
    `
  },
  {
    slug: "what-to-do-if-locked-out-of-car-clovis-nm",
    title: "What to Do If You’re Locked Out of Your Car in Clovis, NM",
    metaDescription: "Locked out of your car in Clovis, NM? Follow these tips to stay safe and get back on the road fast with Clovis Lock Pros’ mobile unlocking service.",
    date: "May 10, 2025",
    content: `
      <p>Being locked out of your car in Clovis, NM can happen to anyone. Here’s what to do to resolve the situation quickly and safely:</p>
      <h3>1. Check for Open Windows or Doors</h3>
      <p>Sometimes, a window might be slightly open, or a door might not be fully locked. Check every entry point before taking further action.</p>
      <h3>2. Call for Help</h3>
      <p>If you can’t get in, don’t risk damaging your car. Call <a href="/#contact">Clovis Lock Pros</a>—we specialize in mobile car unlocking and can arrive quickly anywhere in Clovis, NM.</p>
      <h3>3. Prevent Future Lockouts</h3>
      <p>Consider keeping a spare key with a trusted friend or family member, or use a magnetic key holder to avoid future lockouts.</p>
    `
  },
  {
    slug: "why-choose-clovis-lock-pros-car-unlocking",
    title: "Why Choose Clovis Lock Pros for Car Unlocking in Clovis, NM",
    metaDescription: "Discover why Clovis Lock Pros is the #1 choice for mobile car unlocking in Clovis, NM. Fast, reliable, and available 24/7 to get you back on the road.",
    date: "May 5, 2025",
    content: `
      <p>When you’re locked out of your car in Clovis, NM, you need a locksmith you can trust. Here’s why <a href="/">Clovis Lock Pros</a> is the best choice:</p>
      <h3>24/7 Availability</h3>
      <p>Car lockouts can happen anytime. We’re available around the clock to provide mobile car unlocking services in Clovis, NM.</p>
      <h3>Fast Response Times</h3>
      <p>We pride ourselves on quick arrivals—usually within 30 minutes—because we know every second counts when you’re locked out of your car.</p>
      <h3>Mobile Service</h3>
      <p>We come to you, wherever you are in Clovis, NM, with the tools and expertise to unlock your car without damage.</p>
      <h3>Experienced Professionals</h3>
      <p>With over 10 years of experience, our locksmiths are skilled in unlocking all types of vehicles safely and efficiently.</p>
      <h3>Customer Satisfaction</h3>
      <p>Our 5-star reviews speak for themselves. We’re committed to ensuring you’re 100% satisfied with our service.</p>
    `
  },
];

const Blog = () => (
  <section id="blog" className="blog">
    <div className="blog-container">
      <h2>Clovis Lock Pros Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.slug} className="blog-card">
            <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p>{post.metaDescription}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className="blog-post">
      <Helmet>
        <title>{post.title} | Clovis Lock Pros Blog</title>
        <meta name="description" content={post.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <h1>{post.title}</h1>
        <p className="text-gray-500 text-sm">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link to="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
      </div>
    </section>
  );
};

const HomePage = () => (
  <>
    <Helmet>
      <title>Clovis Lock Pros | #1 Mobile Car Unlocking in Clovis, NM - 24/7 Service</title>
      <meta name="description" content="Clovis Lock Pros - Expert Mobile Car Unlocking in Clovis, NM. 24/7 emergency lockout services to get you back on the road fast. Call us today!" />
      <meta name="keywords" content="car unlocking Clovis NM, mobile locksmith Clovis NM, emergency car lockout, Clovis Lock Pros" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Clovis Lock Pros" />
      <meta property="og:title" content="Clovis Lock Pros | #1 Mobile Car Unlocking in Clovis, NM" />
      <meta property="og:description" content="24/7 mobile car unlocking services in Clovis, NM. Emergency lockouts solved fast." />
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
          "description": "24/7 mobile car unlocking services in Clovis, NM. Emergency lockouts solved fast.",
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
              "reviewBody": "I was locked out of my car, and they arrived within 20 minutes. Amazing service!"
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
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;