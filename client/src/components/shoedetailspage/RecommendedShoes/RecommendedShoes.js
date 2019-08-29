import React, { useEffect, useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';

import './RecommendedShoes.css';

const RecommendedShoess = props => {
  const { recommendedShoes, click } = props;

  const [visSlides, setVisSlides] = useState(0);
  const [stepSlide, setStepSlide] = useState(0);

  useEffect(() => {
    checkWindowWidth();
  }, []);

  const checkWindowWidth = () => {
    const windowWidth = window.innerWidth;

    switch (true) {
      case windowWidth <= 480: // phone
        return setVisSlides(2) & setStepSlide(2);
      case windowWidth <= 768: //ipad
        return setVisSlides(3) & setStepSlide(2);
      case windowWidth <= 1024: //high resolution laptop
        return setVisSlides(4) & setStepSlide(1);
      default:
        // resolution higher than 1024, usually desktop computer
        return setVisSlides(5) & setStepSlide(1);
    }
  };

  return (
    <div className='wrapper-recommended-shoes'>
      {recommendedShoes.length !== 0 ? (
        <>
          <h1>recommended for you</h1>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={14}
            visibleSlides={visSlides}
            step={stepSlide}
          >
            <Slider>
              {recommendedShoes.slice(0, 14).map((shoe, ind) => (
                <Slide index={ind}>
                  <Link
                    key={ind}
                    to={`/products/shoes/${shoe._id}`}
                    onClick={() => click(shoe._id)}
                  >
                    <div className='recommended-shoes-image'>
                      <img src={shoe.images[0]} alt='recommended_image' />
                    </div>
                    <div className='recommended-shoes-info'>
                      <p>
                        {shoe.brand} {shoe.name}
                      </p>
                    </div>
                  </Link>
                </Slide>
              ))}
            </Slider>
            <ButtonBack className='prevbutton-recommendedshoes'>
              <i className='fa fa-chevron-left' />
            </ButtonBack>
            <ButtonNext className='nextbutton-recommendedshoes'>
              <i className='fa fa-chevron-right' />
            </ButtonNext>
          </CarouselProvider>
        </>
      ) : null}
    </div>
  );
};

export default RecommendedShoess;
