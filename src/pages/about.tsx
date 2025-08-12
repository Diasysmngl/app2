import React from 'react';
import HistoryPanel from '../HistoryPanel';

const webDesignHistoryEvents = [
  { image:'zybia.jpg',year: '1960\'s', description: 'Hypertext Born' , Title:'Javascript' },
  { image:'zybia.jpg',year: '1980\'s', description: 'Custom Code' , Title:'Javascript' },
  { image:'zybia.jpg',year: '1990\'s', description: 'HTML3, Gif, Flash', Title:'Javascript'  },
  { image:'zybia.jpg',year: '1995', description: 'Responsiveness' , Title:'Javascript' },
  { image:'zybia.jpg',year: '1996', description: 'PHP Born' , Title:'Javascript' },
  { image:'zybia.jpg',year: '2008', description: 'Java Script' , Title:'Javascript' },
];
const About = () => {
  return (
    <><div className="Compass"><p>/About us/Our history/</p></div><div className="App">
      <div className="about-page">
        <section className="hero container">
          <div className="col">
            <span>About Our Company</span>
            <h1>Building the future, one solution at a time</h1>
            <p>
              We're a passionate team of innovators dedicated to creating technology that empowers businesses and
              transforms industries.
            </p>
            <div className="buttons">
              <button className="button button-primary">Join Our Team</button>
              <button className="button button-outline">Our Story</button>
            </div>
          </div>
          <div className="col">
            <img src="/placeholder.svg" alt="Our team at work" />
          </div>
        </section>

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
        </p>
        <img src="coll.jpg" alt="" width={800} height={700} />
        <h1>Our Mission.</h1>
        <p>
        Introducing environment-friendly and advanced medical equipment in the Healthcare sector, supplying the population with Quality drugs and constantly training our Cusmomers and employces in Modern knowledge.
        </p>
        <h1>Our Products</h1>
        <p>
        Medical device equipment - Medical health training  - Medical engineering service:
        </p>
        <ul><i>
        <li>Diagnostic Imaging: High-resolution imaging solutions for accurate diagnoses.</li>
          <li>Surgical Instruments: Precision instruments for surgical excellence.</li>
          <li>Patient Monitoring: Cutting-edge devices for real-time patient data.</li>
          <li>Rehabilitation & Therapy: Innovative tools for patient recovery.</li>
          <li>Home Healthcare: Convenient devices for at-home care.</li>
        </i>
         
        </ul>
        <h1>Our Commitment to Quality</h1>
        <p>
          Quality and safety are at the core of our business. We adhere to stringent quality control processes to deliver products that exceed industry standards. We are ISO certified and committed to continuous improvement in everything we do.
        </p>
      </section>
      <HistoryPanel title="A HISTORY OF DIASYS MONGOLIA" events={webDesignHistoryEvents} />
    </div><div>
        
        
      </div></>
  );
};

export default About;