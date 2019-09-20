import React, { useState } from 'react';

import 'pure-react-carousel/dist/react-carousel.es.css';

import './ShoeImages.css';

const ShoeImages = props => {
  // @todo: 1. have a state and change the state of the main image on every click of the small images
  const { images } = props;

  const [mainImage, setMainImage] = useState(images[0]);

  const changeMainImage = image => {
    setMainImage(image);
  };

  return (
    // @@@@@@@@@@@@@@@ IF THE CAROUSEL DOESNT WORK, REVERT TO THIS ONE

    <div className='wrapper-shoe-images'>
      <div className='product-images-main'>
        <img src={mainImage} alt='big_shoes_image' />
      </div>

      <div className='product-images-other'>
        <div className='row justify-content-center'>
          {images.map((shoeImage, index) => (
            <div
              key={index}
              className='shoes-diff-images-col col-3 col-sm-2 my-2'
              // onClick={changeMainImage.bind(this, shoeImage)}
              onClick={() => changeMainImage(shoeImage)}
            >
              <img src={shoeImage} alt='small_shoes_images' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoeImages;
