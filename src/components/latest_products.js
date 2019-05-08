import React from 'react';
import ReactSVG from 'react-svg';

export default function latest_products() {
  return (
    <section
      id="specials-grid"
      className="latest-products"
      data-scroll-reveal="enter from the bottom after 0.9s"
    >
      <div className="container">
        <h1 className="header-txt">Latest Products</h1>
        <div className="divider">
          <ReactSVG src="svg.svg" />
        </div>
        <div className="specials-content">
          <div className="special">
            <div className="special-img img-01">
              <img alt="product" src="latest/cat-pet.jpg" />
            </div>
            <div className="special-items spec-01">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Cat Nest
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Natural Wool Handmade Felt Cat Cave
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
          </div>
          <div className="special">
            <div className="special-img img-02">
              <img alt="product" src="latest/cat-toy.jpg" />
            </div>
            cat pet
            <div className="special-items spec-02">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Cat Toy
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Pure Wool Handmade Felt Ball For Pet
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
          </div>
          <div className="special">
            <div className="special-img img-03">
              <img alt="product" src="latest/shoes.jpg" />
            </div>
            <div className="special-items spec-03">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Shoes
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Pure Wool Handmade Felt Shoes
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
          </div>
          <div className="special">
            <div className="special-items spec-04">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Bird Nest
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Eco-friendly Mushroom Style Bird Nest
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
            <div className="special-img img-04">
              <img alt="product" src="latest/nest.jpg" />
            </div>
          </div>
          <div className="special">
            <div className="special-items spec-05">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Woolen Flower
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Felt Flower With Beads Work
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
            <div className="special-img img-05">
              <img alt="product" src="latest/flower.jpg" />
            </div>
          </div>
          <div className="special">
            <div className="special-items spec-06">
              <h2
                className="scroll-reveal"
                data-origin="top"
                data-distance="20%"
              >
                Strawberry Purse
              </h2>
              <span
                className="line scroll-reveal"
                data-origin="top"
                data-distance="20%"
              />
              <p
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="30%"
              >
                Pure Wool Handmade Felt Purse
              </p>
              <span
                className="scroll-reveal"
                data-origin="bottom"
                data-distance="60%"
              />
            </div>
            <div className="special-img img-06">
              <img alt="product" src="latest/purse.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
