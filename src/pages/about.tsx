import React from 'react';
import HistoryPanel from '../HistoryPanel';

const webDesignHistoryEvents = [
  { image:'zybia.jpg',year: '1960\'s', description: 'Hypertext Born' , },
  { image:'zybia.jpg',year: '1980\'s', description: 'Custom Code' },
  { image:'zybia.jpg',year: '1990\'s', description: 'HTML3, Gif, Flash' },
  { image:'zybia.jpg',year: '1995', description: 'Responsiveness' },
  { image:'zybia.jpg',year: '1996', description: 'PHP Born' },
  { image:'zybia.jpg',year: '2008', description: 'Java Script' },
];
const About = () => {
  return (
    <div className="App">
      <div className="about-page">
        <a>
          <h1>Welcome to Diasys Mongolia - Your Trusted Partner in Medical field</h1>
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
      <HistoryPanel title="A HISTORY OF DIASYS MONGOLIA" events={webDesignHistoryEvents}  />
    </div>
  );
};

export default About;