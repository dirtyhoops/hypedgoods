import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Shoe from './Shoe';

import './ShoesListGrid.css';

const ShoesListGrid = ({ shoes }) => {
  // Sorts the collection (desc date_added)

  return (
    <div className='shoes-list-grid'>
      <div className='row'>
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

ShoesListGrid.propTypes = {
  shoes: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  shoes: state.shoe.shoes
});

export default connect(mapStateToProps)(ShoesListGrid);
