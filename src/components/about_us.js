import React from 'react';
import ReactSVG from 'react-svg';

export default function about_us() {
  return (
    <section id="about-us" className="about">
      <div className="container">
        <div className="about-content">
          <h1 className="header-txt scroll-reveal">About us</h1>
          <div className="divider scroll-reveal">
            <ReactSVG src="svg.svg" />
          </div>
          <p className="scroll-reveal" data-origin="top" data-distance="10%">
            Kriti Craft Pvt.Ltd is a leading brand from Nepal operating
            globally.It was founded in 2005 with it's headquater in Thamel.Our
            all products are totally handmade of Pure New-Zealand Lambs wool
            which are non-allergic,non-toxic and AZO free.
          </p>
        </div>
      </div>
    </section>
  );
}
