import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getShoeModel } from '../../../actions/shoe';

import './RelatedShoes.css';

const RelatedShoes = ({
  getShoeModel,
  shoe: { shoesWithModel, loadingShoesWithModel },
  shoeBrand,
  click
}) => {
  //change it to params
  useEffect(() => {
    getShoeModel(shoeBrand);
  }, []);

  const changeShoes = (shoeId, newbrand) => {
    click(shoeId);
    getShoeModel(newbrand);
  };

  return (
    <div className='wrapper-related-shoes'>
      <div className='header-related-shoes'>
        <h1>Related Shoes</h1>
      </div>

      {loadingShoesWithModel && shoesWithModel === null ? (
        <p>related shoes are loading </p>
      ) : (
        <div className='container-related-shoes'>
          {shoesWithModel.map((shoe, index) => (
            <Link
              key={index}
              to={`/products/shoes/${shoe._id}`}
              onClick={() => changeShoes(shoe._id, shoe.brand)}
            >
              <div className='column-related-shoes'>
                <div className='related-shoes-image'>
                  <img src={shoe.images[0]} alt='relatedshoe_image' />
                </div>
                <div className='related-shoes-info'>
                  <p>
                    {shoe.brand} {shoe.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

RelatedShoes.propTypes = {
  shoesWithModel: PropTypes.array,
  getShoeModel: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  shoe: state.shoe,
  shoeBrand: ownProps.shoeBrand
});

export default connect(
  mapStateToProps,
  { getShoeModel }
)(RelatedShoes);
