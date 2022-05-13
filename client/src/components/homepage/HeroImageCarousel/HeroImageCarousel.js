import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './HeroImageCarousel.css';

const HeroImageCarousel = () => {
  const [naturalSlideH, setNaturalSlideH] = useState(0);
  const [heroImagesArray, setHeroImagesArray] = useState([]);

  // @Todo:
  // 1. make sure to make a new file that holds all these heroImages
  // 2. make everything simpler and shorter
  // 3. find a better images
  // 5. make the button prettier and customized
  // 6. fix the button make sure it's always showing, 50% or so of the height of the heroimage
  // 7. change the .shoe-hero-button margin make sure it shows everytime regardless of the size of the screen. look at #6
  const heroImages1024 = [
    {
      brand: 'nike',
      category: 'off-white',
      link: 'https://cms-cdn.thesolesupplier.co.uk/2019/04/THE-TEN.jpg'
    },
    {
      brand: 'nike',
      category: 'jordan',
      link: '  https://cdn.shopify.com/s/files/1/1527/4931/files/TR_AJ5_site_header_1440x640.jpg?v=1558186252'
    },
    {
      brand: 'adidas',
      category: 'yeezy',
      link: 'https://sneakernews.com/wp-content/uploads/2019/06/adidas-yeezy-350-v2-lundmark-3.jpg?w=1140'
    }
  ];

  const heroImages480 = [
    {
      brand: 'adidas',
      category: 'yeezy',
      link: 'http://2app.kicksonfire.com/kofapp/upload/events_images/ipad_1563ab6feef93228f2f7014794a0e719584f3ab5d5e2a.jpg'
    },
    {
      brand: 'nike',
      category: 'off-white',
      link: 'https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2018/07/stockxoffwhitepresto.jpg'
    },
    {
      brand: 'jordan',
      category: 'jordan',
      link: 'http://d2lllwtzebgpl1.cloudfront.net/0065992216301e2eb724600ca05b660f_listingImg_FfkH88759U.jpg'
    }
  ];

  useEffect(() => {
    checkWindowWidth();
  }, []);

  const checkWindowWidth = () => {
    const windowWidth = window.innerWidth;

    switch (true) {
      case windowWidth <= 480: // phone
        return setNaturalSlideH(100) & setHeroImagesArray(heroImages480);
      case windowWidth <= 768: //ipad
        return setNaturalSlideH(50) & setHeroImagesArray(heroImages1024);
      case windowWidth <= 1024: //high resolution laptop
        return setNaturalSlideH(50) & setHeroImagesArray(heroImages1024);
      default:
        // resolution higher than 1024, usually desktop computer
        return setNaturalSlideH(35) & setHeroImagesArray(heroImages1024);
    }
  };

  // @todo:
  // 1. make a different set of pictures, inside array, for 480, 768, 1024, default

  return (
    <CarouselProvider
      className='carouselprovider'
      naturalSlideWidth={100}
      naturalSlideHeight={naturalSlideH}
      totalSlides={3}
      isPlaying={true}
      interval={5000}
    >
      <Slider>
        {heroImagesArray.map((heroImage, ind) => (
          <Slide key={ind} index={ind}>
            <div className='wrapper-men-shirt1'>
              <img src={heroImage.link} />
              {/* <div className='shoe-hero-button '>
                <Link to={`/products/shoes/brand/${heroImage.brand}`}>
                  <button className='btn btn-dark btn-lg'>
                    shop {heroImage.category}
                  </button>
                </Link>
              </div> */}
            </div>
          </Slide>
        ))}
      </Slider>
      <ButtonBack className='buttonprevious'>
        <i className='fa fa-angle-left' />
      </ButtonBack>
      <ButtonNext className='buttonnext'>
        <i className='fa fa-angle-right' aria-hidden='true' />
      </ButtonNext>
      <DotGroup className='dotgroup' />
    </CarouselProvider>
  );
};

export default HeroImageCarousel;
