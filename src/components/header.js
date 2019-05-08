import React from 'react';
import ReactSVG from 'react-svg';

export default function header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="top-menu  scroll-reveal">
            <div className="menu">
              <div
                className="title-bar"
                data-responsive-toggle="main-nav"
                data-hide-for="medium"
              >
                <button
                  className="menu-icon dark"
                  type="button"
                  data-toggle="main-nav"
                />
                <div className="title-bar-title">Menu</div>
              </div>
              <nav id="main-nav" data-animate="menu-in menu-out">
                <ul className="main-navigation">
                  <li>
                    <a className="m-anim" href="#0" data-text="Home">
                      <strong>Home</strong>
                    </a>
                  </li>
                  <li>
                    <a
                      className="m-anim"
                      href="https://kriticraft.trustpass.alibaba.com"
                      target="-blank"
                      data-text="Specials"
                    >
                      <strong>Products</strong>
                    </a>
                  </li>
                  <li>
                    <a className="m-anim" href="#about-us" data-text="About">
                      <strong>About Us</strong>
                    </a>
                  </li>
                  <li>
                    <a
                      className="m-anim"
                      href="#testimonial"
                      data-text="Testimonial"
                    >
                      <strong>Testimonial</strong>
                    </a>
                  </li>
                  <li>
                    <a
                      className="m-anim"
                      href="#contact-us"
                      data-text="Contact"
                    >
                      <strong>Contact Us</strong>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="a-slide slide1">
          <div className="container">
            <div
              className="bottom-section scroll-reveal"
              data-origin="right"
              data-distance="20%"
            >
              <h1 className="header-txt">
                <strong>Best quality for respectable price</strong>
              </h1>
              <div className="divider">
                <ReactSVG src="svg.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="a-slide slide2">
          <div className="container">
            <div className="bottom-section">
              <h1 className="header-txt">
                <strong>We use high quality raw products.</strong>
              </h1>
              <div className="divider">
                <ReactSVG src="svg.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
