import React from 'react';
import HistoryPanel from '../HistoryPanel';

const webDesignHistoryEvents = [
  { image:'zybia.jpg',year: '1960\'s', description: ' Were a passionate team of innovators dedicated to creating technology that empowers businesses and transforms industries.' , Title:'Javascript' },
  { image:'zybia.jpg',year: '1980\'s', description: 'Custom Code' , Title:'Javascript' },
  { image:'zybia.jpg',year: '1990\'s', description: 'HTML3, Gif, Flash', Title:'Javascript'  },
  { image:'zybia.jpg',year: '1995', description: 'Responsiveness' , Title:'Javascript' },
  { image:'zybia.jpg',year: '1996', description: 'PHP Born' , Title:'Javascript' },
  { image:'zybia.jpg',year: '2008', description: 'Java Script' , Title:'Javascript' },
];
const About = () => {
  return (<><div className="Compass"><p>/Products/general information</p></div><div className="about-page-container">
    {/* Breadcrumb */}
    <div className="about-compass">
      <p>/About us/Our history/</p>
    </div>

<<<<<<< HEAD
        <section className="stats container">
          <div>
            <div className="stat-number">10K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div>
            <div className="stat-number">25+</div>
            <div className="stat-label">Countries Served</div>
          </div>
          <div>
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
        </section>

        <a>
<<<<<<< HEAD
          <h1>Welcome to Diasys Mongolia - Your Trusted Partner in Medical field</h1>
=======
          
>>>>>>> a2961e90185c135411885d7cb74452661c749be9
        </a>
      </div>
      <section className="about-content">
        <p> Sinse 2006 
=======
    {/* Hero Section */}
    <section className="about-hero-section">
      <div className="about-hero-content">
        <span className="about-hero-subtitle">About Our Company</span>
        <h1 className="about-hero-title">Building the future, one solution at a time</h1>
        <p className="about-hero-description">
          We're a passionate team of innovators dedicated to creating technology that empowers businesses and
          transforms industries.
>>>>>>> 2778ea885d0d2670c7fe231ac321e0c088a3779a
        </p>
        <div className="about-hero-buttons">
          <button className="about-btn about-btn-primary">Join Our Team</button>
          <button className="about-btn about-btn-outline">Our Story</button>
        </div>
      </div>
      <div className="about-hero-image">
        <img src="/placeholder.svg" alt="Our team at work" />
      </div>
    </section>

    {/* Stats Section */}
    <section className="about-stats-section">
      <div className="about-stat-item">
        <div className="about-stat-number">10K+</div>
        <div className="about-stat-label">Happy Customers</div>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">50+</div>
        <div className="about-stat-label">Team Members</div>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">25+</div>
        <div className="about-stat-label">Countries Served</div>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">99.9%</div>
        <div className="about-stat-label">Uptime</div>
      </div>
    </section>

    {/* Main Content */}
    <section className="about-main-content">
      <p className="about-content-intro">
        At Daisys Mongolia, we are dedicated to advancing healthcare through cutting-edge medical devices and innovative solutions. With a commitment to excellence, quality, and patient well-being, we have established ourselves as a leading force in the medical device industry.
      </p>

      <div className="about-content-image-wrapper">
        <img src="coll.jpg" alt="Our team collaboration" className="about-content-image" />
      </div>

      <div className="about-content-block">
        <h2 className="about-content-heading">Our Mission</h2>
        <p>
        Introducing environment-friendly and advanced medical equipment in the Healthcare sector, supplying the population with Quality drugs and constantly training our Cusmomers and employces in Modern knowledge.
        </p>
      </div>

      <div className="about-content-block">
        <h2 className="about-content-heading">Our Products</h2>
        <p>
        Medical device equipment - Medical health training  - Medical engineering service:
        </p>
<<<<<<< HEAD
        <ul><i>
        <li>Diagnostic Imaging: High-resolution imaging solutions for accurate diagnoses.</li>
=======
        <ul className="about-product-list">
          <li>Diagnostic Imaging: High-resolution imaging solutions for accurate diagnoses.</li>
>>>>>>> 2778ea885d0d2670c7fe231ac321e0c088a3779a
          <li>Surgical Instruments: Precision instruments for surgical excellence.</li>
          <li>Patient Monitoring: Cutting-edge devices for real-time patient data.</li>
          <li>Rehabilitation & Therapy: Innovative tools for patient recovery.</li>
          <li>Home Healthcare: Convenient devices for at-home care.</li>
        </i>
         
        </ul>
      </div>

      <div className="about-content-block">
        <h2 className="about-content-heading">Our Commitment to Quality</h2>
        <p>
          Quality and safety are at the core of our business. We adhere to stringent quality control processes to deliver products that exceed industry standards. We are ISO certified and committed to continuous improvement in everything we do.
        </p>
      </div>
    </section>

    {/* History Panel */}
    <HistoryPanel title="A HISTORY OF DIASYS MONGOLIA" events={webDesignHistoryEvents} />
  </div></>
  );
};

export default About;