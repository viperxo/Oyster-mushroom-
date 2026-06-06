import React from 'react';

const Footer = () => {
  return (
    <footer className="container" id="contact">
      <section className="contact" aria-labelledby="contact-title">
        <div className="contact-inner">
          <div>
            <h2 id="contact-title">સંપર્ક કરો</h2>
            <p>
              ઓઇસ્ટર મશરૂમ્સ વિશે વધુ માહિતી, ઉત્પાદન અથવા સપ્લાય સંબંધિત પૂછપરછ માટે અમારો સંપર્ક કરો.
            </p>
          </div>

          <div className="contact-box">
            <div className="phone">+91 9265621750</div>
            <a className="btn btn-primary" href="tel:+919265621750">
              હમણાં જ કોલ કરો
            </a>
          </div>
        </div>
      </section>
      <div className="footer-note">
        ઓઇસ્ટર મશરૂમ્સ — પોષણ, સ્વાદ અને કુદરતી ગુણવત્તાનો વિશ્વસનીય વિકલ્પ
      </div>
    </footer>
  );
};

export default Footer;
