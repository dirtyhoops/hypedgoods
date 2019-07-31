import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getShoes } from '../../../actions/shoe';
import Shoe from './Shoe';

import './ShoesGrid.css';

const ShoesGrid = ({ getShoes, shoes }) => {
  useEffect(() => {
    getShoes();
  }, []);

  return (
    <div className='wrapper-latestrelease-homepage'>
      <div className='header-latestrelease'>
        <p>latest kicks</p>
      </div>
      <div className='grid-latestrelease'>
        {shoes ? (
          <div className='row'>
            {shoes.map(shoe => (
              <Shoe key={shoe._id} shoe={shoe} />
            ))}
          </div>
        ) : null}
      </div>
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
