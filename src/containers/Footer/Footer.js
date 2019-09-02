import React from 'react';
import facebook from './facebook.png';
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import './style.css';

const Footer = () => {

  return (
      <div className="footer-container">
        <div className='logo-site'>
          <h1 className="h1-logo">LOGO</h1>
        </div>

        <div className='footer-logo'>
          <div>
            <img className='logo' src={facebook}/>
          </div>
          <div>
            <img className='logo' src={linkedin}/>
          </div>
          <div>
            <img className='logo' src={twitter}/>
          </div>
        </div>

        <div className='contact'>
          <div className="footer-center">

            <div className="contact-field">
              <i className="fa fa-map-marker"></i>
              <span className='contact-data'>Gyumri, Ghandilyan 21 11</span>
            </div>

            <div className="contact-field">
              <i className="fa fa-phone"></i>
              <span  className='contact-data'>(+374) 94 615979 </span>
            </div>

            <div className="contact-field">
              <i className="fa fa-envelope"></i>
              <span  className='contact-data'><a href="mailto:support@company.com">support@company.com</a></span>
            </div>

          </div>
        </div>
      </div>

  );
};

export default Footer;
