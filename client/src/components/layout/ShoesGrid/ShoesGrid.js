import React, { Component } from 'react';

import './ShoesGrid.css';

class ShoesGrid extends Component {
  render() {
    return (
      <div class='wrapper-latestrelease-homepage'>
        <div class='header-latestrelease'>
          <p>latest kicks</p>
        </div>

        {/* <!-- learn how to do grid without using bootstrap --> */}
        <div class='grid-latestrelease'>
          <div class='row'>
            <div class='grid-latestrelease-column col col-lg-4 col-md-4 col-sm-6'>
              <div class='shoes-image'>
                <img src='https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/1/3/136354_01.jpg' />
              </div>
              <div class='shoes-info'>
                <p>adidas yeezy boost 350 v2 clay</p>
                <h1>$260.00</h1>
              </div>
            </div>
            <div class='grid-latestrelease-column col col-lg-4 col-md-4 col-sm-6'>
              <div class='shoes-image'>
                <img src='https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802389_01.jpg' />
              </div>
              <div class='shoes-info'>
                <p>adidas yeezy boost 350 v2 beluga 2.0</p>
                <h1>$380.00</h1>
              </div>
            </div>
            <div class='grid-latestrelease-column col col-lg-4 col-md-4 col-sm-6'>
              <div class='shoes-image'>
                <img src='https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/800502_01.jpg' />
              </div>
              <div class='shoes-info'>
                <p>adidas yeezy boost 350 v2 zebra</p>
                <h1>$400.00</h1>
              </div>
            </div>
            <div class='grid-latestrelease-column col col-lg-4 col-md-4 col-sm-6'>
              <div class='shoes-image'>
                <img src='https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-yeezy-boost-350-moonrock-agagra-moonro-agagra-201153_1.jpg' />
              </div>
              <div class='shoes-info'>
                <p>adidas yeezy boost 350 moonrock</p>
                <h1>$1500.00</h1>
              </div>
            </div>

            <div class='grid-latestrelease-column col col-lg-4 col-md-4 col-sm-6'>
              <div class='shoes-image'>
                <img src='https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/806102_01.jpg' />
              </div>
              <div class='shoes-info'>
                <p>nike air fear of god 1 "light bone"</p>
                <h1>$800.00</h1>
              </div>
            </div>

            <div class='grid-latestrelease-column col col-lg-4 col-md-4 col-sm-6'>
              <div class='shoes-image'>
                <img src='https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/806101_01.jpg' />
              </div>
              <div class='shoes-info'>
                <p>nike air fear of god 1</p>
                <h1>$800.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoesGrid;
