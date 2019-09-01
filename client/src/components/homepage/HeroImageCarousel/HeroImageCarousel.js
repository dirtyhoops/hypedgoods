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
      category: 'airmax',
      link:
        'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    },
    {
      brand: 'flyknits',
      category: 'nike',
      link:
        'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      brand: 'jordan',
      category: 'jordan',
      link:
        'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  const heroImages480 = [
    {
      brand: 'adidas',
      category: 'adidas',
      link:
        'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      brand: 'nike',
      category: 'nike',
      link:
        'https://images.pexels.com/photos/2692460/pexels-photo-2692460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      brand: 'jordan',
      category: 'jordan',
      link:
        'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
              <div className='shoe-hero-button '>
                <Link to={`/products/shoes/brand/${heroImage.brand}`}>
                  <button className='btn btn-dark btn-lg'>
                    shop {heroImage.brand}
                  </button>
                </Link>
              </div>
            </div>
          </Slide>
        ))}
      </Slider>
      <ButtonBack className='buttonprevious'>
        <i class='fa fa-angle-left' />
      </ButtonBack>
      <ButtonNext className='buttonnext'>
        <i class='fa fa-angle-right' aria-hidden='true' />
      </ButtonNext>
      <DotGroup className='dotgroup' />
    </CarouselProvider>
  );
};

export default HeroImageCarousel;
