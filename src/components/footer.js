import React from 'react';
import ReactSVG from 'react-svg';
import ContactForm from './contact_form';

export default function footer() {
  return (
    <>
      <a href="#0" className="cd-top">
        Top
      </a>
      <footer id="contact-us">
        <div className="container">
          <div className="footer-content">
            <h1 className="header-txt scroll-reveal">Contact Us</h1>
            <div className="divider scroll-reveal">
              <ReactSVG src="svg.svg" />
            </div>
            <div className="contact-info scroll-reveal">
              <div className="info-address">
                <h3>Location</h3>
                <p>Bagwatibhal,Nepal</p>
              </div>
              <div className="reservations">
                <h3>Further Info</h3>
                <p>
                  info@kriticraft.com
                  <br />
                  9803871287
                </p>
              </div>
            </div>
            <div
              className="contact-form scroll-reveal"
              data-origin="bottom"
              data-distance="20%"
            >
              <h3>Contact us</h3>
              <ContactForm />
            </div>
            <div className="social-icons scroll-reveal" data-duration="1500">
              <div className="fb-i">
                <ReactSVG src="socialsvg1.svg" />
              </div>
              <div className="insta-i">
                <ReactSVG src="socialsvg1.svg" />
              </div>
            </div>
          </div>
          <p className="copy-info">Copyright 2019 © by Vedanasoft</p>
        </div>
      </footer>

      <div id="preloader">
        <div className="loader">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </>
  );
}
