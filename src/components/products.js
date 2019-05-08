import React from 'react';
import ReactSVG from 'react-svg';

export default function products() {
  return (
    <section id="main-menu" className="our-products scroll-reveal">
      <div className="container">
        <h1 className="header-txt">Our Products</h1>
        <div className="divider">
          <ReactSVG src="svg.svg" />
        </div>
        <ul
          className="menu-navigation"
          data-tabs
          data-match-height="true"
          id="example-tabs"
        >
          <li className="tabs-title is-active">
            <a className="m-anim" href="#panel1" data-text="Pet House">
              Pet House
            </a>
          </li>
          <li className="tabs-title">
            <a
              className="m-anim"
              data-tabs-target="panel2"
              href="#panel2"
              data-text="Shoes"
            >
              Shoes
            </a>
          </li>
          <li className="tabs-title">
            <a
              className="m-anim"
              data-tabs-target="panel3"
              href="#panel3"
              data-text="Woolen Flowers"
            >
              Woolen Flowers
            </a>
          </li>
          <li className="tabs-title">
            <a
              className="m-anim"
              data-tabs-target="panel4"
              href="#panel4"
              data-text="Rug"
            >
              Rug
            </a>
          </li>
        </ul>

        <div className="tabs-content" data-tabs-content="example-tabs">
          <div className="tabs-panel is-active" id="panel1">
            <div className="row">
              <div className="menu-section">
                <div className="item-block ">
                  <img
                    src="peth/cat-pet.jpg"
                    className="center"
                    alt="cat-pet"
                  />
                  <div className="desc" title="pet house">
                    Pure Woolen Cat Shape Pet house
                  </div>
                </div>

                <div className="item-block center">
                  <img src="peth/lantern.jpg" alt="lantern" />
                  <div className="desc" title="pet house">
                    Pure Woolen Lantern Shape Pet house
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs-panel" id="panel2">
            <div className="row">
              <div className="menu-section">
                <div className="item-block ">
                  <img src="shoes/gshoes.jpg" className="center" alt="gshoes" />
                  <div className="desc" title="woolen shoes">
                    Pure Woolen Green Shoes
                  </div>
                </div>
                <div className="item-block center">
                  <img src="shoes/shoes.jpg" alt="shoes" />
                  <div className="desc" title="woolen shoes">
                    Pure Woolen Pink Shoes
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs-panel " id="panel3">
            <div className="row">
              <div className="menu-section">
                <div className="item-block ">
                  <img
                    src="flower/flower.jpg"
                    className="center"
                    alt="flower"
                  />
                  <div className="desc" title="woolen shoes">
                    Pure Woolen Flower
                  </div>
                </div>

                <div className="item-block center">
                  <img src="flower/flower1.jpg" alt="flower" />
                  <div className="desc" title="woolen shoes">
                    Pure Woolen Flower
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs-panel" id="panel4">
            <div className="menu-content">
              <div className="menu-section">
                <div className="item-block">
                  <img src="rug/rug1.jpg" className="center" alt="rug" />
                  <div className="des" title="rug">
                    Pure Woolen Rug
                  </div>
                </div>

                <div className="item-block">
                  <img src="rug/felt-pebble-rug.jpg" alt="pebble rug" />
                  <div className="des" title="pebble rug">
                    Felt Pebble Rug
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
