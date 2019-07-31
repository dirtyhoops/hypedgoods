import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getShoeModel } from '../../../actions/shoe';

import './RelatedShoes.css';

const RelatedShoes = ({ shoesWithModel, getShoeModel }) => {
  //change it to params
  useEffect(() => {
    getShoeModel('nike');
  }, []);

  return (
    <div className='wrapper-related-shoes'>
      <div className='header-related-shoes'>
        <h1>Related Shoes</h1>
      </div>

      {shoesWithModel ? (
        <div className='container-related-shoes'>
          {shoesWithModel.map(shoe => (
            <div className='column-related-shoes'>
              <div class='related-shoes-image'>
                <img src={shoe.images[0]} />
              </div>
              <div class='related-shoes-info'>
                <p>
                  {shoe.brand} {shoe.name}
                </p>
                <h1>{shoe.retail_price}+</h1>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

RelatedShoes.propTypes = {
  shoesWithModel: PropTypes.array.isRequired,
  getShoeModel: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shoesWithModel: state.shoe.shoesWithModel
});

export default connect(
  mapStateToProps,
  { getShoeModel }
)(RelatedShoes);
