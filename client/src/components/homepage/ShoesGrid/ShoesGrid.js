import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getShoes } from '../../../actions/shoe';
import Spinner from '../../layout/Spinner/Spinner';
import Shoe from './Shoe';

import './ShoesGrid.css';

const ShoesGrid = ({ getShoes, shoes, loadingShoes }) => {
  useEffect(() => {
    getShoes();
  }, [getShoes]);

  return (
    <div className='wrapper-latestrelease-homepage'>
      <div className='header-latestrelease'>
        <p>new releases</p>
      </div>
      {shoes.length > 0 ? (
        <div className='grid-latestrelease'>
          <div className='row'>
            {shoes.slice(0, 12).map(shoe => (
              <Shoe key={shoe._id} shoe={shoe} />
            ))}
          </div>
          <Link to='/products/shoes'>
            <button className='btn btn-outline-dark'>See More Shoes</button>
          </Link>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

ShoesGrid.propTypes = {
  getShoes: PropTypes.func.isRequired,
  shoes: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  shoes: state.shoe.shoes
});

export default connect(
  mapStateToProps,
  { getShoes }
)(ShoesGrid);
