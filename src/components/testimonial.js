import React from 'react';
import ReactSVG from 'react-svg';

export default function testimonial() {
  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <div className="red-content">
          <div className="icon">
            <h1 className="header-txt scroll-reveal" style={{ color: '#fff' }}>
              Testimonial
            </h1>
            <div className="divider scroll-reveal">
              <ReactSVG src="svg.svg" />
            </div>
          </div>
          <p
            className="scroll-reveal"
            data-origin="top"
            data-distance="10%"
            style={{ color: '#fff' }}
          >
            <i>
              "To have much learning, to be skillful in handicraft, well-trained
              in discipline, and to be of good speech -- this is the greatest
              blessing."
            </i>
          </p>
          <h4 style={{ color: '#fff' }}>-Sabnam Thapa</h4>
        </div>
      </div>
    </section>
  );
}
