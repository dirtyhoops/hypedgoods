import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './ShoeImages.css';

const ShoeImages = ({ selectedShoe }) => {
  return (
    <div className='wrapper-shoe-images'>
      {selectedShoe ? (
        <>
          <div className='product-images-main'>
            <img src={selectedShoe.images[0]} />
          </div>

          <div className='product-images-other'>
            <div className='row justify-content-center'>
              {selectedShoe.images.map(shoeImage => (
                <div className='shoes-diff-images-col col-3 col-sm-2 my-2 '>
                  <img src={shoeImage} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

ShoeImages.propTypes = {
  selectedShoe: PropTypes.object
};

const mapStateToProps = state => ({
  selectedShoe: state.shoe.selectedShoe
});

export default connect(mapStateToProps)(ShoeImages);
