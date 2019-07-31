import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Shoe from './Shoe';

import './ShoesListGrid.css';

const ShoesListGrid = ({ shoes }) => {
  // Sorts the collection (desc date_added)
  const myShoes = []
    .concat(shoes)
    .sort((a, b) => -1)
    .map(item => <Shoe key={item._id} shoe={item} />);
  return (
    <div className='shoes-list-grid'>
      <div className='row'>{myShoes}</div>
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
